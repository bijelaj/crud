import React, {useState} from "react";
import { isEmpty } from "lodash";

function App() {
  const [task, setTask] = useState("");

  const addTask = (e) =>{
    //evito que cargue la página al darle submit
    e.preventDefault();
    //uso la libreria lodash para validaciones
    if (isEmpty(task)) {
      console.log("Task empty");
      return;
    }

    console.log("OK");
    setTask("");
  }

  return (
    <div className="container mt-5">
      <h1> Tareas</h1>
      <hr />
      <div className="row">
        {/* columnas en boostrap deben sumar 12, 8+4=12*/}
        <div className="col-8">
          {/* classname para alinear al centro */}
          <h4 className="text-center">Lista de Tareas</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <spam className="lead"> Nombre de la tarea</spam>
              <button className="btn btn-danger btn-sm float-right mx-2">
                Eliminar
              </button>
              <button className="btn btn-warning btn-sm float-right">
                Editar
              </button>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">Formulario</h4>
          <form onSubmit={addTask}>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Ingrese la tarea...."
              onChange={(text) => setTask(text.target.value)}
              value={task}
            />
            {/* btn-block hace que el boton sea del tamaño del campo */}
            <button className="btn btn-dark btn-block" type="submit">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
