import { Route, Routes } from "react-router-dom";
import "./App.css";
import ResultsSummary from "./pages/ResultsSummary/ResultsSummary";
import Main from "./pages/Main";
import SocialProfile from "./pages/SocialProfile/SocialProfile";
import QRCode from "./pages/QRCode/QRCode";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="resultsSummary" element={<ResultsSummary />} />
        <Route path="socialProfile" element={<SocialProfile />} />
        <Route path="qrCode" element={<QRCode />} />
      </Routes>
    </div>
  );
}

export default App;
