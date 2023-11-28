import { Link, NavLink } from "react-router-dom";
export const NavegationTwo = () => {
    return (
        <div className="navegationTwo">
            <ul>
                <li><NavLink className={ ( {isActive} ) =>  isActive ? "active" : undefined} to="/about">About me</NavLink></li>
                <li><NavLink className={ ( {isActive} ) =>  isActive ? "active" : undefined} to="/">Projects</NavLink></li>
                <li><NavLink className={ ( {isActive} ) =>  isActive ? "active" : undefined} to="/knowledge">Knowledge</NavLink></li>
                <li><NavLink className={ ( {isActive} ) =>  isActive ? "active" : undefined} to="/network">Network</NavLink></li>
                <li><NavLink className={ ( {isActive} ) =>  isActive ? "active" : undefined} to="/others">Others</NavLink></li>
            </ul>
        </div>
    )
}
export default NavegationTwo;