import styled from 'styled-components';

const Button = styled.button`
  width: 100px;
  height: 30px;
  margin: 5px;
  border: 1px solid rgb(7, 63, 167);
  background-color: rgb(7, 63, 167);
  color: #ffffff;
  transition: background-color 0.3s linear, color 0.3s linear;
  &:hover {
    background-color: #ffffff;
    color: rgb(7, 63, 167);
  }
`;

export default Button;
