export const ROUTING_KEYS = {
  HOME: "/",
  QUESTION: (questionIndex: number | string) => `/question/${questionIndex}`,
  SCORE: "/score",
};
