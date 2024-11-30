import './App.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import BusRoutes from './components/BusRoutes';
import Signin from './components/Signin';
import Signup from './components/Signup';

import {Routes,Route, BrowserRouter} from 'react-router-dom';
import AddBusRoute from './components/AddBusRoute';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="demo-react/" element={<Home/>}/>
        <Route path="demo-react/signin" element={<Signin/>}/>
        <Route path="demo-react/signup" element={<Signup/>}/>
        <Route path="demo-react/aboutus" element={<AboutUs/>}/>
        <Route path="demo-react/contactus" element={<ContactUs/>}/>
        <Route path="demo-react/busroutes" element={<BusRoutes/>}/>
        <Route path="demo-react/admin" element={<AddBusRoute/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

