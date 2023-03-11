import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuestion } from "../api-hooks/questionHooks";
import { AppWrapper } from "../components/AppWrapper";
import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { ROUTING_KEYS } from "../utils/routingKeys";
import { useQuestionsContext } from "../contexts/QuestionsContext";

export const QuestionPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuestion(id || "0");
  const { setQuestions, questions } = useQuestionsContext();

  if (isLoading) {
    return (
      <AppWrapper>
        <CircularProgress />
      </AppWrapper>
    );
  }

  if (!data || !id) {
    return (
      <AppWrapper>
        <Alert severity="error">Question not found!</Alert>
      </AppWrapper>
    );
  }

  const onAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isAnswered = questions.find((q) => q.id === id);

    if (isAnswered) {
      const newQuestions = questions.filter((q) => q.id !== id);
      setQuestions([
        ...newQuestions,
        {
          id,
          question,
          answer: answers[Number(e.target.value)],
        },
      ]);
      return;
    } else {
      setQuestions([
        ...questions,
        {
          id,
          question,
          answer: answers[Number(e.target.value)],
        },
      ]);
    }
  };

  const { question, answers, questionsAmount } = data;

  const isTheLastQuestion = Number(id) === questionsAmount - 1;

  return (
    <AppWrapper>
      <Card sx={{ p: 2 }}>
        <CardContent>
          <Typography variant="h5">{question}</Typography>
          <FormControl>
            <RadioGroup
              aria-labelledby="questions-radio-group"
              name="radio-buttons-group"
              id={`question-id`}
              defaultValue={null}
              onChange={onAnswerChange}
            >
              {answers.map((answer, index) => (
                <FormControlLabel key={index} value={index} control={<Radio />} label={answer.answerText} />
              ))}
            </RadioGroup>
          </FormControl>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          {isTheLastQuestion ? (
            <Link to={ROUTING_KEYS.SCORE} style={{ textDecoration: "none" }}>
              <Button variant="contained">Finish</Button>
            </Link>
          ) : (
            <Link to={ROUTING_KEYS.QUESTION(Number(id) + 1)} style={{ textDecoration: "none" }}>
              <Button variant="contained">Next</Button>
            </Link>
          )}
        </CardActions>
      </Card>
    </AppWrapper>
  );
};
