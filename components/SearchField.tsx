"use client"

import { useState, useCallback } from 'react';
import { Input } from './ui/input';
import { useWizard } from 'react-use-wizard';

const SearchField = ({ setCgcData }: { setCgcData: any }) => {
  const [certNumber, setCertNumber] = useState('2815581007');
  const { handleStep, nextStep } = useWizard();

  handleStep(async () => {
    const { body } = await fetchCgcDataByCertificationNumber(certNumber);
    if (body) {
      console.log('inner', body);
      setCgcData(body)
    }
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

async function fetchCgcDataByCertificationNumber(certificationNumber: string) {
  const response = await fetch(`/api/get-cgc-data?certificationNumber=${certificationNumber}`, {
    method: "GET",
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.error("Error removing slab");
    console.error(response);
  }
}

