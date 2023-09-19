import { NextResponse } from 'next/server';
import cheerio, { CheerioAPI } from 'cheerio';
import axios from 'axios';
import type { NextRequest } from 'next/server';

type Content = string | string[] | undefined;

export interface CGCData {
  [key: string]: Content;
}

const FIELDS = [
  'CGC Cert #', 'Title', 'Issue', 'Issue Date', 'Issue Year',
  'Publisher', 'Variant', 'Grade', 'Page Quality', 'Grade Date',
  'Grade Category', 'Art Comments', 'Key Comments', 'Grader Notes', 'Signatures'
];
const fieldToKey = (field: string): string => field.toLowerCase().replace(/ /g, '_');

const fetchCgcPageContentFor = async (certNumber: string): Promise<CheerioAPI | null> => {
  try {
    const { data } = await axios.get(`https://www.cgccomics.com/certlookup/${certNumber}/`);
    return cheerio.load(data);
  } catch (error) {
    console.error('Error fetching page data:', error);
    return null;
  }
};

const scrapeSlabDataFrom = (pageContent: CheerioAPI): CGCData => {
  const rawData: CGCData = {};

  FIELDS.forEach((field) => {
    const element = pageContent(`dt:contains("${field}")`).next('dd');
    if (element.length > 0) {
      const content = element.html()?.replace(/<br>/g, '\n').trim() as Content;
      rawData[fieldToKey(field)] = content;
    }
  });

  const { "cgc_cert_#": cgc_cert, ...rest } = rawData;
  return { certification_number: cgc_cert, ...rest };
};

export async function GET(request: NextRequest): Promise<NextResponse> {
  const certNumber = request.nextUrl.searchParams.get("certNumber")
  console.log(certNumber)
  // 4320451024, 4300997025, 4306429007, 3750817004
  const pageContent = await fetchCgcPageContentFor(certNumber as string);

  if (!pageContent) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }

  const slabData = scrapeSlabDataFrom(pageContent);

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

