import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./pages/test";
import Speech from "./components/speech";
import Introduce from "./pages/introduce";
import Main from "./pages/main";
import Analytic from "./pages/analytic";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Test />} />
        <Route path="/speech" element={<Speech />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/analytic" element={<Analytic />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
