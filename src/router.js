import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import App from "./App";
// import Test from "./pages/test";
=======
import Test from "./pages/test";
>>>>>>> 04da88e8fc55a7af0bc40ef90d8a03eb0882d927
import Speech from "./components/speech";
import Login from "./pages/login/Index";
import Register from "./pages/register/Index";
import Introduce from "./pages/introduce";
<<<<<<< HEAD
import Practice from "./pages/practice/Index";
import CallMode from "./pages/callMode/Index";
=======
import Main from "./pages/main";
import Analytic from "./pages/analytic";
>>>>>>> 04da88e8fc55a7af0bc40ef90d8a03eb0882d927

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<App />} />
        {/* <Route path="/test" element={<Test />} /> */}
=======
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Test />} />
>>>>>>> 04da88e8fc55a7af0bc40ef90d8a03eb0882d927
        <Route path="/speech" element={<Speech />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/callMode" element={<CallMode />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/analytic" element={<Analytic />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
