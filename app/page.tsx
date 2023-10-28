"use client"

import React, { useEffect } from 'react';
import { gql, useSubscription } from '@apollo/client';

import Table from './components/Table';
import WizardModal from "./components/WizardModal";
import Webcam from "./components/Webcam";

const SLABS_SUBSCRIPTION = gql`
subscription SlabsSubscription {
  slabs(order_by: {created_at: desc}) {
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
  const [slabs, setSlabs] = React.useState(data?.slabs || []);

  useEffect(() => {
    if (data?.slabs) setSlabs(data.slabs);
  }, [data]);

  if (loading) return <div>Loading...</div>;

  if (error) {
    return <div>Error: {error.message}</div>;
  }


  return (
    <main className='px-8 py-4'>
      <div className='flex items-center justify-between pb-4'>
        <span className='text-lg'><span className='font-black'>SLAB</span>TRACK</span>
        <WizardModal />
      </div>
      <Webcam />

      <Table data={slabs} />
    </main>
  );
}

