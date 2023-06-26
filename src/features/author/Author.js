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
              Hi there! I'm Mirek, <strong>a passionate Frontend Developer</strong> 👨🏻‍💻.<br/><br/>
              Welcome to my website! As a Frontend Developer, I have a passion
              for creating beautiful and  functional websites. I started my
              journey into programming some time ago, and ever since, <strong>I've been
              exploring the fascinating world of interactive web development.</strong> My
              experience and skills are continuously growing, and each project
              presents me with a new challenge that I tackle with enthusiasm and
              creativity. <br/>Apart from programming, <strong>I am also a vegetarian.</strong>🥗 I
              value healthy living and environmental protection. By choosing
              vegetarian food options, <strong>I strive to contribute to reducing our
              negative impact on the planet</strong> and promote conscious dietary
              choices. Thank you for visiting my site!🤩
            </Content>
          </>
        }
      />
    </Container>
  );
}

export { Author };
