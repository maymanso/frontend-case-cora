import logoImage from "../../assets/logo.svg";
// import Todo from "./Todo";
// import { IBanking } from "./IBanking";

import "../../App.css";
import { Link } from "react-router-dom";

function Home() {
  /**
   * TODO: 
   * fix tags names
   * create style with styled-components
   */
  return (
    <main id="page">
      <div>
        <img src={logoImage} alt="Cora" title="Cora"></img>
        <h1>Hey There &#128075;</h1>
        <h2>Tenha um ótimo teste!!!</h2>
        <p>
          <strong>Vamos começar?</strong> Como você faria os botões abaixo
          abrirem as suas respectivas páginas? (Comece pela{" "}
          <strong>TODO LIST</strong>, pois nela contem os próximos passos)
        </p>
        <p className="disclaimer">
          &#9888; Você pode encontrar alguns <strong>erros</strong> no meio do
          caminho, não desanime e fique atento para conseguir{" "}
          <strong>visualizar</strong> e <strong>renderizar</strong> as páginas.
        </p>
        <ul className="buttons">
          <Link to="/todo" >
            TO-DO LIST
          </Link>
          <Link to="/iBank" >
            IBANKING
          </Link>
        </ul>
      </div>
    </main>
  );
}

export default Home;
