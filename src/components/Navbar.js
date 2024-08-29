import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const navBtnStyles = ({isActive}) => {
    return {
        background: isActive ? "white" : "transparent",
        color: isActive ? "black" : "white"
    }
  }
  return (
    <nav className='primary-nav'>
      <NavLink to='/' className='combtn white-border-transparent' style={navBtnStyles}>Home</NavLink>
      <NavLink to='/about' className='combtn white-border-transparent' style={navBtnStyles}>About</NavLink>
      <NavLink to='/products' className='combtn white-border-transparent' style={navBtnStyles}>Products</NavLink>
    </nav>
  )
}

export default Navbar
