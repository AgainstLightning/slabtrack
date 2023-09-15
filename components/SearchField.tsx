"use client"

import { useCallback, useState } from "react";

const SearchField = () => {
  const [certNumber, setCertNumber] = useState('2815581007');
  const [cgcData, setCgcData] = useState({});
  const [tableData, setTableData] = useState([]);

  const handleSubmit: React.FormEventHandler = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:3000/api/serverless-demo?certNumber=${certNumber}`);
    if (res.ok) {
      const data = await res.json();
      console.log("data body", data.body);
      setCgcData(data.body);
    } else {
      console.log("HTTP-Error: " + res.status);
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
}

export default SearchField;
