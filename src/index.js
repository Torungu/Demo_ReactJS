import React from 'react';
import ReactDOM from 'react-dom/client';
// import Header from './components/Header';
// import Product from './components/Product';
import BaitapDemo from './components/BaitapHomeLayout/BaitapDemo';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <div className='bg-dark text-white p-3'>Hello cybersoft</div>
  // <div>
  //   <Header />
  //   <Header />
  //   <Header />
  //   <div className='w-25 mt-2'>
  //     <Product />
  //   </div>
  // </div>
  <BaitapDemo />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
