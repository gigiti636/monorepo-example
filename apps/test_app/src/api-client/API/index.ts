import axios, { AxiosRequestConfig, AxiosError } from "axios";

export interface ApiResponse<T> {
  data: T | null;
  status: number | undefined;
  error: string | null;
}

class ApiClient {
  private client = axios;

  private async request<T>(
    config: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response = await this.client.request<T>(config);

      return { data: response.data, error: null, status: response.status };
    } catch (error) {
      let err;
      if (error instanceof AxiosError) {
        err = error?.response?.data?.message || error.message;
      } else {
        err = "Something went wrong";
      }
      // @ts-ignore
      return { data: null, error: err, status: error?.response?.status };
    }
  }

  async get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>({ ...config, method: "GET", url });
  }

  async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>({ ...config, method: "POST", url, data });
  }

  async put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>({ ...config, method: "PUT", url, data });
  }

  async delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>({ ...config, method: "DELETE", url });
  }
}

const API = new ApiClient();

export default API;
