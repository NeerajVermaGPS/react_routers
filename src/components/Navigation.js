import { useNavigate } from "react-router-dom"

const Navigation = () => {
  const navigate = useNavigate()
  return (
    <section className="column">
      Successfully navigated!
      <button onClick={() => navigate(-1)} style={{marginTop: "20px"}} className="combtn white-border-white">Go Back</button>
    </section>
  )
}

export default Navigation
