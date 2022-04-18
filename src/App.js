import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './components/Pages/Home/Home/Home'
import Footer from './components/Pages/Shared/Footer/Footer';
// import ServiceDetail from './components/Pages/ServiceDetail/ServiceDetail';
import ServiceDetail from './components/Pages/ServiceDetail/ServiceDetail'
// import RequireAuth from './components/Pages/Auth/RequireAuth/RequireAuth';
// import Checkout from './components/Pages/Checkout/Checkout';
import About from './components/Pages/About/About';
import Header from './components/Pages/Shared/Header/Header'
import NotFound from './components/Pages/Shared/NotFound/NotFound';
import Login from './components/Pages/Auth/Login/Login';
import Register from './components/Pages/Auth/Register/Register';
import Blog from './components/Pages/Blog/Blog';
import Checkout from './components/Pages/Checkout/Checkout/Checkout';
import RequireAuth from './components/Pages/Auth/RequireAuth/RequireAuth';


function App() {
  return (
    <>
       <Header> </Header>
    <Routes>
      <Route path='/' element={ <Home> </Home> }> </Route>
      <Route path='/home' element={ <Home> </Home> }> </Route>
      {/* <Route path='/service/:serviceId' element={<ServiceDetail> </ServiceDetail>}> </Route> */}
      <Route path='/service/:serviceId' element={<ServiceDetail> </ServiceDetail>}></Route>
      <Route path='/about' element={<About> </About>}></Route>
      <Route path='/login' element={<Login> </Login>}></Route>
      <Route path='/register' element={<Register> </Register>}></Route>
      <Route path='/blog' element={<Blog> </Blog>}></Route>
      <Route path='*' element={<NotFound> </NotFound>}></Route>
      {/* <Route path='/checkout' element={
        <RequireAuth>
          <Checkout> </Checkout>
        </RequireAuth>
      }
      ></Route> */}
      <Route path='/checkout' element={
        <RequireAuth>
          <Checkout></Checkout>
        </RequireAuth>
      }></Route>
    </Routes>
     <Footer> </Footer>
    </>
  );
}

export default App;
