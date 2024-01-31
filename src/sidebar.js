import React, {useEffect } from 'react';
import './App.css';
import './container.less';


import { Link } from 'react-router-dom';
import { Sidebar, Sidenav, Navbar, Nav } from 'rsuite';
import CogIcon from '@rsuite/icons/legacy/Cog';
import AngleLeftIcon from '@rsuite/icons/legacy/AngleLeft';
import AngleRightIcon from '@rsuite/icons/legacy/AngleRight';
import DashboardIcon from '@rsuite/icons/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';

const headerStyles = {
    padding: 18,
    fontSize: 16,
    height: 56,
    background: '#34c3ff',
    color: ' #fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden'

};

const NavToggle = ({ expand, onChange }) => {
    return (
        <Navbar appearance="subtle" className="nav-toggle">
            <Nav>
                <Nav.Menu
                    noCaret
                    placement="topStart"
                    trigger="click"
                    title={<CogIcon style={{ width: 20, height: 20 }} size="sm" />}
                >
                    <Nav.Item>Help</Nav.Item>
                    <Nav.Item>Settings</Nav.Item>
                    <Nav.Item>Sign out</Nav.Item>
                </Nav.Menu>
            </Nav>

            <Nav pullRight>
                <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
                    {expand ? <AngleLeftIcon /> : <AngleRightIcon />}
                </Nav.Item>
            </Nav>
        </Navbar>
    );
};

const App = () => {

    
    const [expand, setExpand] = React.useState(true);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
       
            if (width < 980) {
                setExpand(false);
            } else {
                setExpand(true);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

  
    return (

        
        <Sidebar
            style={{ display: 'flex', flexDirection: 'column', boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px', height: "97vh" }}
            width={expand ? 200 : 56}
            collapsible
        >
           
            <Sidenav.Header >
                <div style={headerStyles}>
                    <span style={{ marginLeft: 12 }}>CMS</span>
                </div>
            </Sidenav.Header>
            <Sidenav expanded={expand} defaultOpenKeys={['3']} appearance="subtle">
                <Sidenav.Body>
                    <Nav>
                        <Nav.Item eventKey="1" active icon={<DashboardIcon />}>
                            Dashboard
                        </Nav.Item>
                        <Nav.Menu
                            eventKey="3"
                            trigger="hover"
                            title="Station"
                            icon={<MagicIcon />}
                            placement="rightStart"
                        >
                            <Nav.Item eventKey="3-1">Maintance</Nav.Item>
                            <Nav.Item eventKey="3-2">Station Profile</Nav.Item>
                           
                        </Nav.Menu>
                        <Nav.Menu
                            eventKey="4"
                            trigger="hover"
                            title="Users"
                            icon={<GroupIcon />}
                            placement="rightStart"
                        >
                            <Nav.Item eventKey="4-1">Register Users </Nav.Item>
                            <Nav.Item eventKey="4-2">New User</Nav.Item>
                        
                        </Nav.Menu>
                        <Nav.Item eventKey="2" icon={<GroupIcon />}>
                          Billing
                        </Nav.Item>
                        <Nav.Item eventKey="2" icon={<GroupIcon />}>
                          Account
                        </Nav.Item>
                        <Nav.Item eventKey="2" icon={<GroupIcon />}>
                          Map
                        </Nav.Item>
                        <Nav.Item eventKey="2" icon={<GroupIcon />}>
                          Card
                        </Nav.Item>
                        <Nav.Item eventKey="2" icon={<GroupIcon />}>
                        <Link to="/form" style={{ textDecoration: 'none', color: '#575757' }}>Form</Link>
                        </Nav.Item>
                        <Nav.Item eventKey="2"  icon={ <GroupIcon />}>
                        <Link to="/table" style={{ textDecoration: 'none', color: '#575757' }}>Table</Link>
                        </Nav.Item>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
            <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
        </Sidebar>


    );
};

export default App