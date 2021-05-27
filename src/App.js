import React, { useState } from 'react';
import TareasLista from './TareasLista'

function App() {
  const [tareas, setTareas] = useState([])

  return (
    <>
    <TareasLista />
    <input type="text" />
    <button>Añadir Tarea</button>
    <button>Limpiar Tareas Completadas</button>
    <div>0 tareas por terminar</div>
    </>
  )
}

export default App;
