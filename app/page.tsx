import React from 'react';
import { getClient } from "@/lib/client";
import Table from '@/components/Table';
import SearchField from '@/components/SearchField';
import { gql } from '@apollo/client';

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
    <main className='px-8 py-4'>
      <div className='flex items-center justify-between pb-4'>
        <h1 className=''>CGC TRACK</h1>
        <SearchField />
      </div>
      <Table data={data.slabs} />
    </main>
  );
}
