import { toast } from "sonner";

export default function useToastMessage() {
  function toastSuccess(msg: string) {
    toast.dismiss();
    toast.success(msg);
  }

  function toastError(msg: string) {
    toast.dismiss();
    toast.error(msg);
  }
  return {
    toastSuccess,
    toastError,
  };
}
