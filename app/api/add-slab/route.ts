import { makeClient } from "@/lib/client";
import { gql } from "@apollo/client";
import { NextRequest, NextResponse } from "next/server";
import { CGCData } from "../get-cgc-data/route";

const client = makeClient();

const INSERT_SLAB = gql`
  mutation InsertSlab($object: slabs_insert_input!) {
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
  console.log("slabData", slabData);
  try {
    const result = await client.mutate({
      mutation: INSERT_SLAB,
      variables: {
        object: slabData,
      },
    });
    console.log("result", result);
    return { success: true, data: result };
  } catch (err) {
    console.log("err", err);
    return { success: false, error: err };
  }
};

export async function POST(request: NextRequest): Promise<NextResponse> {
  const reqBody = await request.json();
  const dbResult = await addToDatabase(reqBody);
  console.log("dbResult", dbResult);

  if (dbResult.success) {
    return new NextResponse(JSON.stringify(dbResult.data), { status: 200 });
  } else {
    return new NextResponse(JSON.stringify({ error: dbResult.error }), { status: 500 });
  }
}

