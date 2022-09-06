import { ReactComponent as Logo } from '../assets/logo.svg'
import { BsListCheck, BsBell, BsArrowBarRight } from "react-icons/bs"
import { FiMenu } from "react-icons/fi"
import useViewport from '../customHooks/useViewport'
import useBlur from '../customHooks/useBlur'

function Navbar() {
  const [open, setOpen, ref] = useBlur()
  const { width, breakpoint } = useViewport("800px")

  return (
    <nav className="navbar">
      <div className="logo">
        <Logo/>
        <h1>Centralized Catalog</h1>
      </div>
      <input 
        className="search"
        type="text"
        placeholder="Search"
      />
      <FiMenu className='menu-btn' onClick={() => setOpen(!open)}/>
      {(open || width >= breakpoint) && (
        <ul className="nav-links" ref={ref}>
          <li>Tools</li>
          <li>Catalogs</li>
        </ul>
      )}
      <ul className="nav-icons">
        <li>
          <BsListCheck/>
          <span>1</span>
        </li>
        <li>
          <BsBell/>
          <span>1</span>
        </li>
        <li><BsArrowBarRight/></li>
      </ul>
    </nav>
  )
}

export default Navbar