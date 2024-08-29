import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const ProductLists = () => {
  const products = [
    {
        id: 1,
        name: "Product 1",
        tag: "active"
    },
    {
        id: 2,
        name: "Product 2",
        tag: ""
    },
    {
        id: 3,
        name: "Product 3",
        tag: "active"
    },
    {
        id: 4,
        name: "Product 4",
        tag: ""
    },
  ]
  const [searchParams, setSearchParams] = useSearchParams()
  const [showProducts, setShowProducts] = useState(products)
  const showActiveProducts = searchParams.get('filter') === 'active'
  return (
    <section className='column'>
      { showActiveProducts ? <h3>Showing active products</h3> : <h3>Showing all products</h3> }
      <div className='mv-10'>
        <button className='combtn inline-button' style={{marginRight: "10px"}} onClick={() => {setSearchParams({filter: "active"}); setShowProducts(products.filter(product => product.tag === 'active'))}}>Show active products</button>
        <button className='combtn inline-button' onClick={() => {setSearchParams({}); setShowProducts(products)}}>Show all products</button>
      </div>
      { showProducts.map(product => <Link key={product.id} to={'/products/'+product.id} className='pv-10'>{product.name}</Link>) }
      <Link to='/products/seller' className="pv-10">About Seller</Link>
    </section>
  )
}

export default ProductLists