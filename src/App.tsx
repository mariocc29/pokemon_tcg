import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Main } from './pages/main/Main';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
