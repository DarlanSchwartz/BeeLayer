import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageCheckout from './pages/Checkout.page';
import PageLogin from './pages/Login.page';
import PageSucess from './pages/Sucess.page';
import PageBeeLirouLogin from './pages/BeeLirouLogin.page';
import PageBeeLirouRegister from './pages/BeeLirouRegister.page';
import PageBeeLirouRegisterSuccess from './pages/BeeLirouRegisterSucess.page';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/checkout' element={<PageCheckout />} />
        <Route path='/' element={<PageLogin />} />
        <Route path='/success' element={<PageSucess />} />
        <Route path='/login-beelirou' element={<PageBeeLirouLogin />} />
        <Route path='/register-beelirou' element={<PageBeeLirouRegister />} />
        <Route path='/register-beelirou/success' element={<PageBeeLirouRegisterSuccess />} />
      </Routes>
    </BrowserRouter>

  );
}
