
import ReactDOM from 'react-dom';
import './App.css';
import './container.less';

import { FlexboxGrid, Col, Container,Content } from 'rsuite';

const App = () => (
  <Content>
    <Container style={{marginTop:"30px"}}>
 <div className="show-grid">
    <FlexboxGrid justify="space-around">
      <FlexboxGrid.Item as={Col} colspan={20} md={6} style={{background:"white",height:"200px",boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px 2.6px'}}>
      
      </FlexboxGrid.Item>
      <FlexboxGrid.Item as={Col} colspan={20} md={6} style={{background:"white",height:"200px",boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px 2.6px'}}>
        
      </FlexboxGrid.Item>
   
    </FlexboxGrid>
  
    {/* <FlexboxGrid justify="space-around">
      <FlexboxGrid.Item as={Col} colspan={20} md={6} style={{background:"red",height:"200px"}}>
        colspan={20} md={6}
      </FlexboxGrid.Item>
      <FlexboxGrid.Item as={Col} colspan={20} md={6} style={{background:"yellow",height:"200px"}}>
        colspan={20} md={6}
      </FlexboxGrid.Item>
   
    </FlexboxGrid>  */}

  </div>

  
    </Container>

    </Content>

 
);

export default App

ReactDOM.render(<App />, document.getElementById('root'));