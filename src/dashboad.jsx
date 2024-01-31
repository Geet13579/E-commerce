import React from 'react';
import './App.css';
import './container.less';
import HeaderPage from './header.js';
import SidebarPage from './sidebar.js';
import MainPage from './mainPage.js';

import { Container } from 'rsuite';


const Dashboard = () => {

  return (
    <div className="show-fake-browser sidebar-page">
    
      <Container>
        <SidebarPage />

        <Container>
          <HeaderPage />
          {/* <Content> */}

            <MainPage />

          {/* </Content> */}
        </Container>
      </Container>
    </div>
  );
};
export default Dashboard


