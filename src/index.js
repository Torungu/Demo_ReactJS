import React from 'react';
import ReactDOM from 'react-dom/client';
import BaitapDemo from './components/BaitapHomeLayout/BaitapDemo';
import DataBinding from './DataBinding/DataBinding';
import DemoState from './DemoState/DemoState';
import HandleEvent from './HandleEvent/HandleEvent';
import './assets/css/style.css'
import RenderList from './RenderList/RenderList';
import RenderFilm from './RenderList/RenderFilm';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    {/* <BaitapDemo />
    <DataBinding />
    <HandleEvent />
    <DemoState /> 
    <RenderList /> */}
    <RenderFilm />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
