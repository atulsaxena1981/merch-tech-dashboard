const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

const skus = require('./data/skus.json');
const notes = {};

app.get('/api/skus', (req, res) => {
  res.json(skus);
});

app.get('/api/skus/:id', (req, res) => {
  const sku = skus.find(s => s.id === req.params.id);
  sku ? res.json({ ...sku, notes: notes[sku.id] || [] }) : res.status(404).send('SKU not found');
});

app.post('/api/skus/:id/notes', (req, res) => {
  const { note } = req.body;
  if (!note) return res.status(400).send('Note content is required');
  if (!notes[req.params.id]) notes[req.params.id] = [];
  notes[req.params.id].push({ note, timestamp: new Date() });
  res.status(200).json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});