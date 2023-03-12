import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuestion } from "../api-hooks/questionHooks";
import { AppWrapper } from "../components/AppWrapper";
import {
  Alert,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ROUTING_KEYS } from "../utils/routingKeys";
import { useQuestionsContext } from "../contexts/QuestionsContext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Question0 from "../assets/question_0.png";
import Question1 from "../assets/question_1.png";
import Question2 from "../assets/question_2.png";
import Question3 from "../assets/question_3.png";
import Question4 from "../assets/question_4.png";
import { ProgressBar } from "../components/ProgressBar";

const questionImages = [Question0, Question1, Question2, Question3, Question4];

export const QuestionPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuestion(id || "0");
  const { setQuestions, questions } = useQuestionsContext();
  const theme = useTheme();
  const mdMatch = useMediaQuery(theme.breakpoints.down("md"));

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
          answer: {
            ...answers[Number(e.target.value)],
            id: e.target.value,
          },
        },
      ]);
      return;
    } else {
      setQuestions([
        ...questions,
        {
          id,
          question,
          answer: {
            ...answers[Number(e.target.value)],
            id: e.target.value,
          },
        },
      ]);
    }
  };

  const { question, answers, questionsAmount } = data;

  const isTheLastQuestion = Number(id) === questionsAmount - 1;
  const isTheFirstQuestion = Number(id) === 0;

  return (
    <AppWrapper>
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Typography variant="subtitle2" sx={{ mb: 1, minWidth: "110px" }}>
          Question {Number(id) + 1} / {questionsAmount}
        </Typography>
        <ProgressBar elMaxAmount={questionsAmount} currentEl={Number(id)} />
      </Stack>
      <CardMedia component="img" sx={{ height: "50vh" }} image={questionImages[Number(id)]} />
      <CardContent style={{ minHeight: `calc(10vh - 100px)` }}>
        <Stack>
          <Typography variant="h5" sx={{ mb: 1 }}>
            {question}
          </Typography>
          <FormControl>
            <RadioGroup
              aria-labelledby="questions-radio-group"
              name="radio-buttons-group"
              id={`question-id`}
              value={questions.find((q) => q.id === id)?.answer?.id || null}
              onChange={onAnswerChange}
            >
              {answers.map((answer, index) => (
                <FormControlLabel
                  key={index}
                  value={index}
                  control={<Radio />}
                  label={answer.answerText}
                  sx={{ mt: mdMatch ? 1 : 0 }}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Stack>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Stack direction="row" justifyContent={isTheFirstQuestion ? "flex-end" : "space-between"} width="100%">
          {isTheFirstQuestion ? null : (
            <Link to={ROUTING_KEYS.QUESTION(Number(id) - 1)} style={{ textDecoration: "none" }}>
              <Button startIcon={<ArrowBackIcon />}>Previous</Button>
            </Link>
          )}
          {isTheLastQuestion ? (
            <Link to={ROUTING_KEYS.SCORE} style={{ textDecoration: "none" }}>
              <Button variant="contained">Finish</Button>
            </Link>
          ) : (
            <Link to={ROUTING_KEYS.QUESTION(Number(id) + 1)} style={{ textDecoration: "none" }}>
              <Button variant="contained">Next</Button>
            </Link>
          )}
        </Stack>
      </CardActions>
    </AppWrapper>
  );
};
