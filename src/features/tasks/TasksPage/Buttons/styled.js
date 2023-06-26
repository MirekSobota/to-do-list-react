import styled, { css } from "styled-components";

export const StyledButtons = styled.div`
  align-self: center;
  justify-self: end;
  

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    justify-self: center;
    padding: 5px;
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.color.teal};

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.color.alto};

      $:hover {
        color: ${({ theme }) => theme.color.blueDianne};
      }
    `}
`;
