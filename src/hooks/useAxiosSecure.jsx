import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000/",
});
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      
      config.headers.authorization = `Barear ${token}`;
      //console.log(config.headers.authorization)
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      console.log(status);

      if (status === 401 || status === 403) {
        navigate("/login");
        await logOut();
      }
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
