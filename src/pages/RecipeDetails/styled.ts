import styled from 'styled-components';

export const AdditionalInfo = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;

  a {
    padding: 5px 10px;
    border-radius: 5px;
    color: #592507;
    border: 2px solid #592507;
    text-decoration: none;
    transition: background-color 0.3s;

    &:hover {
      background-color: #592507;
      color: white;
    }
  }

  p {
    margin-right: 20px;
  }
`;

export const RecipeTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 24px;
`;

export const RecipeDetailsContainer = styled.div`
  align-items: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const RecipeImage = styled.img`
  margin-bottom: 20px;
  width: 300px;
  height: 300px;
  object-fit: cover;
`;

export const IngredientsList = styled.ul`
  margin-bottom: 20px;
  padding: 0;
  list-style-type: none;

  li {
    margin-bottom: 5px;
  }
`;

export const InstructionsList = styled.ol`
  margin-bottom: 20px;
  padding-left: 20px;

  li {
    margin-bottom: 5px;
  }
`;
