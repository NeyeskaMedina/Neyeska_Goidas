import { Link, NavLink } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { FaRegFolderOpen } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { MdOutlineSpaceDashboard } from "react-icons/md";




export const NavegationTwo = () => {
    return (
        <div className="navegationTwo">
            <ul>
                <li><NavLink style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} className={ ( {isActive} ) =>  isActive ? "active" : undefined} to="/about">About me <CiUser size={29}/></NavLink></li>
                <li><NavLink style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} className={ ( {isActive} ) =>  isActive ? "active" : undefined} to="/">Projects <FaRegFolderOpen size={29}/></NavLink></li>
                <li><NavLink style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} className={ ( {isActive} ) =>  isActive ? "active" : undefined} to="/knowledge">Knowledge <GoPencil size={29}/></NavLink></li>
                <li><NavLink style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} className={ ( {isActive} ) =>  isActive ? "active" : undefined} to="/others">Others <MdOutlineSpaceDashboard size={29}/></NavLink></li>
            </ul>
        </div>
    )
}
export default NavegationTwo;