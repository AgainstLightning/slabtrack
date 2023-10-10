import { gql } from "@apollo/client";
import { makeClient } from "@/lib/client";
import { NextRequest, NextResponse } from "next/server";

const REMOVE_SLAB = gql`
mutation DeleteSlab($id: uuid!) {
  delete_slabs_by_pk(id: $id) {
    id
  }
}`;

const client = makeClient();

const removeSlab = async (id) => {
  try {
    const result = await client.mutate({
      mutation: REMOVE_SLAB,
      variables: {
        id
      },
    });
    console.log('Removed from database', result, result?.data)
    return result;
  } catch (err) {
    console.error('Error removing from database', err);
    return err;
  }
};

export async function POST(request: NextRequest): Promise<NextResponse> {
  const slabId = request.nextUrl.searchParams.get("id");


  if (!slabId) {
    return new NextResponse(JSON.stringify({
      success: false,
      message: "Slab ID not provided."
    }));
  }

  const dbResult = await removeSlab(slabId);

  return new NextResponse(JSON.stringify(dbResult));
}

