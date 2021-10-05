import React, {useState} from 'react';
import { Header } from './components';
import GlobalStyle from './GlobalStyle';
import {Body} from './components';
import {HeaderImage} from './components';
import {ClientFeedBack} from './components';
import {FooterImage} from './components';
import {Footer} from './components';

function App() {

  return (
    <div>
       <GlobalStyle />
      <Header />
      <HeaderImage />
      <Body />
      <ClientFeedBack />
      <FooterImage />
      <Footer />
    </div>
   
  );
}

export default App;
