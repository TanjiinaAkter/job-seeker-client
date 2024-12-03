import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://job-seeker-server-gamma.vercel.app",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut, user } = useAuth();

  // Request interceptor
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access-token");
      // console.log("request begin:", {
      //   url: config.url,
      //   token,
      //   user,
      // });
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      } else {
        throw new Error("no auth token");
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // Response interceptor
  axiosSecure.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (user) {
        const status = error.response?.status;
        if (status === 401 || status === 403) {
          // console.log("Logging out due to failed auth from api call::", {
          //   status,
          //   user,
          //   url: error.config.url,
          // });
          await logOut();
          navigate("/login");
        }
      }

      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
