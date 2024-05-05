import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageCheckout from './pages/Checkout.page';
import PageLogin from './pages/Login.page';
import PageSucess from './pages/Sucess.page';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/checkout' element={<PageCheckout />} />
        <Route path='/' element={<PageLogin />} />
        <Route path='/success' element={<PageSucess />} />
      </Routes>
    </BrowserRouter>

  );
}
