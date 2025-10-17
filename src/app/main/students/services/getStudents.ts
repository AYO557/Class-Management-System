import axios, { AxiosError, type AxiosResponse } from "axios";
import type { ErrorResponse, SuccessResponse } from "@/types/response";
import { baseUrl } from "@/constants/api-data";
import { studentsEndpoint } from "../api-data";
import type { StudentsResponse } from "../libs/types";

export default async function getStudents(): Promise<
  SuccessResponse<StudentsResponse>
> {
  try {
    const response: AxiosResponse<SuccessResponse<StudentsResponse>> =
      await axios.get(`${baseUrl}${studentsEndpoint}`);
    return response.data;
  } catch (error: AxiosError<ErrorResponse> | unknown) {
    throw new Error((error as AxiosError<ErrorResponse>).response?.data.error);
  }
}
