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

export const QuestionPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuestion(id || "0");

  if (isLoading) {
    return (
      <AppWrapper>
        <CircularProgress />
      </AppWrapper>
    );
  }

  if (!data) {
    return (
      <AppWrapper>
        <Alert severity="error">Question not found!</Alert>
      </AppWrapper>
    );
  }

  const { question, answers, questionsAmount } = data;

  const isTheLastQuestion = Number(id) === questionsAmount - 1;

  return (
    <AppWrapper>
      <Card sx={{ p: 2 }}>
        <CardContent>
          <Typography variant="h5">{question}</Typography>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
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
