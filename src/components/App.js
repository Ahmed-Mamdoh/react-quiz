import { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";
import { useQuiz } from "../context/QuizContext";

export default function App() {
  const { status, dispatch } = useQuiz();

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" ? <Loader /> : null}
        {status === "ready" ? <StartScreen /> : null}
        {status === "active" ? (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        ) : null}
        {status === "finished" ? <FinishScreen /> : null}
      </Main>
    </div>
  );
}
