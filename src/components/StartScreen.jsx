import { useQuiz } from "../context/QuizContext";

function StartScreen() {
  const { numQuestions, dispatch } = useQuiz();
  return (
    <div className="start">
      <h2>Welcome to the React Quiz</h2>
      <h3>You have {numQuestions} questions to answer</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default StartScreen;
