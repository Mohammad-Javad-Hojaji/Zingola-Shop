import { Link } from "react-router-dom";
import styled from "./linkNavbar.module.css";

function LinkNavbar(props) {
    let color=props.color
    return (
        <Link style={{borderBottom:`3px solid ${color}`}} to={props.to} className={styled.Link}>
            <i
                className={styled.i}
                style={{ background: `url(${props.icon}) center no-repeat` }}
            ></i>
            <li >{props.text}</li>
        </Link>
    );
}

export default LinkNavbar;