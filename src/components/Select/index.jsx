import { Container, SelectStyled } from "../Select/style";

function Select({ label, name }) {
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
        <select name="modulos" id="modulos">
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
