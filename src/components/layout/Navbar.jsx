import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

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
        <div className="flex-none px-2 mx-2">
          <a href='#top' className='text-lg font-bold align-middle'>
            Helen Tan
          </a>
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className={`${dropdownOpen ? "nav-menu active": "nav-menu"} flex justify-end`}>
            <div className='nav-item'>
              <a href='#about' className='btn btn-ghost btn-sm rounded-btn'>
                About
              </a>
            </div>
            <div className='nav-item'>
              <a href='#experience' className='btn btn-ghost btn-sm rounded-btn'>
                Experience
              </a>
            </div>
            <div className='nav-item'>
              <a href='#portfolio' className='btn btn-ghost btn-sm rounded-btn'>
                Portfolio
              </a>
            </div>
            <div className='nav-item'>
              <a href='#contact' className='btn btn-ghost btn-sm rounded-btn'>
                Contact
              </a>
            </div>
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
