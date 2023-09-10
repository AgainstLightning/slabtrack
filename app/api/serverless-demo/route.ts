import { NextResponse } from 'next/server';
import cheerio, { CheerioAPI } from 'cheerio';
import axios from 'axios';
import type { NextRequest } from 'next/server';
import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

type Content = string | string[] | undefined;

interface CGCData {
  [key: string]: Content;
}

const FIELDS = [
  'CGC Cert #', 'Title', 'Issue', 'Issue Date', 'Issue Year',
  'Publisher', 'Variant', 'Grade', 'Page Quality', 'Grade Date',
  'Grade Category', 'Art Comments', 'Key Comments', 'Grader Notes', 'Signatures'
];

const client = getClient();

const ADD_TO_DATABASE = gql`
  mutation AddToDatabase($slabData: slabs_insert_input!) {
    insert_slabs_one(object: $slabData) {
      id
    }
  }
`;

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

const addToDatabase = async (slabData: CGCData): Promise<void> => {
  console.log("slabData in addToDatabase", slabData)
  try {
    const result = await client.mutate({
      mutation: ADD_TO_DATABASE,
      variables: {
        slabData,
      },
    });
    console.log('Added to database', result, result?.data)
  } catch (err) {
    console.error('Failed to add to database', err);
  }
};


export async function GET(request: NextRequest): Promise<NextResponse> {
  const certNumber = "2815581007";
  const pageContent = await fetchCgcPageContentFor(certNumber);

  if (!pageContent) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }

  const slabData = scrapeSlabDataFrom(pageContent);
  console.log('slabData', slabData)
  const dbResult = await addToDatabase(slabData);
  console.log('dbResult', dbResult)

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

