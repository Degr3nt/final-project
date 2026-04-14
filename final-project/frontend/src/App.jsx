import './App.css'


import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/homePage.jsx";
import DownloadPage from "./pages/downloadPage.jsx";
import DatabasePage from './pages/databasePage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/content" element={<DatabasePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
