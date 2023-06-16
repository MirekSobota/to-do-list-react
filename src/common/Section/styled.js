import styled from "styled-components";

export const Content = styled.section`
  display: grid;
  grid-gap: 5px;
  margin-top: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    text-align: center;
  }
`;

export const SectionContainer = styled.div`
  background: white;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    background: ${({ theme }) => theme.color.white};
    grid-template-columns: 1fr;
  }
`;

export const SubHeader = styled.div`
  padding: 15px;
  background: ${({ theme }) => theme.color.white};
  margin: 0;
  font-weight: 700;
  font-size: large;
`;
