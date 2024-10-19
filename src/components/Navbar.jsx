import { FiMenu } from "react-icons/fi";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import ModalMenu from "../components/ModalMenu.jsx";



export const Navbar = () => {
  const [ openModal, setOpenModal ] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setOpenModal(true);
  }

  const handleClose = () => {
    setOpenModal(false);
  }

  return (
    <>
      <nav >
          <div className='navBar ovo-regular'>
          <FiMenu
              className='iconBurguer'
              style={{cursor: 'pointer'}}
              size={40}
              onClick={handleClick}
          />
          <h1 className='iconBurguer' style={{margin: '0 0 0 20px', cursor: 'pointer' }}>Neyeska Goidas</h1>

          <ul className='ulViewXL'>
                <li><NavLink to="/about">About me</NavLink></li>
                <li><NavLink to="/">Projects</NavLink></li>
                <li><NavLink to="/knowledge">Knowledge</NavLink></li>
                <li><NavLink to="/others">Others</NavLink></li>
          </ul>
          </div>
      </nav>
      <ModalMenu openModal={openModal} handleClose={handleClose} />
    </>
  );
}

export default Navbar;