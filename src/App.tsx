import { Route, Routes } from 'react-router-dom';
import { Main } from '/@pages/main/Main';

export const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Main />}/>
    </Routes>
  )
}
