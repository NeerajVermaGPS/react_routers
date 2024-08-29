import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to='/' className='combtn white-border-white'>Home</Link>
      <Link to='/about' className='combtn white-border-white'>About</Link>
    </nav>
  )
}

export default Navbar
