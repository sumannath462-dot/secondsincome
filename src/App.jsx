import { BrowserRouter, Routes, Route } from "react-router-dom";

import SecondsIncome from "./pages/SecondsIncome";
import OlympiaGymDemo from "./pages/OlympiaGymDemo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SecondsIncome />} />
        <Route path="/olympia" element={<OlympiaGymDemo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;