import axios from "axios";

const AxiosWithAuth = () => {
  const token = JSON.parse(localStorage.getItem("token"));

  return axios.create({
    headers: {
      Authorization: token
    }
  });
};

export default AxiosWithAuth;
