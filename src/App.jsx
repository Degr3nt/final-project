import './App.css'


import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/homePage.jsx";
import DownloadPage from "./pages/downloadPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/download" element={<DownloadPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
