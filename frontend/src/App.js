import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Loginsignup from "./Pages/Loginsignup";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer/Footer";
import smartphones_banner  from './Components/Assets/smartphones_banner.jpeg';
import smartwatches_banner  from './Components/Assets/smartwatches_banner.jpeg';
import speakersheadphones_banner  from './Components/Assets/speakers&headphones_banner.jpeg';
import Loginpage from "./Pages/Loginpage";
import { Admin } from "./Pages/Admin";
import Order from "./Components/Order/Order";
import Orderlist from "./Components/Orderlist/Orderlist";

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Shop/>}/>
      <Route path="/smartphones" element={<ShopCategory banner={smartphones_banner} category="Smart Phone"/>}/>
      <Route path="/smartwatches" element={<ShopCategory banner={smartwatches_banner}category="Smart Watch"/>}/>
      <Route path="/speakers&headphones" element={<ShopCategory banner={speakersheadphones_banner}category="Speaker & HeadPhone"/>}/>
      <Route path="/product" element={<Product/>}>
        <Route path=":productId" element={<Product/>}/>
      </Route>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<Loginpage/>}/>
      <Route path="/signin" element={<Loginsignup/>}/>
      <Route path="/Admin" element={<Admin/>}/>
      <Route path="/Order" element={<Order/>}/>
      <Route path="/Orderlist" element={<Orderlist/>}/>
      

    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  );
}

export default App;
