import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import { NextRequest, NextResponse } from "next/server";
import { CGCData } from "../serverless-demo/route";

const client = getClient();

const INSERT_SLAB = gql`
  mutation InsertSlab($object: Slabs_Insert_Input!) {
    insert_slabs_one(object: $object) {
      certification_number
      title
      issue
      issue_date
      issue_year
      publisher
      grade
      page_quality
      grade_date
      grade_category
      art_comments
      key_comments
      grader_notes
      signatures
      asking_price
      purchase_date
      purchase_platform
      purchase_price
      personal_note
      created_at
      updated_at
      id
    }
  }
`;

const addToDatabase = async (slabData: CGCData) => {
  console.log("slabData in addToDatabase", slabData)
  try {
    const result = await client.mutate({
      mutation: INSERT_SLAB,
      variables: {
        object: slabData,
      },
    });
    console.log('Added to database', result, result?.data)
    return result;
  } catch (err) {
    console.error('Failed to add to database', err);
  }
};

export async function POST(request: NextRequest): Promise<NextResponse> {
  const body = await request.json();
  console.log("request body", body)
  return new NextResponse(JSON.stringify(body));
}
