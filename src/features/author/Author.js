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
              Hi there! I'm Mirek, <strong>a passionate Frontend Developer</strong> 👨🏻‍💻.<br/>
              Welcome to my website! As a Frontend Developer, I have a passion
              for creating beautiful and functional websites. I started my
              journey into programming some time ago, and ever since, I've been
              exploring the fascinating world of interactive web development. My
              experience and skills are continuously growing, and each project
              presents me with a new challenge that I tackle with enthusiasm and
              creativity. <br/>Apart from programming, I am also a vegetarian. I
              value healthy living and environmental protection. By choosing
              vegetarian food options, I strive to contribute to reducing our
              negative impact on the planet and promote conscious dietary
              choices. Thank you for visiting my site!
            </Content>
          </>
        }
      />
    </Container>
  );
}

export { Author };
