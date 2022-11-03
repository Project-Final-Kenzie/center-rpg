import axios from "axios";
import { BaseUrl } from "../constants/endpoints";

export const Api = axios.create({
  baseURL: BaseUrl,
  timeout: 5000,
});
