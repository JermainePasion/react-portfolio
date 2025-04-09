// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './sections/Home';
import About from './sections/About';
import Services from './sections/Services';
import Products from './sections/Products';

function App() {
  return (
    <Routes>
      < Route path="/" element={<Home/>} />
      < Route path="/about" element={<About/>} />
      < Route path="/services" element={<Services/>} />
      < Route path="/products" element={<Products/>} />
    </Routes>
  );
}

export default App;

