import styled, { css } from "styled-components";

export const Functions__Buttons = styled.div`
  align-self: center;
`;

export const Button = styled.button`
  background: none;
  border: none;
  color: hsl(188, 98%, 26%);

  ${({ disabled }) =>
    disabled &&
    css`
      color: hsl(0, 0%, 87%);

      $:hover {
        color: hsl(188, 50%, 26%);
      }
    `}
`;
