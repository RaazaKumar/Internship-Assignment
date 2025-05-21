import "./App.css";
import { Route, Routes } from "react-router-dom";

import LandingScreen from "./Pages/LandingScreen";
import LoginScreen from "./Pages/LoginScreen";
import Profile from "./Pages/Profile";
import SignupScreen from "./Pages/SignupScreen";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingScreen />} />
      <Route path="/LoginScreen" element={<LoginScreen />} />
      <Route path="/SignupScreen" element={<SignupScreen />} />
      <Route path="/Profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
