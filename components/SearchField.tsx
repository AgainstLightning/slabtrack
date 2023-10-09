"use client"

import { useState, useEffect, useCallback } from 'react';
import { Slabs_Insert_Input } from '@/lib/gql/types';
import { Input } from './ui/input';
import { useWizard } from 'react-use-wizard';

const SearchField = ({ setCgcData }) => {
  const [certNumber, setCertNumber] = useState('2815581007');
  const { handleStep, nextStep } = useWizard();
  handleStep(async () => {
    const res = await fetch(`http://localhost:3000/api/serverless-demo?certNumber=${certNumber}`);
    if (res.ok) {
      const data = await res.json();
      setCgcData(data.body);
    } else {
      console.log('HTTP-Error:', res.status);
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(`transitioning from step 1`);
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    setCertNumber(e.target.value)
  }, []);

  return (
    <form onSubmit={nextStep} className='flex items-center'>
      <Input onChange={handleChange} type="number" placeholder="Enter CGC Number" />
    </form>
  );
};

export default SearchField;

async function saveSlabToDb(cgcData: any) {
  const res = await fetch(`http://localhost:3000/api/add-slab`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cgcData),
  })
  if (res.ok) {
    const data = await res.json();
    console.log("post response", data)
  } else {
    console.log('HTTP-Error:', res.status);
  }
}

