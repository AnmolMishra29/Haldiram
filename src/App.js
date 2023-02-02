import './App.css';
import Appbar from './components/frontpage/Appbar';
import EthnicDashboard from './components/dashboard/EthnicDashboard';
import ManufacturingDashboard from './components/dashboard/ManufacturingDashboard';
import MarketingDashboard from './components/dashboard/MarketingDashboard';
import ProductDashboard from './components/dashboard/ProductDashboard';
import MallDetails from './components/detailMall/MallDetails';
import EngineeringMode from './components/detailMall/EngineeringMode';

import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Routes>
           <Route path='/' element= {<Appbar/>}/>
           <Route path='ethnic' element= {<EthnicDashboard/>}/>
           <Route path='marketing' element= {<MarketingDashboard/>}/>
           <Route path='manufacturing' element= {<ManufacturingDashboard/>}/>
           <Route path='product' element= {<ProductDashboard/>}/>
           <Route path='malldetails' element= {<MallDetails/>}/>
           <Route path='engineering' element= {<EngineeringMode/>}/>
        </Routes>
       
    </BrowserRouter>
  );
}

export default App;
