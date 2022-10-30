import React from 'react';
import ReactDOM from 'react-dom/client';
import BaitapDemo from './components/BaitapHomeLayout/BaitapDemo';
import DataBinding from './DataBinding/DataBinding';
import DemoState from './DemoState/DemoState';
import HandleEvent from './HandleEvent/HandleEvent';
import './assets/css/style.css'
import RenderList from './RenderList/RenderList';
import RenderFilm from './RenderList/RenderFilm';
import DemoProps from './Props/DemoProps/DemoProps';
import ShoesApp from './Props/ShoesApp/ShoesApp';
import BaitapState from './DemoState/BaiTapXemChiTiet/BaiTapXemChiTiet';
import BaiTapXemChiTiet from './DemoState/BaiTapXemChiTiet/BaiTapXemChiTiet';
import CarStore from './Props/CarStore/CarStore';
import DemoChildren from './Props/DemoChildren/DemoChildren';
//Setup react router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
const root = ReactDOM.createRoot(document.getElementById('root'));

//JSX: KHÔNG HIỂU
root.render(
  // <div>
  //   {/* <BaitapDemo /> */}
  //   {/* <DataBinding /> */}
  //   {/* <HandleEvent /> */}
  //   {/* <DemoState /> */}
  //   {/* <RenderList /> */}
  //   {/* <RenderFilm /> */}
  //   {/* <DemoProps /> */}
  //   {/* <ShoesApp /> */}
  //   {/* <BaiTapXemChiTiet /> */}
  //   <CarStore />
  //   {/* <DemoChildren /> */}
  // </div>
  <BrowserRouter>
    <Routes>
      <Route path="" element={<Home />}>
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="carstore" element={<CarStore />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
