import { useReportError } from "../utils/apiHooksUtils";
import { useQuery } from "@tanstack/react-query";
import axios from "../utils/axios";
import { QuestionType } from "../../sharedTypes/Question";

const QUESTION_QUERY_KEY = "question";
const SINGLE_QUESTION_QUERY_KEY = (id: string) => [QUESTION_QUERY_KEY, id];

export const useQuestion = (id: string) => {
  const onError = useReportError();
  return useQuery<QuestionType>(
    SINGLE_QUESTION_QUERY_KEY(id),
    () => axios.get(`/api/question/${id}`).then((res) => res.data),
    {
      onError,
    }
  );
};
