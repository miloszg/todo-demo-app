import axios from "axios";

export default axios.create({
  baseURL: `https://todo-app-9d004-default-rtdb.europe-west1.firebasedatabase.app/`,
});
