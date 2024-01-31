import React from 'react';
import { Form, ButtonToolbar, Button, Input, Container } from 'rsuite';
import HeaderPage from '../header.js';
import SidebarPage from '../sidebar.js';


const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

function FormPage() {
    return (
        <Container>
            <SidebarPage />

            <Container>
                <HeaderPage />
                <Container style={{ display: "flex", justifyContent: "center", flexDirection: "row" }}>
                    <Form fluid style={{ width: "60%", backgroundColor: "#fff", borderRadius: "0.5rem", boxShadow: "0 4px 24px 0 rgba(34,41,47,.1)", padding: "15px" }}>
                        <h6 style={{ marginBottom: "25px", textAlign: "center" }}>Form</h6>

                        <Form.Group controlId="name-1">
                            <Form.ControlLabel>Username</Form.ControlLabel>
                            <Form.Control name="name" />
                            {/* <Form.HelpText>Required</Form.HelpText> */}
                        </Form.Group>
                        <Form.Group controlId="email-1">
                            <Form.ControlLabel>Email</Form.ControlLabel>
                            <Form.Control name="email" type="email" />
                            {/* <Form.HelpText>Required</Form.HelpText> */}
                        </Form.Group>
                        <Form.Group controlId="password-1">
                            <Form.ControlLabel>Password</Form.ControlLabel>
                            <Form.Control name="password" type="password" autoComplete="off" />
                        </Form.Group>
                        <Form.Group controlId="textarea-1">
                            <Form.ControlLabel>Textarea</Form.ControlLabel>
                            <Form.Control rows={5} name="textarea" accepter={Textarea} />
                        </Form.Group>

                        <Form.Group>
                            <ButtonToolbar>
                                <Button appearance="primary">Submit</Button>
                                <Button appearance="default">Cancel</Button>
                            </ButtonToolbar>
                        </Form.Group>
                    </Form>

                </Container>

            </Container>
        </Container>
    );
}

export default FormPage