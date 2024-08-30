import { NavLink } from 'react-router-dom'
import { useAuth } from '../utils/auth';

const Navbar = () => {
  const auth = useAuth()
  // const navBtnStyles = ({isActive}) => {
  //   return {
  //       background: isActive ? "white" : "transparent",
  //       color: isActive ? "black" : "white"
  //   }
  // }
  console.log(auth)
  return (
    <nav className='primary-nav'>
      <NavLink to='/' className='combtn white-border-transparent'>Home</NavLink>
      <NavLink to='/about' className='combtn white-border-transparent'>About</NavLink>
      <NavLink to='/products' className='combtn white-border-transparent'>Products</NavLink>
      <NavLink to='/profile' className='combtn white-border-transparent'>Profile</NavLink>
      {
        !auth.user && <NavLink to='/login' className='combtn white-border-transparent'>Login</NavLink>
      }
    </nav>
  )
}

export default Navbar
