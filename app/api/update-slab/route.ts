import { makeClient } from "@/lib/client";
import { gql } from "@apollo/client";
import { NextRequest, NextResponse } from "next/server";
import { Slabs_Insert_Input } from "@/lib/gql/graphql";

const client = makeClient();

const UPDATE_SLAB = gql`
  mutation UpdateSlab($id: uuid!, $set: slabs_set_input!) {
    update_slabs_by_pk(pk_columns: {id: $id}, _set: $set) {
      purchase_date
      purchase_platform
      purchase_price
      personal_note
    }
  }
`;

const updateSlab = async (id: string, slabData: Partial<Slabs_Insert_Input>) => {
  try {
    const result = await client.mutate({
      mutation: UPDATE_SLAB,
      variables: {
        id: id,
        set: slabData,
      },
    });
    return result;
  } catch (err) {
    console.error('Failed to update', err);
    return err;
  }
};

export async function POST(request: NextRequest): Promise<NextResponse> {
  const { id, ...restOfData } = await request.json();
  const dbResult = await updateSlab(id, restOfData);

  return new NextResponse(JSON.stringify(dbResult));
}
