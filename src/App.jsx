import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Onboarding from "./Pages/Onboarding";
// import Dashboard from "./Component/Dashboard"
// import Home from "./Component/Home"
// import Onboarding from "./Component/Onboarding"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home></Home>} />
          <Route path="/home" element={<Home></Home>} />

          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/onboarding" element={<Onboarding></Onboarding>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
