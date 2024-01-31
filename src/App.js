
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './components/Login';
import Home from './dashboad';
import FormPage from './components/form';
import TablePage from './components/tablePage'



function App() {

  return (
    <Router>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/table" element={<TablePage />} />


        </Routes>
    </Router>
  );
}

export default App;
