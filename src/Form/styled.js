import styled from "styled-components";

export const FormContent = styled.form`
  font-weight: 100;
  padding: 19px;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-column-gap: 15px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-row-gap: 15px;
  }
`;

export const Input = styled.input`
  padding: 10px;
  background-color: white;
  font-weight: 400;
  border: solid 1px grey;

  @media (max-width: 767px) {
    grid-column: span 3;
  }
`;

export const Button = styled.button`
  padding: 10px;
  background-color: hsl(188, 98%, 26%);
  color: rgb(255 255 255);
  font-weight: 400;
  border: none;
  transition: 1s;

  &:hover {
    background-color: hsl(188, 50%, 26%);
    transform: scale(1.2);
  }

  &:active {
    background-color: hsl(188, 70%, 16%);
  }

  @media (max-width: 767px) {
    grid-column: span 3;
  }
`;
