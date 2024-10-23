import logoImage from "../../assets/logo.svg";
import "./home.css";
import NavLink from "../../components/common/NavLink/NavLink";
import { LogoCora } from "../../style/common/LogoCora/coraLogo.style";
import { TitlePrimary, TitleSecondary } from "../../style/common/Titles/titles.style";
import { Paragraph, Span } from "../../style/common/Paragraphs/paragraphs.style";

const Home = () => {
  return (
    <section className="home">
      <header>
        <LogoCora src={logoImage} alt="Logo do banco Cora" title="Cora" />
        <TitlePrimary>Hey There 👋</TitlePrimary>
        <TitleSecondary $color="--color-main">Tenha um ótimo teste!!!</TitleSecondary>
      </header>
      <article className="home__article">
        <Paragraph $color="--color-gray" $fontSize="1.8em">
          <Span $bold>Vamos começar?</Span> Como você faria os botões abaixo
          abrirem as suas respectivas páginas? Comece pela
          <Span $bold> TODO LIST</Span>, pois nela contem os próximos passos
        </Paragraph>
      </article>
      <article className="home__article--disclaimer">
        <Paragraph $color="--color-gray">
          ⚠ Você pode encontrar alguns <Span $bold>erros</Span> no meio do
          caminho, não desanime e fique atento para conseguir
          <Span $bold> visualizar</Span> e <Span $bold>renderizar</Span> as páginas.
        </Paragraph>
      </article>
      <nav className="home__nav">
        <ul className="home__nav__list">
          <li>
            <NavLink url="/todo-list">
              TO-DO LIST
            </NavLink>
          </li>
          <li>
            <NavLink url="/ibanking">
              IBANKING
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Home;
