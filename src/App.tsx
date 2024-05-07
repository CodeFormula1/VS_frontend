import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/home";
import UploadFilePage from "./pages/upload-page/upload-file-page";
import AnalyticsPage from "./pages/analytics/analytics";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload" element={<UploadFilePage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
