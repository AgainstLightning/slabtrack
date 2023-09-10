"use client"
import React, { useCallback, useState } from 'react';

export default function Home() {
  const [certNumber, setCertNumber] = useState('2815581007');
  const [data, setData] = useState({});


  const handleSubmit: React.FormEventHandler = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:3000/api/serverless-demo?certNumber=${certNumber}`);
    if (res.ok) {
      const data = await res.json();
      console.log("data body", data.body);
      setData(data.body);
    } else {
      console.log("HTTP-Error: " + res.status);
    }
  };


  const handleCertNumberChange: React.ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
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
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
