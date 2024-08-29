import { useNavigate, useParams } from "react-router-dom"

const ProductDetails = () => {
  const navigate = useNavigate()
  const { productId } = useParams()
  return (
    <section className="column">
      <div>Product details for Product {productId}</div>
      <button onClick={() => navigate(-1)} className="combtn white-border-white">Back</button>
    </section>
  )
}

export default ProductDetails
