import { Routes, Route } from 'react-router-dom';
import Tic from './App';
import Sr from './Job';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Tic />} />
      <Route path="/search" element={<Sr />} />
    </Routes>
  )
}