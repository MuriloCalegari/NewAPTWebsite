const qBank = [
    {
      question:
        "Question 1",
        answers: ["1", "2", "3", "4", "5", "6"],
      correct: "1",
      questionId: "099099"
    },
    {
      question:
        "Question 2",
      answers: ["1", "2", "3", "4", "5", "6"],
      correct: "2",
      questionId: "093909"
    },
];
  
// n = 5 to export 5 question
export default (n = 2) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));