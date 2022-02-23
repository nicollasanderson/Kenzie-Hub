import { GreyBox, BoxContainer } from "../../components/GreyBox/style";
import InputStyled from "../../components/Input";
import Button from "../../components/Button";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { useState } from "react";

function Login({ handleNavigation }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <BoxContainer>
      <h2>Kenzie Hub</h2>

      <GreyBox>
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
      </GreyBox>
    </BoxContainer>
  );
}

export default Login;
