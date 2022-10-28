import axios from "axios";



export const getNovedades = async () => {
  await axios.get("https://genero360api.herokuapp.com/api/novedades");
};
