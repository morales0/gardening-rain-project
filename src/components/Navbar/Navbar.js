import { Link } from 'react-router-dom'
import "./Navbar.css"

export const Navbar = () => {
   return (
      <nav className="Navbar">
         <div className="brand">
            <Link to="/crops">Home</Link>
         </div>

         <ul className="navList">
            <li>
               <Link to="/crops">Crops</Link>
            </li>
            <li>
               <Link to="/quiz">Quiz</Link>
            </li>
            <li>
               <Link to="/rain">Rain</Link>
            </li>
         </ul>
      </nav>
   )
}
