import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div className='center column'>
      <h2>Products</h2>
      <div className='mv-10'>
        <input type="text" className="product-search" />
        <button className='combtn white-border-white'>Search</button>
      </div>
      <nav>
        <Link to='featured' className='combtn inline-button'>Featured</Link>
        <Link to='new' style={{marginLeft: "10px"}} className='combtn inline-button'>New</Link>
        <Link to='product-listing' style={{marginLeft: "10px"}} className='combtn inline-button'>All</Link>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Products
