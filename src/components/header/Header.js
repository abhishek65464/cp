import classes from "./Header.module.css";
import Button from "../UI/Button";
import logoImg from '../../assets/logo.png';

const Header = (props) => {
    return ( <
        div className = { classes.header } >
        <
        ul className = { classes.pgln } >
        <
        li > < a > Services < /a></li >
        <
        li > < a > Industry < /a></li >
        <
        li > < a > About < /a></li >
        <
        li > < a > Contact Us < /a></li >
        <
        /ul> <
        div className = { classes.imgCont } > < img src = { logoImg }
        alt = "logo" / > < /div> <
        div className = { classes.btnCont } >
        <
        Button className = { classes.btn } > Login < /Button> <
        Button className = { classes.btn } > Free trail < /Button> <
        /div> <
        /div>
    );
};

export default Header;