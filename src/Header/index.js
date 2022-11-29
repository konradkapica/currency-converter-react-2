import "./style.css";
import Date from "./Date";

const Header = ({ title }) => (
    <>
        <Date />
        <h1 className="header">
            {title}
        </h1>
    </>

);

export default Header;