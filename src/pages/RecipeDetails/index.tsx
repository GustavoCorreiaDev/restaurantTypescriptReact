import { RecipeDetailsContainer, RecipeImage, RecipeTitle, IngredientsList, InstructionsList } from './styled';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import recipesJson from '../../data/recipes.json';
import Recipe from '../../types/Recipe';
import { NotFoundPage } from '../NotFoundRecipe';

export const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = recipesJson.recipes.find((recipe: Recipe) => recipe.id === Number(id));

  if (!recipe) return <NotFoundPage />;

  useEffect(() => {
    document.title = `Gtech - Pratos | ${recipe.title}`;

    return () => {
      document.title = 'Gtech - Pratos';
    };
  }, [recipe.title]);

  return (
    <>
      <Header />
      <RecipeDetailsContainer>
        <RecipeImage src={recipe.image} alt={recipe.title} />
        <RecipeTitle>{recipe.title}</RecipeTitle>
        <h3>Ingredientes:</h3>
        <IngredientsList>
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </IngredientsList>
        <h3>Modo de preparo:</h3>
        <InstructionsList>
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </InstructionsList>
        {recipe.vegetarian && <p>Vegetariano</p>}
        {recipe.glutenFree && <p>Sem glúten</p>}
        {recipe.videoUrl && <a href={recipe.videoUrl}>Assistir vídeo</a>}
      </RecipeDetailsContainer>
    </>
  );
};
