import axios, { AxiosError, AxiosHeaders, AxiosRequestConfig } from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000",
});

export async function getClimate(lat: number, lon: number): Promise<any> {
  const headers: AxiosHeaders = new AxiosHeaders();
  headers.setContentType("application/json");

  const config: AxiosRequestConfig = {
    headers: headers,
  };

  return api
    .get(`/climate-info?lat=${lat}&lon=${lon}`, config)
    .then((response) => response.data)
    .catch((err: AxiosError) => {
      console.log(err);
    });
}

export async function getPrediction(lat: number, lon: number): Promise<any> {
  const headers: AxiosHeaders = new AxiosHeaders();
  headers.setContentType("application/json");

  const config: AxiosRequestConfig = {
    headers: headers,
  };

  return api
    .get(`/prediction?lat=${lat}&lon=${lon}`, config)
    .then((response) => response.data)
    .catch((err: AxiosError) => {
      console.log(err);
    });
}
