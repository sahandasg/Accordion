import 'bootstrap/dist/css/bootstrap.min.css';
import fakeData from "./fakeData";
import Question from "./components/Question";
function App() {
    const data = fakeData
  return (
    <div className="w-100 min-vh-100 bg-black d-flex justify-content-center align-items-center">
      <div className="w-50 bg-white rounded d-flex flex-column justify-content-center align-items-start p-3 m-3">
          <h1>Questions And Answers About Login</h1>
          {
              data.map(question=>(
                  <Question key={question.id} {...question} />
              ))
          }
      </div>
    </div>
  );
}

export default App;
