import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
    background: black;
    color: gray;
    padding: 20px;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color:  inherit;
    display: flex;
    gap: 12px;
    align-items: center;
`