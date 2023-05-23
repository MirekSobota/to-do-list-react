import styled, { css } from "styled-components";

export const List = styled.ul`
  padding: 26px;
  background-color: white;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  border: none;
  width: 30px;
  height: 30px;
  transition: 0.6s;

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      color: white;
      background-color: hsl(120, 100%, 25%);

      &:hover {
        background-color: hsl(120, 40%, 25%);
        transform: scale(1.1);
      }
    `}

  ${({ remove }) =>
    remove &&
    css`
      color: white;
      background-color: hsl(0, 100%, 50%);

      &:hover {
        background-color: hsl(0, 40%, 50%);
        transform: scale(1.1);
      }
    `}
`;
