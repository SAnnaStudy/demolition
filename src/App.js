import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main'
import Layout from './pages/Layout'
import { ErrorURLPage } from './pages/ErrorURLPage';
import './App.scss';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' exact element={<Main/>}/>
        <Route path='/page-one' element={<PageOne/>}/>
        <Route path='/page-two' element={<PageTwo/>}/>
        <Route path='/page-three' element={<PageThree/>}/>
        <Route path='*' element={<ErrorURLPage/>}/>
      </Routes>
    </Layout>
  )
}

export default App;
