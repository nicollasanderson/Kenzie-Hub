import { InputContainer, Container } from "./style";

function InputStyled({
  name,
  register,
  label,
  icon,
  color,
  setShowPassword,
  showPassword,
  ...rest
}) {
  return (
    <Container>
      <p>{label}</p>
      <InputContainer color={color}>
        <input {...register(`${name}`)} {...rest} />
        {!!icon && (
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {icon}
          </button>
        )}
      </InputContainer>
    </Container>
  );
}

export default InputStyled;
