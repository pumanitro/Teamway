import React from "react";
import { useParams } from "react-router-dom";
import { useQuestion } from "../api-hooks/questionHooks";

export const QuestionPage = () => {
  const { id } = useParams();
  const { data: question } = useQuestion(id || "0");

  console.log(question);

  return <div>Question</div>;
};
