import 'bootstrap/dist/css/bootstrap.min.css';
import fakeData from "./fakeData";
function App() {
  return (
    <div className="w-100 min-vh-100 bg-black d-flex justify-content-center align-items-center">
      <div className="w-50 bg-white rounded d-flex flex-column justify-content-center align-items-start p-3 ">
          <h1>Questions And Answers About Login</h1>
          <div className="border border-2 rounded mt-md-5 w-75">
              <div className="d-flex align-items-center justify-content-between gap-5 p-2">
              <h3>Question</h3>
              <button className="border-0 p-2 px-3 rounded">+</button>
              </div>
              {/*<p>Answer</p>*/}
          </div>
      </div>
    </div>
  );
}

export default App;
