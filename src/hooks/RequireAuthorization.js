// eslint-disable-next-line
import { Navigate, useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../utils/auth"
// import { useEffect } from "react"

const RequireAuthorization = ({children, returnPath}) => {
  const auth = useAuth()
  const location = useLocation()
//   const navigate = useNavigate()

if(!auth.user){
    return <Navigate to='/login' state={{path: location.pathname}}/>
}
//   useEffect(() => {
//      !auth.user && navigate(`/login?returnTo=${encodeURIComponent(returnPath)}`)
//   })
  return children
}

export default RequireAuthorization
