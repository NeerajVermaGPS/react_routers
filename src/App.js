import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Navigation from './components/Navigation';
import NoRoutes from './components/NoRoutes';
import Products from './components/Products';
import Featured from './components/Featured';
import NewProducts from './components/NewProducts';
import ProductLists from './components/ProductLists';
import ProductDetails from './components/ProductDetails';
import Seller from './components/Seller';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='navigated' element={<Navigation/>}></Route>
        <Route path='products' element={<Products/>}>
          <Route index element={<Featured/>}/>
          <Route path="featured" element={<Featured/>}/>
          <Route path="new" element={<NewProducts/>}/>
          <Route path='product-listing' element={<ProductLists/>}/>
        </Route>
        <Route path='products/:productId' element={<ProductDetails/>}/>
        <Route path='products/seller' element={<Seller/>}/>
        <Route path='*' element={<NoRoutes/>}></Route>
      </Routes>
    </>
  );
}

export default App;
