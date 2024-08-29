import { useNavigate } from "react-router-dom"

const Seller = () => {
  const navigate = useNavigate()
  return (
    <section className="column">
      <div>Seller Page</div>
      <button onClick={() => navigate(-1)} className="combtn white-border-white">Back</button>
    </section>
  )
}

export default Seller
