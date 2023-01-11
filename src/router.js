import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Test from "./pages/test";
import Speech from "./components/speech";
import Introduce from "./pages/introduce";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
        <Route path="/speech" element={<Speech />} />
        <Route path="/introduce" element={<Introduce />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
