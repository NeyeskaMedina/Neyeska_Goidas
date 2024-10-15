import { FiMenu } from "react-icons/fi";
import { NavLink, Link } from "react-router-dom";



export const Navbar = () => {
const handleClick = (e) => {
    e.preventDefault();
    console.log(e);
    
}


  return (
    <>
      <nav>
          <div className='navBar ovo-regular'>
          <ul className='ulViewXL'>
                <li><NavLink to="/about">About me</NavLink></li>
                <li><NavLink to="/">Projects</NavLink></li>
                <li><NavLink to="/knowledge">Knowledge</NavLink></li>
                <li><NavLink to="/others">Others</NavLink></li>
          </ul>

          <FiMenu
              className='iconBurguer'
              style={{cursor: 'pointer'}}
              size={40}
              onClick={handleClick}
          />
          <h1 className='iconBurguer' style={{margin: '0 0 0 20px', cursor: 'pointer' }}>Neyeska Goidas</h1>
          </div>
      </nav>
    </>
  );
}

export default Navbar;