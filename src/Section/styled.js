import styled from "styled-components";

export const Content = styled.section`
  display: grid;
  grid-gap: 5px;
  margin-top: 10px;
`;

export const SectionContainer = styled.div`
  background: white;
  display: grid;
  grid-template-columns: 2fr 1fr;

  @media (max-width: 767px) {
    background: white;
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const SubHeader = styled.div`
  padding: 15px;
  background-color: white;
  margin: 0;
  font-weight: 700;
  font-size: large;
`;