import { Route, Routes } from "react-router-dom";
import "./App.css";
import ResultsSummary from "./pages/ResultsSummary/ResultsSummary";
import Main from "./pages/Main";
import SocialProfile from "./pages/SocialProfile/SocialProfile";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="resultsSummary" element={<ResultsSummary />} />
        <Route path="socialProfile" element={<SocialProfile />} />
      </Routes>
    </div>
  );
}

export default App;
