import { useState, ChangeEvent, useEffect } from "react";
import logoFullImage from "../../assets/logo-full.svg";
import arrowRightImage from "../../assets/arrow-right.svg";
import "./login.css";
import useAuthStore from "../../store/auth/auth.store";
import { AuthStoreType } from "../../types/auth/auth.type";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const toast = useToast();

  const { loginService, isAuthenticated, errorMessage } = useAuthStore() as AuthStoreType;

  const handleChangeLogin = (event: ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value)
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmitAuth = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!login || !password) {
      return toast({
        title: "Digite um login e senha válidos",
        duration: 3000,
        status: 'error',
        position: 'top-right',
        isClosable: true,
      })
    }
    await loginService({ login, password })
  };


  useEffect(() => {
    if (isAuthenticated) return navigate("/ibanking")
  }, [isAuthenticated]);

  useEffect(() => {
    if (errorMessage) {
      toast({
        title: errorMessage,
        duration: 3000,
        status: 'error',
        position: 'top-right',
        isClosable: true,
      })
    }
  }, [errorMessage])

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
        <button className="login__button" type="submit">
          Continuar
          <img src={arrowRightImage} />
        </button>
      </form>
    </section>
  );
}

export default Login;
