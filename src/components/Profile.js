import React from 'react'
import { useAuth } from '../utils/auth'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  const handleUserLogout = () => {
    auth.logout()
    navigate('/')
  }

  return (
    <section className='column'>
      <div>Profile Page</div>
      <p>Hii {auth.user}</p>
      <button className='combtn white-border-white' onClick={handleUserLogout}>Logout</button>
    </section>
  )
}

export default Profile
