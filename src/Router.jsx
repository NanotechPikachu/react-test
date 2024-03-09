import { Routes, Route } from 'react-router-dom';
import Main from './pages/App.jsx';
import Start from './pages/Start.jsx';
import Result from './pages/Result.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/start" element={<Start />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  )
}
