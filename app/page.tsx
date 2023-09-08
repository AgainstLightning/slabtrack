"use client"
import { useCallback, useState } from 'react';
import { useCgcData } from './useCgcData';

export default function Home() {
  const [certNumber, setCertNumber] = useState('4287278003');
  const { data, isLoading } = useCgcData(certNumber);

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  const handleCertNumberChange = useCallback((e) => {
    setCertNumber(e.target.value);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>CGC Track</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Certification Number:
          <input type="text" value={certNumber} onChange={handleCertNumberChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <pre>{isLoading ? "loading" : JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
