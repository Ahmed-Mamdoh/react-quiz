import { useQuiz } from "../context/QuizContext";

function Options() {
  const { answer, questions, dispatch, index } = useQuiz();
  const hasAnswered = answer !== null;
  const question = questions[index];

  return (
    <div className="options">
      {question.options.map((option, i) => (
        <button
          className={`btn btn-option ${i === answer ? "answer" : ""} ${
            hasAnswered
              ? i === question.correctOption
                ? "correct"
                : i === answer
                ? "wrong"
                : ""
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
