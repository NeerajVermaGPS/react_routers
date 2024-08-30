import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Navigation from './components/Navigation';
import NoRoutes from './components/NoRoutes';
import Products from './components/Products';
import Featured from './components/Featured';
import NewProducts from './components/NewProducts';
import ProductLists from './components/ProductLists';
import ProductDetails from './components/ProductDetails';
import Seller from './components/Seller';
import Profile from './components/Profile';
import { AuthProvider } from './utils/auth';
import Login from './components/Login';
import RequireAuthorization from './hooks/RequireAuthorization';
const LazyAbout = React.lazy(() => import('./components/About'));

function App() {
  return (
    <AuthProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='about' element={<React.Suspense fallback="Loading..."><LazyAbout/></React.Suspense>}></Route>
        <Route path='navigated' element={<Navigation/>}></Route>
        <Route path='products' element={<Products/>}>
          <Route index element={<Featured/>}/>
          <Route path="featured" element={<Featured/>}/>
          <Route path="new" element={
            <RequireAuthorization returnPath="/products/new"><NewProducts/></RequireAuthorization>
          }/>
          <Route path='product-listing' element={<ProductLists/>}/>
        </Route>
        <Route path='products/:productId' element={<ProductDetails/>}/>
        <Route path='products/seller' element={<Seller/>}/>
        <Route path='profile' element={
          <RequireAuthorization returnPath="/profile"><Profile/></RequireAuthorization>
        }/>
        <Route path='login' element={<Login/>}/>
        <Route path='*' element={<NoRoutes/>}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
