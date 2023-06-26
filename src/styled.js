import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  text-decoration-line: none;
  color: ${({ theme }) => theme.color.white};
  &.active {
    color: ${({ theme }) => theme.color.white};
    font-weight: bold;
  }
`;

export const List = styled.ul`
  background: ${({ theme }) => theme.color.teal};
  padding: 5px;
  letter-spacing: 2px;
  list-style-type: none;
  font-size: 20px;
  display: flex;
  justify-content: center;
  margin-top: 0;
`;

export const Item = styled.li`
  padding: 10px;
`;

export const Navigation = styled.nav`
  margin: auto;
  width: 100%;
  max-width: 830px;
`;
