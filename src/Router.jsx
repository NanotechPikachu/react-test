import { Routes, Route } from 'react-router-dom';
import Tic from './App';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Tic />} />
    </Routes>
  )
}
