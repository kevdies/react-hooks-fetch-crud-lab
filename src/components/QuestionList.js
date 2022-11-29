import React, {useState, useEffect } from "react";

function QuestionList() {

  const [quizObj, setQuizObj] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((quizObj) => setQuizObj(quizObj));
  }, []);

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}</ul>
    </section>
  );
}

export default QuestionList;
