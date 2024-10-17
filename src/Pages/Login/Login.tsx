import { useState, ChangeEvent } from "react";
import logoFullImage from "../../assets/logo-full.svg";
import arrowRightImage from "../../assets/arrow-right.svg";
import "./login.css";

const Login = () => {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeCPF = (e: ChangeEvent<unknown>) => {
    setCpf(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<unknown>) => {
    setPassword(e.target.value);
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
      <form>
        <input
          id="cpf"
          className="login__input"
          placeholder="Insira seu CPF"
          onChange={handleChangeCPF}
        />
        <input
          id="password"
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
