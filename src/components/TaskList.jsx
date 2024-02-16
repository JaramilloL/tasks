//este componente tendra la lista de todas las tareas que existen en le json
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteTask, getTask } from "../api/rest";

const TaskList = () => {
  //creamos la llave de la mutacion
  const queryClient = useQueryClient();

  //llamos la data que trae la peticion

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["task"],
    queryFn: getTask,
  });

  //vamos a trabajar con las mutaciones para la eliminacion y el edit de cada una de las tasks creadas
  const deleteT = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["task"] }),
  });

  //creamos la mutacion de el edit
  // const editT = useMutation({
  //   mutationFn: putTask,
  //   onSuccess: ()=> queryClient.invalidateQueries({ queryKey: ["task"] }),
  // })

  if (isLoading)
    return (
      <div className="spinner- text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  if (isError) return <h1>{error}</h1>;

  return (
    <div className="mt-3">
      {data? data.map((task) => (
        <div key={task.id} className="row mt-3">
          <div className="card col-sm-8 m-auto">
            <div className="card-body">
              <h5 className="card-title text-center">Name: {task.nameTask}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                <p><strong>Type:</strong> {task.type}</p>
              </h6>
              <p className="card-text"><strong>Description:</strong> {task.description}</p>
              <p href="#" className="card-link">
                <strong>Priority:</strong> <li className="text-primary">{task.priority}</li>
              </p>
              <p href="#" className="card-link">
                <strong>Created:</strong> {task.created}
              </p>
            </div>
            <div className="d-flex justify-content-evenly align-content-center align-items-center">
              <button
                className="btn btn-danger w-25"
                onClick={() => deleteT.mutate(task.id)}
              >
                Completed
              </button>
            </div>
          </div>
        </div>
      )):
      (
        <h1>No tasks available</h1>
      )}
    </div>
  );
};

export default TaskList;
