import styled from "styled-components";

export const FormContent = styled.form`
  font-weight: 100;
  padding: 19px;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-column-gap: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
    grid-row-gap: 15px;
  }
`;

export const Input = styled.input`
  padding: 10px;
  background: ${({ theme }) => theme.color.white};
  font-weight: 400;
  border: solid 1px grey;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-column: span 3;
  }
`;

export const Button = styled.button`
  padding: 10px;
  background: ${({ theme }) => theme.color.teal};
  color: ${({ theme }) => theme.color.white};
  font-weight: 400;
  border: none;
  transition: 1s;

  &:hover {
    background: ${({ theme }) => theme.color.blueDianne};
    transform: scale(1.2);
  }

  &:active {
    background: ${({ theme }) => theme.color.eden};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-column: span 3;
  }
`;
