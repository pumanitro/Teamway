import React from "react";
import { Button, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { AppWrapper } from "../components/AppWrapper";
import { ROUTING_KEYS } from "../utils/routingKeys";
import { Link } from "react-router-dom";
import { useQuestionsContext } from "../contexts/QuestionsContext";
import IntroversAndExtrovert from "../assets/introvert_and_extrovert.png";

export const HomePage = () => {
  const { setQuestions } = useQuestionsContext();
  return (
    <AppWrapper>
      <CardMedia component="img" sx={{ height: "50vh" }} image={IntroversAndExtrovert} />
      <CardContent>
        <Typography variant="h5" sx={{ mb: 1 }}>
          Welcome to personality test!
        </Typography>
        <Typography>
          It takes 5 different questions, maps them into a score and produces a personality trait of either Introvert or
          Extrovert.
        </Typography>
        <Typography>Going through test you will see beautiful images created by AI. Enjoy!</Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Link to={ROUTING_KEYS.QUESTION(0)} style={{ textDecoration: "none" }} onClick={() => setQuestions([])}>
          <Button variant="contained">Start test</Button>
        </Link>
      </CardActions>
    </AppWrapper>
  );
};
