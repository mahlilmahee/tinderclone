import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { useCookies } from "react-cookie";
import Dashboard from "./Pages/Dashboard";
import Onboarding from "./Pages/Onboarding";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const authToken = cookies.token;
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home></Home>} />
          <Route path="/home" element={<Home></Home>} />

          {authToken && <Route path="/Dashboard" element={<Dashboard />} />}
          {authToken && (
            <Route path="/onboarding" element={<Onboarding></Onboarding>} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
