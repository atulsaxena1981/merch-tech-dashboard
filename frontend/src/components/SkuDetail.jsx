import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function SkuDetail() {
  const { id } = useParams();
  const [sku, setSku] = useState(null);
  const [note, setNote] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(`http://localhost:4000/api/skus/${id}`)
      .then(res => res.json())
      .then(data => setSku(data));
  }, [id]);

  const handleAddNote = async () => {
    const res = await fetch(`http://localhost:4000/api/skus/${id}/notes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ note }),
    });
    if (res.ok) {
      setMessage('Note added!');
      setNote('');
    } else {
      setMessage('Failed to add note.');
    }
  };

  if (!sku) return <p>Loading...</p>;

  return (
    <div>
      <h2>SKU: {sku.name}</h2>
      <p>Sales: {sku.sales}</p>
      <p>Return %: {sku.returnPct}</p>
      <p>Content Score: {sku.contentScore}</p>

      <h3>Notes</h3>
      <ul>
        {sku.notes?.map((n, i) => (
          <li key={i}>{n.note} <small>({n.timestamp})</small></li>
        ))}
      </ul>

      <textarea value={note} onChange={e => setNote(e.target.value)} />
      <button onClick={handleAddNote}>Add Note</button>
      <p>{message}</p>
    </div>
  );
}