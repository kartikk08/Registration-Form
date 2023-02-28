
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import RegistrationForm from './components/RegistrationForm';
import Shop from './components/Shop';
import Number from './components/Number';
import EditProfile from './components/EditProfile';
import Profile from './components/Profile';

function App() {
  return (


   <>
  
     {/* <Navbar/> */}
     <div className="container">
     {/* <Number/> */}
    
     {/* <Shop/> */}
     </div>
 
  <BrowserRouter>
      <Routes>
      <Route path = "/" element={<RegistrationForm/>} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/editprofile" element={<EditProfile />} />
    
      </Routes>
      </BrowserRouter>

   
</>
  )
}

export default App;
