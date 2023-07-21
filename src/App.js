import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/CalculatorRender';
import Quotes from './components/Quotes';
import Layout from './components/Layout';
import HomePage from './components/Home';

import './App.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quotes" element={<Quotes />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
