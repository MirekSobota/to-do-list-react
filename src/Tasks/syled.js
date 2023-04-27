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

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Button = styled.button`
    border: none;
    width: 30px;
    height: 30px;
    transition: 0.6s;
`;