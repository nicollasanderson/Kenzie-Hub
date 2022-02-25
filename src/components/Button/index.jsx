import { ButtonContainer } from "./style";

function Button({ name, tamanho = "100%", color, ...rest }) {
  return (
    <ButtonContainer width={tamanho} color={color}>
      <button {...rest}>{name}</button>
    </ButtonContainer>
  );
}

export default Button;
