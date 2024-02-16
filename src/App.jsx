//aqui trabajaremos la vits de tareas de cada una que existen el el json

import Task from "./components/Task";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div className="row">
      <div className="col-sm-6">
        <Task />
      </div>
      <div className="col-sm-6">
        <TaskList />
      </div>
    </div>
  );
};

export default App;
