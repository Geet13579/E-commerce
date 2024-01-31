import React, { useEffect } from "react";
import '../App.css';
import '../container.less';
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../redux_toolkit/features/auth/authSlice";

import {
  Container,
  Content,
  Form,
  ButtonToolbar,
  Button,
  Panel,
  FlexboxGrid
} from 'rsuite';



let schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),
  password: yup.string().required("Password is Required"),
});
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });
  const authState = useSelector((state) => state);
console.log(formik)
  console.log(authState)
  const { user, isError, isSuccess, isLoading } = authState.auth;

  useEffect(() => {
    if (isSuccess) {
      navigate("/home");
    } else {
      navigate("");
    }
  }, [user, isError, isSuccess, isLoading,navigate]);
  
return (

  <div className="show-fake-browser login-page">
    <Container>
     
      <Content style={{marginTop:"5%"}}>
        <FlexboxGrid justify="center" >
          <FlexboxGrid.Item colspan={12} style={{ boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
            <Panel header={<h3>Login</h3>} bordered>
              <Form fluid onSubmit={formik.handleSubmit}>
                <Form.Group>
                  <Form.ControlLabel>Username or email address</Form.ControlLabel>
                  <Form.Control name="name" 
                  
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                  value={formik.values.email}/>
                </Form.Group>
                <Form.Group>
                  <Form.ControlLabel>Password</Form.ControlLabel>
                  <Form.Control name="password" type="password" autoComplete="off"
                   onChange={formik.handleChange("password")}
                   onBlur={formik.handleBlur("password")}
                   value={formik.values.password} />
                </Form.Group>
                <Form.Group>
                  <ButtonToolbar>
                    <Button appearance="primary" type="submit">Sign in</Button>
                    {/* <Button appearance="link">Forgot password?</Button>  */}
                  </ButtonToolbar>
                </Form.Group>
              </Form>
            </Panel>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Content>
    
    </Container>
  </div>
)

}

export default Login