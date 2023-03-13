import { getQuestionService } from "./questionService";

jest.mock("../questionsInMemoryDB", () => ({
  questionsDB: new Map([
    [
      "0",
      {
        id: "0",
        question: "When you have free time, do you prefer to",
        answers: [
          {
            answerText: "Spend time alone",
            introvertScore: 1,
            extrovertScore: 0,
          },
          {
            answerText: "Spend time with others",
            introvertScore: 0,
            extrovertScore: 1,
          },
        ],
      },
    ],
  ]),
}));
describe("question service", () => {
  it("retrieves proper question data from DB", () => {
    expect(getQuestionService("0").id).toBe("0");
    expect(getQuestionService("0").question).toBe("When you have free time, do you prefer to");
    expect(getQuestionService("0").answers[0].answerText).toBe("Spend time alone");
    expect(getQuestionService("0").answers[0].introvertScore).toBe(1);
  });
});
