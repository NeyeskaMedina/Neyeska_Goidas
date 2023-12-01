import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { IoMenuSharp } from "react-icons/io5"
import { NavLink, Link } from "react-router-dom";
import { FaUser, FaProjectDiagram } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import { UserContext } from "../context/UserContext";
import { ImPushpin } from "react-icons/im";
import { modeLigth, modeDark } from "../helper/mode";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

export const Navbar = () => {
const { ligthMode, setLigthMode } = useContext(UserContext);
const [open, setOpen] = useState(false);

const getLigthMode = () => {
  setLigthMode(true)
  modeLigth()
}
const getDarkMode = () => {
  setLigthMode(false)
  modeDark()
}
  return (
    <>
      <nav>
          <div className='navBar'>
          <h5>Neyeska Goidas {ligthMode ? <FaMoon onClick={getDarkMode} className='moon'/> : <FaSun onClick={getLigthMode} className='sun'/>}</h5>
          <ul className='ulViewXL'>
                <li><NavLink to="/about"><FaUser/>About me</NavLink></li>
                <li><NavLink to="/"><FaProjectDiagram/>Projects</NavLink></li>
                <li><NavLink to="/knowledge"><IoLibrary/>Knowledge</NavLink></li>
                <li><NavLink to="/network"><BiWorld/>Network</NavLink></li>
                <li><NavLink to="/others"><ImPushpin/>Others</NavLink></li>
          </ul>
          <Button
            className='d-flex justify-items-center'
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
          <IoMenuSharp 
            className='fs-1 icon'/>
          </Button>
          <Collapse in={open}>
            <div id="example-collapse-text">
              <ul className='navBarXL'>
                <li><NavLink to="/about">About me</NavLink></li>
                <li><NavLink to="/">Projects</NavLink></li>
                <li><NavLink to="/knowledge">Knowledge</NavLink></li>
                <li><NavLink to="/network">Network</NavLink></li>
                <li><NavLink to="/others">Others</NavLink></li>
              </ul>
            </div>
          </Collapse>
          </div>
      </nav>
    </>
  );
}

export default Navbar;