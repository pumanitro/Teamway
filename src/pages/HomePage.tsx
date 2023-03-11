import React from "react";
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { AppWrapper } from "../components/AppWrapper";
import { ROUTING_KEYS } from "../utils/routingKeys";
import { Link } from "react-router-dom";
import { useQuestionsContext } from "../contexts/QuestionsContext";

export const HomePage = () => {
  const { setQuestions } = useQuestionsContext();
  return (
    <AppWrapper>
      <Card sx={{ p: 2 }}>
        <CardContent>
          <Typography variant="h5">Welcome to personality test!</Typography>
          <Typography>
            It takes 5 different questions, maps them into a score and produces a personality trait of either Introvert
            or Extrovert.
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Link to={ROUTING_KEYS.QUESTION(0)} style={{ textDecoration: "none" }} onClick={() => setQuestions([])}>
            <Button variant="contained">Start test</Button>
          </Link>
        </CardActions>
      </Card>
    </AppWrapper>
  );
};
