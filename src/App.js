import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './components/Pages/Home/Home/Home'
import Footer from './components/Pages/Shared/Footer/Footer';
// import ServiceDetail from './components/Pages/ServiceDetail/ServiceDetail';
import ServiceDetail from './components/Pages/ServiceDetail/ServiceDetail'

function App() {
  return (
    <>
   
    <Routes>
      <Route path='/' element={ <Home> </Home> }> </Route>
      {/* <Route path='/service/:serviceId' element={<ServiceDetail> </ServiceDetail>}> </Route> */}
      <Route path='/service/:serviceId' element={<ServiceDetail> </ServiceDetail>}></Route>
    </Routes>
     <Footer> </Footer>
    </>
  );
}

export default App;
