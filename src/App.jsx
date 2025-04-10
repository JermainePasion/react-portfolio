// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import About from './screens/About';
import Services from './screens/Services';
import Products from './screens/Products';

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

