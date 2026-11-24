import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './screens/Home';
import About from './screens/About';
import Services from './screens/Services';
import Products from './screens/Products';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="products" element={<Products />} />
      </Route>
    </Routes>
  );
}

export default App;
