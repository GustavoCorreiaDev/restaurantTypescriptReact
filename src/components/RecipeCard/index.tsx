import Recipe from "../../types/Recipe";
import { StyledListItem, StyledLink } from "./styled";

interface Props {
  recipe: Recipe;
}

export const RecipeCard = (props: Props) => {
  const { id, image, title, prepTime, servings } = props.recipe;
  return (
    <StyledListItem>
      <StyledLink to={`/recipe/${id}`}>
        <div className="image-container">
          <img src={image} alt={title} width={300} height={180} />
        </div>
        <div  className="content-container">
          <h3>{title}</h3>
          <p>{prepTime}</p>
          <p>{servings}</p>          
        </div>
      </StyledLink>
    </StyledListItem>
  );
};