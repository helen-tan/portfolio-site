import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

function Navbar() {
  const [transparent, setTransparent] = useState(true)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  // Change navbar color when scrolling
  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setTransparent(false)
    } else {
      setTransparent(true)
    }
  }

  window.addEventListener('scroll', changeBackground);

  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
    if (window.scrollY <= 100) setTransparent(!transparent)
  }

  return (
    <nav className={`navbar sticky top-0 text-neutral-content ${transparent ? "navbar-transparent": "navbar-black shadow-lg"}`}>
      <div className="container mx-auto">
        <div className="logo flex-none px-2 mx-2">
          <Link to='top' spy={true} smooth={true} offset={0} duration={500} className='text-lg font-bold align-middle'>
            Helen Tan
          </Link>
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className={`${dropdownOpen ? "nav-menu active": "nav-menu"} flex justify-end`}>
            <Link to='about' spy={true} smooth={true} offset={-64} duration={500} className='nav-item'>
              About
            </Link>

            <Link to='experience' spy={true} smooth={true} offset={-64} duration={500} className='nav-item'>
              Experience
            </Link>

            <Link to='portfolio' spy={true} smooth={true} offset={-64} duration={500} className='nav-item'>
              Portfolio
            </Link>

            <Link to='contact' spy={true} smooth={true} offset={-64} duration={500} className='nav-item'>
              Contact
            </Link>
          </div>
        </div>

        <div className='hamburger' onClick={handleDropdown}>
          {dropdownOpen ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
