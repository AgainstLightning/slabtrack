"use client"
import Table from '@/components/Table';
import React, { useCallback, useState } from 'react';

const testData = [
  {
    certification_number: "2815581007",
    title: "Bone",
    issue: "1",
    issue_date: "1/96",
    issue_year: "1996",
    publisher: "Image Comics",
    grade: "9.6",
    page_quality: "WHITE",
    grade_date: "06/29/2023",
    grade_category: "Signature",
    art_comments: "Jeff Smith cover",
    key_comments: "Reprints Bone #1 from Cartoon Books.",
    grader_notes: "indent center of front cover",
    signatures: "SIGNED & SKETCH BY JEFF SMITH ON 6/16/23"
  },
  {
    certification_number: "2815581007",
    title: "Bone",
    issue: "1",
    issue_date: "1/96",
    issue_year: "1996",
    publisher: "Image Comics",
    grade: "9.6",
    page_quality: "WHITE",
    grade_date: "06/29/2023",
    grade_category: "Signature",
    art_comments: "Jeff Smith cover",
    key_comments: "Reprints Bone #1 from Cartoon Books.",
    grader_notes: "indent center of front cover",
    signatures: "SIGNED & SKETCH BY JEFF SMITH ON 6/16/23"
  }
]

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
      <Table data={testData} />
      <pre>{JSON.stringify(data, null, 2)}</pre>

    </main>
  );
}
