import { NextResponse } from 'next/server';
import cheerio, { Cheerio, CheerioAPI, Element } from 'cheerio';
import axios from 'axios';
import type { NextRequest } from 'next/server';

type Content = string | string[] | undefined;

export interface CGCData {
  [key: string]: Content;
}

const CGC_URL = 'https://www.cgccomics.com/certlookup';

const FIELDS_TO_EXTRACT = [
  'CGC Cert #', 'Title', 'Issue', 'Issue Date', 'Issue Year',
  'Publisher', 'Variant', 'Grade', 'Page Quality', 'Grade Date',
  'Grade Category', 'Art Comments', 'Key Comments', 'Grader Notes', 'Signatures'
];

const fieldToKey = (field: string): string =>
  field.toLowerCase().replace(/ /g, '_');

async function fetchCgcPageContentFor(certNumber: string): Promise<CheerioAPI | null> {
  try {
    const { data } = await axios.get(`${CGC_URL}/${certNumber}`);
    return cheerio.load(data);
  } catch (error) {
    console.error('Error fetching CGC page data:', error);
    return null;
  }
}

function getSlabDataFrom(pageContent: CheerioAPI): CGCData {
  const rawData: CGCData = {};

  for (const field of FIELDS_TO_EXTRACT) {
    const domElementForField = getDomElementFor(field, pageContent);
    if (!domElementForField || domElementForField.length === 0) {
      console.warn(`Could not find element for field: ${field}`);
      continue;
    }

    const fieldContent = extractContentFrom(domElementForField);

    if (!fieldContent) continue;

    rawData[fieldToKey(field)] = decodeHtmlEntities(fieldContent);
  }

  const { "cgc_cert_#": certification_number, ...rest } = rawData;
  return { certification_number, ...rest };
}

function getDomElementFor(field: string, pageContent: CheerioAPI): Cheerio<Element> {
  return pageContent(`dt:contains("${field}")`).next('dd');
}

function extractContentFrom(element: Cheerio<Element>): string | undefined {
  return element.html()?.replace(/<br>/g, '\n').trim();
}

function decodeHtmlEntities(str: string): string {
  return str.replace(/&amp;/g, '&');
}


export async function GET(request: NextRequest): Promise<NextResponse> {
  const certificationNumber = request.nextUrl.searchParams.get("certificationNumber");

  if (!certificationNumber) {
    return NextResponse.json({ error: 'Certification number not provided' }, { status: 400 });
  }

  const pageContent = await fetchCgcPageContentFor(certificationNumber);

  if (!pageContent) {
    return NextResponse.json({ error: 'Failed to fetch data for the given certification number' }, { status: 500 });
  }

  const slabData = getSlabDataFrom(pageContent);

  return NextResponse.json(
    {
      body: slabData,
      path: request.nextUrl.pathname,
      query: request.nextUrl.search,
      cookies: request.cookies.getAll(),
    },
    { status: 200 }
  );
}

