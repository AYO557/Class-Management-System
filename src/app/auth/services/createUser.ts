import axios, { AxiosError, type AxiosResponse } from "axios";
import type { CreateUserPayload, User } from "../libs/types";
import type { ErrorResponse, SuccessResponse } from "@/types/response";
import { baseUrl } from "@/constants/api-data";
import { baseEndpoint } from "../api-data";

export default async function createUser(
  data: CreateUserPayload
): Promise<SuccessResponse<User>> {
  try {
    const response: AxiosResponse<SuccessResponse<User>> = await axios.post(
      `${baseUrl}${baseEndpoint}`,
      data
    );

    return response.data;
  } catch (error: AxiosError<ErrorResponse> | unknown) {
    throw new Error((error as AxiosError<ErrorResponse>).response?.data.error);
  }
}
