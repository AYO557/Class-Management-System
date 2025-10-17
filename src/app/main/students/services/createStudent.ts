import axios, { AxiosError, type AxiosResponse } from "axios";
import type { ErrorResponse, SuccessResponse } from "@/types/response";
import { baseUrl } from "@/constants/api-data";
import { studentsEndpoint } from "../api-data";
import type { BaseStudent, Student } from "../libs/types";

export default async function createStudent(
  data: BaseStudent
): Promise<SuccessResponse<BaseStudent>> {
  try {
    const response: AxiosResponse<SuccessResponse<Student>> = await axios.post(
      `${baseUrl}${studentsEndpoint}`,
      data
    );

    return response.data;
  } catch (error: AxiosError<ErrorResponse> | unknown) {
    throw new Error((error as AxiosError<ErrorResponse>).response?.data.error);
  }
}
