import { Container } from "../../common/Container/styled";
import { Header } from "../../common/Header";
import { Section } from "../../common/Section";
import { Content } from "./styled";

function Author() {
  return (
    <Container>
      <Header title="About author" />
      <Section
        title="Mirek Sobota 🙋🏻‍♂️"
        body={
          <>
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Content>
          </>
        }
      />
    </Container>
  );
}

export { Author };
