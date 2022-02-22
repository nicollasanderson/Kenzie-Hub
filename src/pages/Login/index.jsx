import { BoxContainer, LoginContainer } from "./style";
import InputStyled from "../../components/Input";
import Button from "../../components/Button";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();

  function handleNavigation(path) {
    return history.push(path);
  }

  return (
    <LoginContainer>
      <h2>Kenzie Hub</h2>
      <div>
        <BoxContainer>
          <h3>Login</h3>
          <InputStyled placeholder="Email" label="Email" />

          <InputStyled
            placeholder="Senha"
            type={showPassword ? "text" : "password"}
            label="Senhas"
            icon={!showPassword ? <FiEye /> : <FiEyeOff />}
            setShowPassword={setShowPassword}
            showPassword={showPassword}
          />
          <Button name="Entrar" color="var(--primary)" />
          <p>Ainda não possui uma conta?</p>
          <Button
            name="Cadastre-se"
            onClick={() => handleNavigation("/singup")}
            color="var(--grey1)"
          />
        </BoxContainer>
      </div>
    </LoginContainer>
  );
}

export default Login;
