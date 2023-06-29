import styled from "styled-components";

export const Content = styled.section`
  margin-top: 10px;
`;

export const SectionContainer = styled.div`
  background: ${({ theme }) => theme.color.white};
  display: grid;
  grid-template-columns: auto auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    background: ${({ theme }) => theme.color.white};
    grid-template-columns: 1fr;
  }
`;

export const SubHeader = styled.div`
  background: ${({ theme }) => theme.color.white};
  font-weight: 700;
  font-size: large;
  padding: 15px;
`;
export const SubContent = styled.div`
  margin-top: 3px;
  background: ${({ theme }) => theme.color.white};
  padding: 15px;
`;
