import { PageName,Title } from "./StyledComps.jsx";
import { NavLink} from "react-router-dom";
import "../css/Navbar.css";
import Logo from "../assets/footcard_logo.svg?react";

export default function Navbar(){
    return (
        <div className="navbar">
            <div className="navtit">
                <Title>Footcard Renderer</Title>
                <Logo className="web-logo"/>
            </div>
            <div className = "navbutts">
                    <NavLink to="/footcard-renderer/" activestyle="true">
                        <PageName>Home</PageName>
                    </NavLink>
                    <NavLink to="/footcard-renderer/about" activestyle="true">
                        <PageName>About</PageName>
                    </NavLink>
            </div>
        </div>
    );
}