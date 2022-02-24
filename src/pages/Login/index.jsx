import { GreyBox, BoxContainer } from "../../components/GreyBox/style";
import InputStyled from "../../components/Input";
import Button from "../../components/Button";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import api from "../../services/api";
import { useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";

function Login({ handleNavigation, setSession, session }) {
  const schema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
  });
  const [showPassword, setShowPassword] = useState(false);
  const [response, setResponse] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
    api
      .post("/sessions", data)
      .then((response) => {
        setResponse(response);
        console.log(response);
        return toast.success("Bem-vindo! :D");
      })
      .catch((err) => toast.error("Email ou senha inválidos"));
  }

  const history = useHistory();

  useEffect(() => {
    if (response.status === 200) {
      window.localStorage.setItem("@kenziehub:token", response.data.token);
      setSession(true);
      history.push("/dashboard");
    }
  }, [response]);

  if (session) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <BoxContainer>
      <h2>Kenzie Hub</h2>

      <GreyBox>
        <h3>Login</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputStyled
            placeholder="Email"
            label="Email"
            name="email"
            register={register}
            color={errors.email ? "var(--negative)" : "white"}
          />
          {errors.email ? <strong>{errors.email.message}</strong> : ""}

          <InputStyled
            placeholder="Senha"
            type={showPassword ? "text" : "password"}
            label="Senhas"
            icon={!showPassword ? <FiEye /> : <FiEyeOff />}
            setShowPassword={setShowPassword}
            showPassword={showPassword}
            name="password"
            color={errors.password ? "var(--negative)" : "white"}
            register={register}
          />
          {errors.password ? <strong>{errors.password.message}</strong> : ""}
          <Button name="Entrar" type="submit" color="var(--primary)" />
        </form>

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
