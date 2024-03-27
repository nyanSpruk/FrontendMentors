import { Route, Routes } from "react-router-dom";
import "./App.css";
import ResultsSummary from "./pages/ResultsSummary/ResultsSummary";
import Main from "./pages/Main";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="resultsSummary" element={<ResultsSummary />} />
      </Routes>
    </div>
  );
}

export default App;
