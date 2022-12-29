import { StyledHeader } from "./styled"
import Clock from "./Date";

const Header = ({ title }) => (
    <header>
        <Clock />
        <StyledHeader>
            {title}
        </StyledHeader>
    </header>
);

export default Header;