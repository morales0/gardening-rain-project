import { Link } from 'react-router-dom'
import "./Navbar.css"

export const Navbar = () => {
   return (
      <nav className="Navbar">
         <div className="brand">
            <Link to="/">Home</Link>
         </div>

         <ul className="navList">
            <li>
               <Link to="/gardening">Garden Stuff</Link>
            </li>
            <li>
               <Link to="/rain">Rain</Link>
            </li>
            <li>
               <Link to="/user">User</Link>
            </li>
         </ul>
      </nav>
   )
}