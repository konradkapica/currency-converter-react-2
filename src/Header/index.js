import "./style.css";
import Clock from "./Date";

const Header = ({ title }) => (
    <>
        <Clock />
        <h1 className="header">
            {title}
        </h1>
    </>

);

export default Header;