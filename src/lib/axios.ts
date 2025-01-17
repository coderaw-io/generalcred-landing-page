import axios from "axios";

export const dataClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DATA_API,
});