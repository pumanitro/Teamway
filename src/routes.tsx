import { createBrowserRouter } from "react-router-dom";
import React from "react";
import { HomePage } from "./pages/HomePage";
import { ROUTING_KEYS } from "./utils/routingKeys";
import { QuestionPage } from "./pages/QuestionPage";
import { ScorePage } from "./pages/ScorePage";

export const router = createBrowserRouter([
  {
    path: ROUTING_KEYS.HOME,
    element: <HomePage />,
  },
  {
    path: ROUTING_KEYS.QUESTION(":id"),
    element: <QuestionPage />,
  },
  {
    path: ROUTING_KEYS.SCORE,
    element: <ScorePage />,
  },
]);
