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
import SideBar from "./components/registration/SideBar";
import MainLogin from "./components/frontpage/MainLogin";
import UserTable from "./components/table/UserTable";

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
          <Route
            exact
            path="/userregistration"
            element={<UserRegistration />}
          />
          <Route path="*" element={<ErrorPage />} /> 
        </Routes>
      </BrowserRouter> */}
      {/* <UserSRegistration /> */}
      <SideBar />
      {/* <UserTable/> */}
    </>
  );
}

export default App;
