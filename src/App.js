import './App.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import BusRoutes from './components/BusRoutes';
import Signin from './components/Signin';
import Signup from './components/Signup';

import {Routes,Route,HashRouter as Router} from 'react-router-dom';
import AddBusRoute from './components/AddBusRoute';


function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="demo-react/" element={<Home/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/busroutes" element={<BusRoutes/>}/>
        <Route path="/admin" element={<AddBusRoute/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;

