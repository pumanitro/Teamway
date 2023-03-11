import { useCallback } from "react";
import { AxiosError } from "axios";
import { useSnackbar } from "notistack";

export function useReportSuccess(): (message: string) => void {
  const { enqueueSnackbar } = useSnackbar();
  return useCallback(
    (message: string) =>
      enqueueSnackbar(message, {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      }),
    [enqueueSnackbar]
  );
}

export function useReportError(): (error: unknown) => void {
  const { enqueueSnackbar } = useSnackbar();

  return useCallback(
    (error: unknown) => {
      enqueueSnackbar(getErrorMessage(error), {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    },
    [enqueueSnackbar]
  );
}

export function getErrorMessage(error: unknown) {
  if (error instanceof AxiosError && error?.response?.data) {
    return error?.response?.data;
  }
  if (error instanceof Error) return error.message;
  return String(error);
}
