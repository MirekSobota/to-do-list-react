import { Content, SectionContainer, SubHeader } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <Content>
    <SectionContainer>
      <SubHeader>{title}</SubHeader>
      {extraHeaderContent}
    </SectionContainer>
    {body}
  </Content>
);

export { Section };
