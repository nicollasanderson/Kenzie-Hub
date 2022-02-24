import { Container, SelectStyled } from "../Select/style";

function Select({ label, name, register }) {
  const arrModulos = [
    "Módulo 1",
    "Módulo 2",
    "Módulo 3",
    "Módulo 4",
    "Módulo 5",
    "Módulo 6",
  ];
  return (
    <Container>
      <p>{label}</p>
      <SelectStyled placeholder={name}>
        <select id="modulos" {...register(name)}>
          {arrModulos.map((element) => (
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
