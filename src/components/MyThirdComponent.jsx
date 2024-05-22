
export const MyThirdComponent = (props) => {
  console.log(props);

  const { name, lastName, medicalRecord } = props;
  const { height, weight, bloodType, allergies } = medicalRecord;

  return (
    <div>
      <h2>Comunicacion entre componentes</h2>
      <ul>
        <li>Nombre: { name }</li>
        <li>Apellido: { lastName }</li>
        <li>Estatura: { height }</li>
        <li>Peso: { weight }</li>
        <li>Tipo de Sangre: {bloodType}</li>
        <li>Alergias: {allergies.join(' - ')}</li>
      </ul>
    </div>
  )
};
