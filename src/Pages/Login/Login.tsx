import { useState, ChangeEvent } from "react";
import logoFullImage from "../../assets/logo-full.svg";
import arrowRightImage from "../../assets/arrow-right.svg";
import "./login.css";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeLogin = (event: ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value)
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleAuth = () => {
    console.log({
      cpf,
      password,
    });
  };

  return (
    <section className="login">
      <img src={logoFullImage} alt="Cora" title="Cora" />
      <h2 className="login__title">Fazer LogIn</h2>
      <form onSubmit={handleSubmitAuth}>
        <input
          id="login"
          value={login}
          className="login__input"
          placeholder="Insira seu CPF"
          onChange={handleChangeLogin}
        />
        <input
          id="password"
          value={password}
          className="login__input"
          type="password"
          placeholder="Digite sua senha"
          onChange={handleChangePassword}
        />
      </form>

      <button className="login__button" onClick={handleAuth}>
        Continuar
        <img src={arrowRightImage} />
      </button>
    </section>
  );
}

export default Login;
