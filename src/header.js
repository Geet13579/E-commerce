import React from 'react';
import './App.css';
import './container.less';
import {Header, Navbar} from 'rsuite';


function header() {
  return (

      <Header style={{marginBottom:"40px"}}>
        <Navbar style={{background:"#34c3ff"}} appearance="inverse">
        </Navbar>
      </Header>
  
  )
}

export default header