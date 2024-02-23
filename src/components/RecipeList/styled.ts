import styled from "styled-components";

export const RecipeListContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 1rem;

  .search-bar-container {
    display: flex;
    align-items: center;
    gap: 16px;
    width: 500px;
    height: 50px;
    padding: 12px;
    color: #592507;
    border: 2px solid #592507;
    border-radius: 16px;
    background-color: #fff;
  }
`;

export const Input = styled.input`
  font-size: 10px;
  outline: none;
  border: none;
  background: none;

  &::-webkit-input-placeholder {
    color: gray;
  }
`;

export const StyledUl = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
  place-items: center;
`;
