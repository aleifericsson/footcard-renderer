import { PageName,LinkButton,Title } from "./StyledComps.jsx";
import { NavLink} from "react-router-dom";
import "../css/Navbar.css";

export default function Navbar(){
    return (
        <div className="navbar">
            <div className="navtit">
                <Title>Footcard Renderer</Title>
            </div>
            <div className = "navbutts">
                    <NavLink to="/" activestyle="true">
                        <LinkButton><PageName>Home</PageName></LinkButton>
                    </NavLink>
                    <NavLink to="/about" activestyle="true">
                        <LinkButton><PageName>About</PageName></LinkButton>
                    </NavLink>
            </div>
        </div>
    );
}