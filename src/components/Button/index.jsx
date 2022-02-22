import { ButtonContainer } from "./style";

function Button({ name, color, ...rest }) {
  return (
    <ButtonContainer color={color}>
      <button {...rest}>{name}</button>
    </ButtonContainer>
  );
}

export default Button;
