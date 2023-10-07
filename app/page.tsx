"use client"

import React, { useEffect } from 'react';
import { gql, useSubscription } from '@apollo/client';
import Table from '@/components/Table';
import SearchField from '@/components/SearchField';

const SLABS_SUBSCRIPTION = gql`
subscription SlabsSubscription {
  slabs_stream(batch_size: 100, cursor: [{initial_value: {created_at: "2023-09-19T03:19:54.721981+00:00"}}]) {
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
    updated_at
    id
    created_at
  }
}
`;

export default function Home() {
  const { data, error, loading } = useSubscription(SLABS_SUBSCRIPTION);
  const [slabs, setSlabs] = React.useState(data?.slabs_stream || []);

  useEffect(() => {
    console.log('Data:', data);
    console.log('Error:', error);
    console.log('Loading:', loading);
    if (data?.slabs_stream) {
      setSlabs((prevSlabs) => [...prevSlabs, ...data?.slabs_stream]);

    }
  }, [data, error, loading]);


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error(error);
    return <div>Error: {error.message}</div>;
  }

  return (
    <main className='px-8 py-4'>
      <div className='flex items-center justify-between pb-4'>
        <h1 className=''>CGC TRACK</h1>
        <SearchField />
      </div>
      <Table data={slabs} />
    </main>
  );
}

