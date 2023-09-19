import React from 'react';
import { getClient } from "@/lib/client";
import Table from '@/components/Table';
import SearchField from '@/components/SearchField';
import { gql } from '@apollo/client';
import { Button } from '@nextui-org/button';


const client = getClient();

const GET_ALL_SLABS = gql`
  query MyQuery {
    slabs {
      certification_number
      title
      variant
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

export default async function Home() {
  let data = { slabs: [] };

  try {
    const result = await client.query({
      query: GET_ALL_SLABS,
    });
    data.slabs = result?.data?.slabs;
    console.log('data', data)
  } catch (err) {
    console.error('Failed to fetch slabs', err);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>CGC Track</h1>
      <Button color='primary'>Button</Button>
      <SearchField />
      <Table data={data.slabs} />
    </main>
  );
}
