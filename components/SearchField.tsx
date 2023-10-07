"use client"

import { useState, useEffect, useCallback } from 'react';
import { Slabs_Insert_Input } from '@/lib/gql/types';
import { Button, Input } from '@nextui-org/react';

const SearchField = () => {
  const [certNumber, setCertNumber] = useState('2815581007');
  const [cgcData, setCgcData] = useState<Slabs_Insert_Input | null>(null);

  useEffect(() => {
    if (cgcData) {
      console.log("cgcData to save in useEffect", cgcData)
      saveSlabToDb(cgcData);
    }
  }, [cgcData]);

  const handleSubmit: React.FormEventHandler = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:3000/api/serverless-demo?certNumber=${certNumber}`);
    if (res.ok) {
      const data = await res.json();
      setCgcData(data.body);
    } else {
      console.log('HTTP-Error:', res.status);
    }
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    setCertNumber(e.target.value)
  }, []);

  return (
    <form onSubmit={handleSubmit} className='flex items-center'>
      <Input onChange={handleChange} size="sm" type="number" label="Certification Number" placeholder="Enter CGC Number" />
      <Button color="primary" type="submit">Submit</Button>
    </form>
  );
};

export default SearchField;

async function saveSlabToDb(cgcData: any) {
  console.log("data to save", cgcData)
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

