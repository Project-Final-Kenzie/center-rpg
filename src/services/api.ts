import axios from "axios";
import { BaseUrl } from "../constants/endpoints";

export const api = axios.create({
  baseURL: BaseUrl,
  timeout: 5000,
});
