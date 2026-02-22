import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import MainLayout from "./Layouts/MainLayout";
import AuthLayout from "./Layouts/AuthLayout";
import About from "./Pages/About";
import InterestedSchools from "./Pages/InterestedSchools";
import Programs from "./Pages/Programs";
import Details from "./Pages/Details";
import Subscription from './Pages/Subscription'
import WhyUs from "./Pages/WhyUs";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/schools" element={<InterestedSchools/>} />
            <Route path="/programs" element={<Programs/>} />
            <Route path="/become-a-coach" element={<Details/>} />
            <Route path="/subs" element={<Subscription />} />
            <Route path="/why-us" element={<WhyUs />} />



          </Route>
          <Route element={<AuthLayout />}>


          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
