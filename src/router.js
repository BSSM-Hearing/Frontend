import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Test from "./pages/Test";
import Speech from "./components/speech";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
        <Route path="/speech" element={<Speech />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
