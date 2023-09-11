import { PageName,LinkButton } from "./StyledComps.jsx";
import { NavLink} from "react-router-dom";

export default function Navbar(){
    return (
        <>
                    <NavLink to="/" activestyle="true">
                        <LinkButton><PageName>Home</PageName></LinkButton>
                    </NavLink>
                    <NavLink to="/about" activestyle="true">
                        <LinkButton><PageName>About</PageName></LinkButton>
                    </NavLink>
        </>
    );
}