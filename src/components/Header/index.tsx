import { StyledHeader, StyledLink } from "./styled";

const Header = () => {
  return (
    <StyledHeader>
      <h1>
        <StyledLink to={"/"}>
          Gtech - Pratos
        </StyledLink>
      </h1>
    </StyledHeader>
  );
};

export default Header;
