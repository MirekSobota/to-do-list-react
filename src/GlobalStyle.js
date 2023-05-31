import { createGlobalStyle } from "styled-components";

export const GLobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    ::after,
    ::before {
        box-sizing: inherit;
    }

    body {  
        background: ${({ theme }) => theme.color.grey};
    } 
`;
