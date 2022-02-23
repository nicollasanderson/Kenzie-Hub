import { BoxContainer } from "../../components/GreyBox/style";
import Button from "../../components/Button";
import InputStyled from "../../components/Input";
import { GreyBoxSing, Span } from "./style";
import Select from "../../components/Select";

function Singup({ handleNavigation }) {
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
        <InputStyled placeholder="Digite aqui seu nome" label="Nome" />
        <InputStyled placeholder="Digite aqui seu email" label="Email" />
        <InputStyled placeholder="Digite aqui sua senha" label="Senha" />
        <InputStyled placeholder="Repita a senha" label="Confirmar senha" />
        <Select label="Selecionar Módulo" />
        <Button color="var(--primary-negative)" name="Cadastrar" />
      </GreyBoxSing>
    </BoxContainer>
  );
}

export default Singup;
