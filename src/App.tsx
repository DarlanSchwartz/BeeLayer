import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageCheckout from './pages/Checkout.page';
import PageSucess from './pages/Sucess.page';
import PageBeeLirouLogin from './pages/BeeLirouLogin.page';
import PageBeeLirouRegister from './pages/BeeLirouRegister.page';
import PageBeeLirouRegisterSuccess from './pages/BeeLirouRegisterSucess.page';
import PageHome from './pages/Home.page';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/checkout' element={<PageCheckout />} />
        <Route path='/' element={<PageHome />} />
        <Route path='/success' element={<PageSucess />} />
        <Route path='/login-beelirou' element={<PageBeeLirouLogin />} />
        <Route path='/register-beelirou' element={<PageBeeLirouRegister />} />
        <Route path='/register-beelirou/success' element={<PageBeeLirouRegisterSuccess />} />
      </Routes>
    </BrowserRouter>

  );
}
