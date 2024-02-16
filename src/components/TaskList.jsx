//este componente tendra la lista de todas las tareas que existen en le json
import { useQuery } from "@tanstack/react-query";
import { getTask } from "../api/rest";

const TaskList = () => {
  //llamos la data que trae la peticion

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["task"],
    queryFn: getTask,
  });
  if (isLoading)
    return (
      <div className="spinner- text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  if (isError) return <h1>{error}</h1>;

  return (
    <div className="mt-3">
      {data.map((task) => (
        <div key={task.id} className="row">
          <div className="card col-sm-8 m-auto">
            <div className="card-body">
              <h5 className="card-title text-center">Name: {task.name}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                <p>Type: {task.type}</p>
              </h6>
              <p className="card-text">Description: {task.description}</p>
              <a href="#" className="card-link">
                Priority: {task.priority}
              </a>
              <a href="#" className="card-link">
                Created: {task.created}
              </a>
            </div>
            <div className="d-flex justify-content-evenly align-content-center align-items-center">
              <button className="btn btn-danger w-25">Delete</button>
              <button className="btn btn-info w-25">Edit</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
