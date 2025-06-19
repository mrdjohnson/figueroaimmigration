import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from './routes/home';

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/en" element={<Home />} />
      <Route path="/es" element={<Home />} />
      
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
