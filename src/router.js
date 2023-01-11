import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Test from "./pages/Test";
import Speech from "./components/speech";
import Login from "./pages/login/Index";
import Register from "./pages/register/Index";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
        <Route path="/speech" element={<Speech />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
