import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/Header';
import Footer from '../components/Footer';

function Layout ({children}){
  
  return (
    <div className="App">
      <Header/>
      <div className="main_part" style={{minHeight: '599px'}}>{children}</div>
      <Footer/>
    </div>
  );
}
export default Layout;