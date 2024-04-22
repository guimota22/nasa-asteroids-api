import ThemeButton from "../../components/ThemeButton";
import { AboutContainer, About, AboutText } from "./styles";

const AboutMe = () => {
  return (
    <AboutContainer>
      <ThemeButton />
      <h1>Sobre mim</h1>
      <About>
        <AboutText>
          <p>
            Me chamo Guilherme, tenho 17 anos. Sou apaixonado por tecnologia e
            programação, e estou constantemente buscando maneiras de expandir
            meu conhecimento e aprimorar minhas habilidades nessa área
            fascinante.🚀<br /><br />
            Comecei na área de programação aos 15 anos, e com o passar do tempo adquiri experiência em Backend e Frontend em
            diversos cursos. Meu objetivo é usar essa experiência para conseguir
            um emprego na área.💻<br /><br />
            O que eu mais gosto de fazer nas horas livres é jogar futebol.⚽
          </p>
        </AboutText>
        <img src="src/assets/profile.jpg" alt="Minha foto de perfil" />
      </About>
    </AboutContainer>
  );
};

export default AboutMe;
