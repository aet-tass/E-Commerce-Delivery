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
import { ManageUsers } from "./pages/manageUsers";
import { ManageProducts } from "./pages/manageProducts";
import { ManageOrders } from "./pages/manageOrders";
import { NewProduct } from "./pages/newProduct";
import { MyOrders } from "./pages/myorders";


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
      <Route path="/ManageUsers" element={<ManageUsers />} /> 
      <Route path="/ManageProducts" element={<ManageProducts />} /> 
      <Route path="/ManageOrders" element={<ManageOrders />} /> 

      <Route path="/newProduct" element={<NewProduct />} />
      <Route path="/myorders" element={<MyOrders />} /> 
 




    </Routes>
    </BrowserRouter>  

    </>
    
  );
}

export default App;
