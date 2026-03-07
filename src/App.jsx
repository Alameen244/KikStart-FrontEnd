import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import MainLayout from "./Layouts/MainLayout";
import AuthLayout from "./Layouts/AuthLayout";
import About from "./Pages/About";
import InterestedSchools from "./Pages/InterestedSchools";
import Programs from "./Pages/Programs";
import Details from "./Pages/Details";
import Subscription from "./Pages/Subscription";
import WhyUs from "./Pages/WhyUs";
import ProgramDetails from "./Pages/ProgramDetails";
import FAQs from "./Pages/FAQs";
import ContactUs from "./Pages/ContactUs";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
import OTP from "./Components/Auth/OTP/OTP";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/schools" element={<InterestedSchools />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/program/:id" element={<ProgramDetails />} />
            <Route path="/become-a-coach" element={<Details />} />
            <Route path="/subs" element={<Subscription />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/faqs" element={<FAQs />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/otp" element={<OTP />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
