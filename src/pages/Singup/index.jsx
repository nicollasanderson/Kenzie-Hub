import { BoxContainer } from "../../components/GreyBox/style";
import Button from "../../components/Button";
import InputStyled from "../../components/Input";
import { GreyBoxSing, Span } from "./style";
import Select from "../../components/Select";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

function Singup({ handleNavigation }) {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .min(8, "Minimo de caracteres")
      .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, "Nome inválido"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
    confirm_password: yup
      .string()
      .required("Obrigatório confirmar a senha")
      .oneOf([yup.ref("password")], "Senhas diferentes"),
    course_module: yup.string(),
  });

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(data) {
    delete data.confirm_password;
    const obj = { ...data, bio: "lorem ipsum", contact: "contato" };
    console.log(obj);
    api
      .post("/users", obj)
      .then((reponse) => {
        history.push("/");
        return toast.success("Conta criada com sucesso!");
      })
      .catch((err) => toast.error("Algo de errado não está certo"));
  }

  return (
    <BoxContainer>
      <Span>
        <h2>Kenzie Hub</h2>
        <div>
          <Button
            onClick={() => handleNavigation("/")}
            color="var(--grey3)"
            name="Voltar"
          />
        </div>
      </Span>

      <GreyBoxSing>
        <h3>Cria sua conta</h3>
        <p>Rapido e grátis, vamos nessa!</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputStyled
            placeholder="Digite aqui seu nome"
            label="Nome"
            name="name"
            register={register}
            color={errors.name ? "var(--negative)" : "white"}
          />
          {errors.name ? <strong>{errors.name.message}</strong> : ""}
          <InputStyled
            placeholder="Digite aqui seu email"
            label="Email"
            name="email"
            register={register}
            color={errors.email ? "var(--negative)" : "white"}
          />
          {errors.email ? <strong>{errors.email.message}</strong> : ""}
          <InputStyled
            placeholder="Digite aqui sua senha"
            label="Senha"
            name="password"
            register={register}
            color={errors.password ? "var(--negative)" : "white"}
          />
          {errors.password ? <strong>{errors.password.message}</strong> : ""}
          <InputStyled
            placeholder="Repita a senha"
            label="Confirmar senha"
            name="confirm_password"
            register={register}
            color={errors.confirm_password ? "var(--negative)" : "white"}
          />
          {errors.confirm_password ? (
            <strong>{errors.confirm_password.message}</strong>
          ) : (
            ""
          )}
          <Select
            name="course_module"
            label="Selecionar Módulo"
            register={register}
          />
          <Button
            color="var(--primary-negative)"
            name="Cadastrar"
            type="submit"
          />
        </form>
      </GreyBoxSing>
    </BoxContainer>
  );
}

export default Singup;
