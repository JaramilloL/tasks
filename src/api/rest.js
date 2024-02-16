//en este archivo js se crearan las peticiones de un CRUD basico
import axios from "axios";
//creamos la base url de nuestro backend

const baseUrl = axios.create({
  baseURL: "http://localhost:3000/tasks",
  timeout: 2000,
  timeoutErrorMessage: "Timeout error"
});

export const getTask = async () => {
  const result = await baseUrl.get("/");
  return result.data; //result.data trae solo la data del json
};
export const postTask = (task) => baseUrl.post("/", task);
export const deleteTask = (id) => baseUrl.get(`/${id}`);
export const putTask = (product) => baseUrl.get(`/${product.id}`, product);
