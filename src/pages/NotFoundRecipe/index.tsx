import { Container, StyledLink } from "./styled";

export const NotFoundPage = () => {
  return (
    <Container>
      <h1>404</h1>
      <p>não encontrada.</p>
      <StyledLink to="/">Voltar para o inicio</StyledLink>
    </Container>
  );
};