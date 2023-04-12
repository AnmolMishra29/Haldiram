import "./App.css";
import Appbar from "./components/frontpage/Appbar";
import EthnicDashboard from "./components/dashboard/EthnicDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainDashboard from "./components/dashboard/MainDashboard";
import MallDetails from "./components/StandartMode/MallDetails";
import EngineeringMode from "./components/StandartMode/EngineeringMode";
import UserRegistration from "./components/registration/UserRegistration";
import DeviceRegistration from "./components/registration/DeviceRegistration";
import CounterRegistration from "./components/registration/CounterRegistration";
import StoreRegistration from "./components/registration/StoreRegistration";
import MainLogin from "./components/frontpage/MainLogin";
import UserTable from "./components/table/UserTable";
import ProSidebaar from "./components/registration/ProSidebaar";
import { CssBaseline } from "@mui/material";
import Newlist from "./components/registration/Newlist";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Appbar />} />

          <Route
            exact
            path="/Ethnic Foods Private Limited/:index"
            element={<EthnicDashboard />}
          />
          <Route
            exact
            path="/Marketing Private Limited/:index"
            element={<EthnicDashboard />}
          />
          <Route
            exact
            path="/Manufacturing Private Limited/:index"
            element={<EthnicDashboard />}
          />
          <Route
            exact
            path="/Products Private Limited/:index"
            element={<EthnicDashboard />}
          />
          <Route exact path="/MainDashboard" element={<MainDashboard />} />
          <Route exact path="/mallDetails" element={<MallDetails />} />
          <Route exact path="/engineeringmode" element={<EngineeringMode />} />
          <Route exact path="/registration" element={<ProSidebaar />} />
          <Route
            exact
            path="registration/userregistration"
            element={<UserRegistration />}
          />
          <Route
            exact
            path="/registration/storeregistration"
            element={<StoreRegistration />}
          />
          <Route
            exact
            path="/registration/deviceregistration"
            element={<DeviceRegistration />}
          />
          <Route
            exact
            path="/registration/counterregistration"
            element={<CounterRegistration />}
          />
          <Route exact path="/registration/allusers" element={<Newlist />} />
        </Routes>
      </BrowserRouter> 
      */}
      <BrowserRouter>
        <ProSidebaar />
        <Routes>
          <Route
            exact
            path="/userregistration"
            element={<UserRegistration />}
          />
          <Route
            exact
            path="/storeregistration"
            element={<StoreRegistration />}
          />
          <Route
            exact
            path="/deviceregistration"
            element={<DeviceRegistration />}
          />
          <Route
            exact
            path="/counterregistration"
            element={<CounterRegistration />}
          />
          <Route exact path="/allusers" element={<Newlist />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
