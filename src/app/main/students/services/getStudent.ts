import axios, { AxiosError, type AxiosResponse } from "axios";
import type { ErrorResponse, SuccessResponse } from "@/types/response";
import { baseUrl } from "@/constants/api-data";
import { studentsEndpoint } from "../api-data";
import type { Student } from "../libs/types";

export default async function getStudent(
  id: string
): Promise<SuccessResponse<Student>> {
  try {
    const response: AxiosResponse<SuccessResponse<Student>> = await axios.get(
      `${baseUrl}${studentsEndpoint}/${id}`
    );
    return response.data;
  } catch (error: AxiosError<ErrorResponse> | unknown) {
    throw new Error((error as AxiosError<ErrorResponse>).response?.data.error);
  }
}
