
import axios, { type Method } from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

interface ApiParams {
  route: string;
  method: Method;
  body?: unknown;
  queries?: Record<string, string | number | boolean>;
}

export async function api<T>({ route, method, body, queries }: ApiParams): Promise<T> {
  const { data } = await apiClient({
    url: route,
    method,
    data: body,
    params: queries,
  });

  return data as T;
}
