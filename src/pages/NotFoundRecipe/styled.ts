import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  gap: 16px;
  display: flex;
  justify-content: center;
  color: #592507;
  height: 100vh; /* height first */
  flex-direction: column;
  align-items: center;
  width: 100%; /* width after height */

  h1 {
    font-size: 60px;
  }

  p {
    font-size: 28px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #A63208;

  &:hover {
    text-decoration: underline;
  }
`;
