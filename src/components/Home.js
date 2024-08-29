import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  return (
    <section className="column">
      Home Page
      <button onClick={() => navigate("navigated")} style={{marginTop: "20px"}} className="combtn white-border-white">Navigate</button>
    </section>
  )
}

export default Home
