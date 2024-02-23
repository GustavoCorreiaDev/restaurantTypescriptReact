import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledListItem = styled.li`
  list-style: none;
  width: 320px;
  height: 320px;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  .image-container {
    width: 100%;
    height: 60%;
    border-radius: 8px 8px 0 0;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .content-container {
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 20px 20px;
  }
`;

export const StyledLink = styled(Link)`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  text-decoration: none;
`;