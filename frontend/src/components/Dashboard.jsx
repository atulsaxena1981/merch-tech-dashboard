import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [skus, setSkus] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSkus, setFilteredSkus] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/skus')
      .then(res => res.json())
      .then(data => {
        setSkus(data);
        setFilteredSkus(data);
      });
  }, []);

  useEffect(() => {
    const lowerSearch = searchTerm.toLowerCase();
    const filtered = skus.filter(sku =>
      sku.name.toLowerCase().includes(lowerSearch)
    );
    setFilteredSkus(filtered);
  }, [searchTerm, skus]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>SKU Dashboard</h1>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by SKU Name..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          style={{ padding: '8px', width: '300px' }}
        />
      </div>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>SKU ID</th><th>Name</th><th>Sales</th><th>Return %</th><th>Content Score</th>
          </tr>
        </thead>
        <tbody>
          {filteredSkus.map(sku => (
            <tr key={sku.id}>
              <td><Link to={`/sku/${sku.id}`}>{sku.id}</Link></td>
              <td>{sku.name}</td>
              <td>{sku.sales}</td>
              <td>{sku.returnPct}%</td>
              <td>{sku.contentScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
