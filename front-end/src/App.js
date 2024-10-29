import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import { LoginRegister } from './pages/loginRegister';
import Page from './pages/Page';
import { Dashboard } from './pages/dashboard';
import { Profile } from './pages/profile';
import { Settings } from './pages/settings';
import { MyOrders } from './pages/myOrders';
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
      <Route path="/myOrders" element={<MyOrders/>} />
      {/* <Route path="/shop" element={<Shope/>} /> */}
    </Routes>
    </BrowserRouter>  

    </>
    
  );
}

export default App;
