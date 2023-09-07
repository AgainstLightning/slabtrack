"use client"

export default function Home() {
  const [certNumber, setCertNumber] = useState('');
  const {data, isLoading} = useCgcData(certNumber)

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>CGC Track</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Certification Number:
          <input type="text" value={certNumber} onChange={(e) => setCertNumber(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
