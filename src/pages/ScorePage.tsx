import React from "react";
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { AppWrapper } from "../components/AppWrapper";
import { ROUTING_KEYS } from "../utils/routingKeys";
import { Link } from "react-router-dom";
import { QuestionContextType, useQuestionsContext } from "../contexts/QuestionsContext";
import { personalityTraits } from "../utils/personalitiTraitsConsts";

const getPoints = (questions: QuestionContextType[], scoreType: "introvertScore" | "extrovertScore") => {
  return questions.reduce((acc, curr) => {
    return acc + curr.answer[scoreType];
  }, 0);
};

export const ScorePage = () => {
  const { questions } = useQuestionsContext();

  const extrovertPoints = getPoints(questions, "extrovertScore");
  const introvertPoints = getPoints(questions, "introvertScore");

  const isExtrovert = extrovertPoints > introvertPoints;

  return (
    <AppWrapper>
      <Card sx={{ p: 2 }}>
        <CardContent>
          <Typography variant="h5">You are {isExtrovert ? "Extrovert" : "Introvert"}!</Typography>
          <Typography variant="body1">What does it mean?</Typography>
          <Typography variant="body2">
            {isExtrovert ? personalityTraits.extrovert.description : personalityTraits.introvert.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Link to={ROUTING_KEYS.HOME} style={{ textDecoration: "none" }}>
            <Button variant="contained">Go to main page</Button>
          </Link>
        </CardActions>
      </Card>
    </AppWrapper>
  );
};
