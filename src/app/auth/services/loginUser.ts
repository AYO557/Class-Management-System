import axios, { AxiosError, type AxiosResponse } from "axios";
import type { LoginForm, User } from "../libs/types";
import type { ErrorResponse, SuccessResponse } from "@/types/response";
import { baseUrl } from "@/constants/api-data";
import { baseEndpoint } from "../api-data";

export default async function loginUser(
  data: LoginForm
): Promise<SuccessResponse<User>> {
  try {
    const response: AxiosResponse<SuccessResponse<User>> = await axios.post(
      `${baseUrl}${baseEndpoint}/login`,
      data
    );

    return response.data;
  } catch (error: AxiosError<ErrorResponse> | unknown) {
    throw new Error((error as AxiosError<ErrorResponse>).response?.data.error);
  }
}
