import { Route, Routes } from 'react-router-dom';
import Portfolio from './Pages/Portfolio';

function App() {
  return (
    <Routes>
      <Route path="" element={<Portfolio />} />
      <Route path="mujithaba_farahi" element={<Portfolio />} />
    </Routes>
  );
}

export default App;
