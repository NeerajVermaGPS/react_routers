import React, { useState } from 'react'
import { useAuth } from '../utils/auth'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

const Login = () => {
  const [user, setUser] = useState('')
  // eslint-disable-next-line
  const [ returnTo, setReturnTo ] = useSearchParams()
  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const handleUserLogin = () => {
    auth.login(user)
    location.state ? navigate(location.state.path, { replace: true }) : navigate('/', { replace: true })
    // returnTo.get("returnTo") ? navigate(returnTo.get("returnTo"), { replace: true }) : navigate('/', { replace: true })
  }
  return (
    <section className='column'>
        <div>
            <label htmlFor="username">Username</label><br />
            <input type="text" className="product-search mv-10" id='username' name='username' placeholder='Enter username' onChange={e=>setUser(e.target.value)}/>
        </div>
        <button className='combtn white-border-white' onClick={handleUserLogin}>Login</button>
    </section>
  )
}

export default Login
