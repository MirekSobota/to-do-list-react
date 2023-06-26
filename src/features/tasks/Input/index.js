import styled from "styled-components";

export default styled.input`
  padding: 10px;
  background: ${({ theme }) => theme.color.white};
  font-weight: 400;
  border: solid 1px grey;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-column: span 3;
  }
`;


