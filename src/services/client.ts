import axios from "axios";

import { API } from "../utils/constants";

const client = axios.create({
  baseURL: API,
  timeout: 1000,
});

export { client };
