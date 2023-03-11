import { useReportError } from "../utils/apiHooksUtils";
import { useQuery } from "@tanstack/react-query";
import axios from "../utils/axios";

const QUESTION_QUERY_KEY = "question";

export const useQuestion = (id: string) => {
  const onError = useReportError();
  return useQuery([QUESTION_QUERY_KEY], () => axios.get(`/api/question/${id}`).then((res) => res.data), {
    onError,
  });
};
