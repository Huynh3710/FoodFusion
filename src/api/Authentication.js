import { ApiUrl } from "../config/ApiUrl";
import axios from "../config/axios/axios";

const AuthenticationApi = {
  login: (loginData) => axios.post(ApiUrl.auth.login, loginData),
};

export default AuthenticationApi;
