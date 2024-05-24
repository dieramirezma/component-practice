export const MyComponent = () => {
  const name = 'Inés'
  const repository = 'https://github.com/inesmariao/component-practice'

  const student = {
    name: 'Diego',
    lastName: 'Ramirez',
    mobile: '3020000000',
    linkedin: 'www.linkedin.com/in/diego-nicolas-ramirez-maldonado-886a89244'
  }

  return (
    <div>
      <h2>Contenido de la práctica</h2>
      <ul>
        <li>Componentes</li>
        <li>Eventos</li>
        <li>Estados - Hooks</li>
        <li>Comunicacion</li>
      </ul>
      <hr />
      <h2>Datos del docente:</h2>
      <p>Nombre: {name}</p>
      <p>Repositorio: {repository}</p>
      <hr />
      <h2>Datos del estudiante:</h2>
      <p>Nombre: {student.name}</p>
      <p>Apellido: {student.lastName}</p>
      <p>Celular: {student.mobile}</p>
      <p>LinkedIn: {student.linkedin}</p>
      <hr />
    </div>
  )
}
