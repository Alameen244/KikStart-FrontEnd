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
import PaymentSuccess from "./Pages/PaymentSuccess";
import PaymentCancel from "./Pages/PaymentCancel";
import OTP from "./Components/Auth/OTP/OTP";
import ProtectedRoute from "./Components/Auth/ProtectedRoute";
import NotFoundPage from "./Pages/404notFound";
import DashBoardLayout from "./Layouts/DashboardLayout";
import DashboardPage from "./Pages/DashboardPage";
import TransactionPage from "./Pages/TransactionPage";
import MessagePage from "./Pages/MessagePage";
import ChildrenProfilePage from "./Pages/ChildrenProfilePage";
import DashboardProgramPage from "./Pages/DashboardProgramPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/user-dashboard/" element={<DashBoardLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="dashboard-transactions" element={<TransactionPage />} />
            <Route path="dashboard-programs" element={<DashboardProgramPage />} />
            <Route path="dashboard-children-profile" element={<ChildrenProfilePage />} />
            <Route path="dashboard-messages" element={<MessagePage />} />
          </Route>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/schools" element={<InterestedSchools />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/program/:id" element={<ProgramDetails />} />
            <Route
              path="/become-a-coach"
              element={
                <ProtectedRoute>
                  <Details />
                </ProtectedRoute>
              }
            />
            <Route
              path="/subs"
              element={
                <ProtectedRoute>
                  <Subscription />
                </ProtectedRoute>
              }
            />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
            <Route path="/payment-cancel" element={<PaymentCancel />} />
            <Route path="/success" element={<PaymentSuccess />} />
            <Route path="/cancel" element={<PaymentCancel />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/otp" element={<OTP />} />
          </Route>
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
