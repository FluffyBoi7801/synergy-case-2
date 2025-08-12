import axios from "axios";
import { env } from "@/shared/utils";

export const apiClient = axios.create({
  baseURL: env.API_URL,
  withCredentials: true,
  timeout: 30000,
});
