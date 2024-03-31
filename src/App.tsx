import { Route, Routes } from "react-router-dom";
import "./App.css";
import ResultsSummary from "./pages/ResultsSummary/ResultsSummary";
import Main from "./pages/Main";
import SocialProfile from "./pages/SocialProfile/SocialProfile";
import QRCode from "./pages/QRCode/QRCode";
import BlogPreviewCard from "./pages/BlogPreviewCard/assets/BlogPreviewCard";
import RecipePage from "./pages/RecipePage/RecipePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="resultsSummary" element={<ResultsSummary />} />
        <Route path="socialProfile" element={<SocialProfile />} />
        <Route path="qrCode" element={<QRCode />} />
        <Route path="blogPreviewCard" element={<BlogPreviewCard />} />
        <Route path="recipePage" element={<RecipePage />} />
      </Routes>
    </div>
  );
}

export default App;
