import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Test from "./pages/Test";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
