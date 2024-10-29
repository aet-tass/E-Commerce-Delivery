import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import { LoginRegister } from './pages/loginRegister';
import Page from './pages/Page';
import { Dashboard } from './pages/dashboard';
import { Profile } from './pages/profile';
import { Settings } from './pages/settings';
import { Shop } from "./pages/shop";
import { Notifications } from "./pages/notifications";
import { Admin } from "./pages/admin";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Page />} />
      <Route path="/login" element={<LoginRegister />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/settings" element={<Settings/>} />
      <Route path="/shop" element={<Shop />} /> 
      <Route path="/notifications" element={<Notifications />} /> 
      <Route path="/admin" element={<Admin />} /> 


    </Routes>
    </BrowserRouter>  

    </>
    
  );
}

export default App;
