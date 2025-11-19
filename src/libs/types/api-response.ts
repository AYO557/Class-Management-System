export interface ErrorResponse {
  success: boolean;
  message: string;
  error: string;
}

export interface SuccessResponse<T> {
  success: boolean;
  message: string;
  data: T;
  error: string | null;
}
