import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import ShopCategory from "./Pages/ShopCategory";
import smartphones_banner from "./Components/Assets/banner_smartphones.png";
import laptops_banner from "./Components/Assets/banner_laptops.png";
import books_banner from "./Components/Assets/banner_books.png";
import LoginSignup from "./Pages/LoginSignup";

export const backend_url = 'http://localhost:4000';
export const currency = '₹';

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop gender="all" />} />
          <Route path="/laptops" element={<ShopCategory banner={laptops_banner} category="laptops" />} />
          <Route path="/smartphones" element={<ShopCategory banner={smartphones_banner} category="smartphones" />} />
          <Route path="/books" element={<ShopCategory banner={books_banner} category="books" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
