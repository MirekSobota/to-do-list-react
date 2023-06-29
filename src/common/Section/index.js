import { Content, SectionContainer, SubHeader, SubContent } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <Content>
    <SectionContainer>
      <SubHeader>{title}</SubHeader>
      {extraHeaderContent}
    </SectionContainer>
   
    <SubContent>
      {body}
    </SubContent>
    
    
  </Content>
);

export { Section };
