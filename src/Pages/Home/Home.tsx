import logoImage from "../../assets/logo.svg";
import "./home.css";
import NavLink from "../../components/common/NavLink/NavLink";

const Home = () => {
  return (
    <section className="home">
      <header>
        <img className="home__header__image" src={logoImage} alt="Logo do banco Cora" title="Cora"></img>
        <h1 className="home__header__title--primary" > Hey There 👋 </h1>
        <h2 className="home__header__title--secondary" >Tenha um ótimo teste!!!</h2>
      </header>
      <article className="home__article">
        <p className="home__paragraph">
          <span className="home__paragraph--bold" >Vamos começar?</span> Como você faria os botões abaixo
          abrirem as suas respectivas páginas? Comece pela
          <span className="home__paragraph--bold"> TODO LIST</span>, pois nela contem os próximos passos
        </p>
      </article>
      <article className="home__article--disclaimer">
        <p className="home__paragraph">
          ⚠ Você pode encontrar alguns <span>erros</span> no meio do
          caminho, não desanime e fique atento para conseguir
          <span className="home__paragraph--bold"> visualizar</span> e <span className="home__paragraph--bold">renderizar</span> as páginas.</p>
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
