import axios from "axios";
import { env } from "@/shared/utils";

export const apiClient = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true,
  timeout: 30000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});
