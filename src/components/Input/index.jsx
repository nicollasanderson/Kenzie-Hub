import { InputContainer, Container } from "./style";

function InputStyled({ label, icon, setShowPassword, showPassword, ...rest }) {
  console.log(rest);
  return (
    <Container>
      <p>{label}</p>
      <InputContainer>
        <input {...rest} />
        {!!icon && (
          <button onClick={() => setShowPassword(!showPassword)}>{icon}</button>
        )}
      </InputContainer>
    </Container>
  );
}

export default InputStyled;
