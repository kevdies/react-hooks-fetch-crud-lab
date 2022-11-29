/**
 * {
 id: 4,
 prompt: "______ is a tool that transpiles JSX into valid JavaScript.",
 answers: [
   "React",
   "Babel",
   "Webpack",
   "ES6"
  ],
  correctIndex: 1
},
*/
import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [quizObj, setQuizObj] = useState([]);


  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then(res => res.json())
    .then(quizObj => setQuizObj(quizObj))
  }, [])


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList />}
    </main>
  );
}

export default App;
