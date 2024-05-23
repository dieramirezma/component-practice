export const Child = ({ name, setName, addMessage}) => {
  
  const names = ['Diego', 'Juan', 'Pedro', 'Maria']

  const sendMessage = () => {
    addMessage('Hola desde el hijo')
    setName('Juan')
  }

  const changeName = () => { 
    const random = Math.floor(Math.random() * 4)
    setName(names[random])
  }
  
  return (
    <div>
      {name}
      <div>
        <button onClick={sendMessage}>Enviar Mensaje</button>
        <button onClick={changeName}>Cambiar Nombre</button>
      </div>
    </div>
  );
};
