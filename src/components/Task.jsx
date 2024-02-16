//este componente sera el que creara cada una de las tareas

//importamos las alertas de los errores y exito del formulario
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//importamos la libreria de react-hook-form para el control del formulario
import { useForm } from "react-hook-form";

const Task = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  //creamos una funcion la cual extrae los datos del envio del form
  const onSubmit = handleSubmit((data) => {
    try {
      console.log(data);
      reset();
      toast.success("Created");
    } catch (error) {
      toast.error(error.message);
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingText"
          placeholder="Add Name"
          name="nameTask"
          {...register("nameTask", {
            required: {
              value: true,
              message: "Please enter a name",
            },
          })}
        />
        <label htmlFor="floatingInput">Name of task</label>
      </div>
      <p className="text-danger">{errors?.nameTask?.message}</p>

      <div className="form-floating">
        <textarea
          className="form-control"
          id="floatingDescription"
          placeholder="Description"
          name="description"
          {...register("description", {
            required: {
              value: true,
              message: "Please enter a description",
            },
          })}
        />
        <label htmlFor="floatingDescription">Description</label>
      </div>
      <p className="text-danger">{errors?.description?.message}</p>

      <div className="form-floating">
        <select
          className="form-select"
          aria-label="Default select example"
          name="type"
          {...register("type", {
            required: {
              value: true,
              message: "Please enter a type",
            },
          })}
        >
          <option value={''}>Type</option>
          <option value="Homework">Homework</option>
          <option value="School">School</option>
          <option value="Work">Work</option>
        </select>
      </div>
      <p className="text-danger">{errors?.type?.message}</p>

      <div className="form-floating">
        <select
          className="form-select"
          aria-label="Default select example"
          name="priority"
          {...register("priority", {
            required: {
              value: true,
              message: "Please enter a priority",
            },
          })}
        >
          <option value={''}>Priority</option>
          <option value="Hard">Hard</option>
          <option value="Medium">Medium</option>
          <option value="Easi">Easi</option>
        </select>
      </div>
      <p className="text-danger">{errors?.priority?.message}</p>

      <div className="form-floating">
        <input
          type="datetime-local"
          className="form-control"
          name="date"
          {...register("date", {
            required: {
              value: true,
              message: "Please enter a date",
            },
          })}
        />
      </div>
      <p className="text-danger">{errors?.date?.message}</p>

      <div className="d-flex justify-content-center align-content-center align-items-center">
        <input type="submit" className="btn btn-primary" />
      </div>
      <ToastContainer autoClose={2000} />
    </form>
  );
};

export default Task;
