import './App.css';
import Community from './MyComponents/Community';
import Navbar from './MyComponents/Navbar';
import { PageNext } from "./MyComponents/PageNext";
import StartBtn from "./MyComponents/StartBtn";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import TopBar from './Studiopart/TopBar';
import TemplateBar from './TemplatePageStudio/TemplateBar'; 
import './Template.css'
import LoginPage from './Login/Login';
import './Login.css'
import Signup from './Signup/Signup';
import './Signup.css'
import './Faq.css'

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}


function MainLayout() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/community" || location.pathname === "/studio" || location.pathname === "/templatepage" || location.pathname === "/login" || location.pathname === "/Signup";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<PageNext />} />
        <Route path="/start" element={<StartBtn />} />
        <Route path="/community" element={<Community />} />
        <Route path="/studio" element={<TopBar />} />
        <Route path="/templatepage" element={<TemplateBar />} /> 
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/Signup" element={<Signup/>}/>

      </Routes>
    </>
  );
}


export default App;
