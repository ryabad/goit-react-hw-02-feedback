import Container from './Container.styled';

const Section = ({ children, title }) => {
  return (
    <Container>
      <h1>{title}</h1>
      {children}
    </Container>
  );
};

export default Section;
