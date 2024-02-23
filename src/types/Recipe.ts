type Recipe = {
    id: number,
    title: string,
    category: string,
    image: string,
    ingredients: string[],
    instructions: string[],
    prepTime: string,
    servings: string,
    vegetarian?: boolean,
    glutenFree: boolean,
    videoUrl?: null | string
};

export default Recipe;

