import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { RecipeDetails } from "../RecipeDetails";
import { NotFoundPage } from "../NotFoundRecipe";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
