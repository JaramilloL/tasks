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
    <div>
      {data.map((task) => (
        <div key={task.id}>
          <p>{task.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
