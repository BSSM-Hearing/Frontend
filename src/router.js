import { BrowserRouter, Routes, Route } from "react-router-dom";
import Speech from "./components/speech";
import Login from "./pages/login/Index";
import Register from "./pages/register/Index";
import Introduce from "./pages/introduce";
import Main from "./pages/main";
import Analytic from "./pages/analytic";
import Practice from "./pages/practice/Index";
import CallMode from "./pages/callMode/Index";
import NearSound from "./pages/nearSound/Index";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/speech" element={<Speech />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/callMode" element={<CallMode />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/nearsound" element={<NearSound />} />
        <Route path="/analytic" element={<Analytic />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
