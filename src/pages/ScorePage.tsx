import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  LinearProgress,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { AppWrapper } from "../components/AppWrapper";
import { ROUTING_KEYS } from "../utils/routingKeys";
import { Link } from "react-router-dom";
import { QuestionContextType, useQuestionsContext } from "../contexts/QuestionsContext";
import { personalityTraits } from "../utils/personalitiTraitsConsts";
import ExtrovertImage from "../assets/extrovert.png";
import IntrovertImage from "../assets/introvert.png";

const getPoints = (questions: QuestionContextType[], scoreType: "introvertScore" | "extrovertScore") => {
  return questions.reduce((acc, curr) => {
    return acc + curr.answer[scoreType];
  }, 0);
};

type PersonalityColorsType = "warning" | "secondary";
type PersonalityColorType = {
  [key in "extrovert" | "introvert"]: PersonalityColorsType;
};

const personalityColor: PersonalityColorType = {
  extrovert: "warning",
  introvert: "secondary",
};

export const ScorePage = () => {
  const { questions } = useQuestionsContext();
  const theme = useTheme();
  const mdMatch = useMediaQuery(theme.breakpoints.down("md"));

  const extrovertPoints = getPoints(questions, "extrovertScore");
  const introvertPoints = getPoints(questions, "introvertScore");

  const isExtrovert = extrovertPoints > introvertPoints;
  const points = isExtrovert ? extrovertPoints : introvertPoints;

  return (
    <AppWrapper>
      <CardContent>
        <Stack direction={mdMatch ? "column-reverse" : "row"}>
          <Stack>
            <Typography variant="h5" sx={{ mb: 2 }}>
              You are an {isExtrovert ? "Extrovert" : "Introvert"}!
            </Typography>
            <Typography variant="body1">What does it mean?</Typography>
            <Typography variant="body2">
              {isExtrovert ? personalityTraits.extrovert.description : personalityTraits.introvert.description}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ mt: 2, mb: 2 }} gap={2} alignItems="center">
              <Stack direction="row" alignItems="center">
                <Typography variant="h5" sx={{ minWidth: "120px" }}>
                  Your score{" "}
                </Typography>
                <Typography variant="subtitle2" color="grey.500" sx={{ display: "inline" }}>
                  ({(points / questions.length) * 100}%)
                </Typography>
              </Stack>
              <Box width="100%" sx={{ mr: 2 }}>
                <LinearProgress
                  variant="determinate"
                  value={(points / questions.length) * 100}
                  color={isExtrovert ? personalityColor.extrovert : personalityColor.introvert}
                />
              </Box>
            </Stack>
            {questions.map((q) => (
              <Card key={q.id} sx={{ mb: 2 }}>
                <Stack direction={mdMatch ? "column-reverse" : "row"} justifyContent="space-between" p={3}>
                  <Stack>
                    <Typography key={q.id} variant="body2">
                      {q.question}: {q.answer.answerText.toLowerCase()}
                    </Typography>
                  </Stack>
                  <Chip
                    label={q.answer.extrovertScore === 1 ? "Extrovert" : "Introvert"}
                    color={q.answer.extrovertScore === 1 ? personalityColor.extrovert : personalityColor.introvert}
                    variant="outlined"
                    sx={{ width: mdMatch ? "100%" : "100px", mb: mdMatch ? 1 : 0 }}
                    size={"small"}
                  />
                </Stack>
              </Card>
            ))}
          </Stack>
          <img
            style={{ width: mdMatch ? "100%" : "50vh" }}
            height="100%"
            src={isExtrovert ? ExtrovertImage : IntrovertImage}
            alt="Personality image"
          />
        </Stack>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Link to={ROUTING_KEYS.HOME} style={{ textDecoration: "none" }}>
          <Button variant="contained">Go to main page</Button>
        </Link>
      </CardActions>
    </AppWrapper>
  );
};
