export const FourthComponent = () => {
  const handleClick = () => {
    alert('Haz hecho click en el evento onclick usando handleClick')
  }

  const handleDoubleClick = () => {
    alert('Haz hecho doble click en el evento onDoubleClick')
  }

  const handleMouseEnter = () => {
    console.log('Haz entrado al elemento')
  }

  const handleMouseLeave = () => {
    console.log('Haz salido del elemento')
  }

  const handleMouse = (e, action) => {
    console.log(`Has ${action} ${e.target.id} con el evento onMouseEnter y onMouseLeave`)
  }

  const handleMouseAlert = (e, action) => {
    alert(`Has ${action} ${e.target.id} con el evento onMouseEnter y onMouseLeave`)
  }

  const insideInput = () => {
    console.log('Estás dentro del input. Por favor escribe tu nombre')
  }

  const outsideInput = () => {
    console.log('Estás fuera del input. Adios!')
  }

  return (
    <div>
      <h2>Eventos en React</h2>
      {/* Evento Click */}
      <div>
        <button onClick={() => {
          console.log('Haz hecho click en el evento onclick')
        }}
        >
          Haz Click 1!
        </button>
      </div>

      <div>
        <button onClick={handleClick}>
          Haz Click 2!
        </button>
      </div>

      {/* Evento Doble Click */}
      <div>
        <button onDoubleClick={handleDoubleClick}>
          Haz Doble Click!
        </button>
      </div>

      {/* Evento Mouse Enter - Mouse Leave */}
      <div id='box'>
        <div
          id='box1'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <p>Pasa el mouse por encima!</p>
        </div>
        <div
          id='box2'
          onMouseEnter={e => handleMouse(e, 'entrado a')}
          onMouseLeave={e => handleMouse(e, 'salido de')}
        >
          <p>Pasa el mouse por encima!</p>
        </div>
        <div
          id='box3'
          onMouseEnter={e => handleMouseAlert(e, 'entrado a')}
          onMouseLeave={e => handleMouseAlert(e, 'salido a')}
        >
          <p>Pasa el mouse por encima!</p>
        </div>
      </div>

      {/* Evento Focus - Blur */}
      <div>
        <input
          type='text'
          onFocus={insideInput}
          onBlur={outsideInput}
          placeholder='Escribe tu nombre'
        />
      </div>
    </div>
  )
}
