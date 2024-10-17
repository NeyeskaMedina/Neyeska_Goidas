import { Link, NavLink } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { PiFolderOpenThin } from "react-icons/pi";
import { PiPencilSimpleThin } from "react-icons/pi";
import { PiRocketThin } from "react-icons/pi";




export const NavegationTwo = () => {
    return (
        <div className="navegationTwo">
            <ul>
                <li><NavLink style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} className={ ( {isActive} ) =>  isActive ? "active" : undefined} to="/about">About me <CiUser size={38}/></NavLink></li>
                <li><NavLink style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} className={ ( {isActive} ) =>  isActive ? "active" : undefined} to="/">Projects <PiFolderOpenThin size={40}/></NavLink></li>
                <li><NavLink style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} className={ ( {isActive} ) =>  isActive ? "active" : undefined} to="/knowledge">Knowledge <PiPencilSimpleThin size={40}/></NavLink></li>
                <li><NavLink style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} className={ ( {isActive} ) =>  isActive ? "active" : undefined} to="/others">Others <PiRocketThin size={40}/></NavLink></li>
            </ul>
        </div>
    )
}
export default NavegationTwo;