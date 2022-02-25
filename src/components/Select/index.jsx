import { Container, SelectStyled } from "../Select/style";

function Select({ label, name, register, arr }) {
  return (
    <Container>
      <p>{label}</p>
      <SelectStyled placeholder={name}>
        <select id="select" {...register(name)}>
          {arr.map((element) => (
            <option key={element} value={element}>
              {element}
            </option>
          ))}
        </select>
      </SelectStyled>
    </Container>
  );
}

export default Select;
