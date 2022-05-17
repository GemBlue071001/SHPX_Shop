import './NavBar.css'
import { ImSearch } from 'react-icons/im'
import { BiCartAlt } from 'react-icons/bi'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="NavbarItems">
      <h1 className="navbar-logo">SHPX</h1>

      <nav>
        <ul className="nav-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a className="nav-link" href="/AboutUs">
              About Us
            </a>
          </li>
          <li>
            <a className="nav-link" href="/Pricing">
              Product
            </a>
          </li>
          <li>
            <a className="nav-link" href="/Pricing">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="SearchNCart">
        <ImSearch />

        <Link to="/bill">
          <BiCartAlt />
        </Link>
      </div>
    </div>
  )
}
