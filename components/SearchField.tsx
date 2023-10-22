"use client"

import { useState, useCallback } from 'react';
import { Input } from './ui/input';
import { useWizard } from 'react-use-wizard';

const SearchField = ({ setCgcData }: { setCgcData: any }) => {
  const [certNumber, setCertNumber] = useState('2815581007');
  const { handleStep, nextStep } = useWizard();

  handleStep(async () => {
    const res = await fetch(`http://localhost:3000/api/get-cgc-data/?certNumber=${certNumber}`);
    if (res.ok) {
      const data = await res.json();
      setCgcData(data.body);
    } else {
      console.log('HTTP-Error:', res.status);
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    setCertNumber(e.target.value)
  }, []);

  const handleSubmit = useCallback((e: any) => {
    e.preventDefault();
    e.stopPropagation();
    nextStep()
  }, []);

  return (
    <form onSubmit={handleSubmit} className='flex items-center'>
      <Input onChange={handleChange} type="number" placeholder="Enter CGC Number" value={certNumber} />
    </form>
  );
};

export default SearchField;


