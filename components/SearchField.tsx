"use client"

import { useState, useEffect, useCallback } from 'react';
import { Slabs_Insert_Input } from '@/lib/gql/types';

const SearchField = () => {
  const [certNumber, setCertNumber] = useState('2815581007');
  const [cgcData, setCgcData] = useState<Slabs_Insert_Input | null>(null);

  useEffect(() => {
    if (cgcData) {
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

  const handleCertNumberChange: React.ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    setCertNumber(e.target.value);
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Certification Number:
        <input type="text" value={certNumber} onChange={handleCertNumberChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchField;

async function saveSlabToDb(cgcData) {
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
  throw new Error('Function not implemented.');
}

