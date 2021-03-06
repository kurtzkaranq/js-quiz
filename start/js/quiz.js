// 1. Create a multidimensional array to hold quiz questions and answers
let questions = [
  ["How many continents are there?", "7"],
  ["How many days are in a year", "365"],
  ["How many planets are in the solar system", "8"],
];

// 2. Store the number of questions answered correctly
let correctAnswer = 0;
let wrongAnswer = 0;
let wrongQuestions;
/* 
3. Use a loop to cycle through each question
- Present each question to the user
- Compare the user's response to answer in the array
- If the response matches the answer, the number of correctly
answered questions increments by 1
*/
for (let i = 0; i < questions.length; i++) {
  const question = questions[i][0];
  const answer = questions[i][1];

  const input = prompt(question);
  if (input == answer) {
    correctAnswer++;
  } else {
    wrongAnswer++;
    wrongQuestions = question;
    console.log(wrongAnswer);
    if (wrongAnswer == 3) {
      document.querySelector(
        "main"
      ).innerHTML = `You answered ${wrongAnswer} questions wrong`;
    } else if (wrongAnswer == 0) {
      document.querySelector(
        "main"
      ).innerHTML = `You answered ${correctAnswer} questions all correct.`;
    } else {
      document.querySelector(
        "main"
      ).innerHTML = `You answered ${correctAnswer} questions correct and ${wrongAnswer} questions wrong.`;
    }
  }
}
