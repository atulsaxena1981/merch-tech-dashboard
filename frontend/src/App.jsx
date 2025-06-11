import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import SkuDetail from './components/SkuDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/sku/:id" element={<SkuDetail />} />
      </Routes>
    </Router>
  );
}

export default App;