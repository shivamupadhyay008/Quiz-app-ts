import {QuizLoader} from "./Components/quiz/quiz";
import { Home, Navbar, Dashboard } from "./Components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <div className="App" style={{ paddingTop: "3.4rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/quiz/:type"
            element={<QuizLoader/>}
          />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
