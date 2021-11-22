import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "reactstrap";
import axios from "axios";
import FormInput from "components/Elements/FormInput";
import Button from "components/Elements/Button";
import Clickable from "components/Elements/Clickable";
import AlertMessage from "components/AlertMessage";

const LoginRegisterForm = () => {

    // Data
    const loginForm = [
        {
            name: 'email',
            type: 'email',
            label: 'Email',
            placeholder: 'adam.smith@gmail.com'
        },
        {
            name: 'password',
            type: 'password',
            label: 'Password',
            placeholder: '***********'
        },
    ];
    const registerForm = [
        {
            name: 'first_name',
            type: 'text',
            label: 'First Name',
            placeholder: 'Adam'
        },
        {
            name: 'last_name',
            type: 'text',
            label: 'Last Name',
            placeholder: 'Smith'
        },
        {
            name: 'email',
            type: 'email',
            label: 'Email',
            placeholder: 'adam.smith@gmail.com'
        },
        {
            name: 'password',
            type: 'password',
            label: 'Password',
            placeholder: '***********'
        },
        {
            name: 'confirm_password',
            type: 'password',
            label: 'Confirm Password',
            placeholder: '***********'
        },
    ];
    const forgotForm = {
        name: 'email',
        type: 'email',
        label: 'Email',
        placeholder: 'adam.smith@gmail.com'
    };

    // State
    const [tabActive, setTabActive] = useState(1);
    const [loginFormState, setLoginFormState] = useState({
        email: '',
        password: ''
    });
    const [registerFormState, setRegisterFormState] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: '',
    });
    const [forgotFormState, setForgotFormState] = useState({
        email: '',
    });
    const [loading, setLoading] = useState(false);



    // Login
    const [failedLogin, setFailedLogin] = useState(false);
    const [checkLoginError, setCheckLoginError] = useState(false);
    const [loginError, setLoginError] = useState(false);


    // Function

    // Login
    const onSubmitLogin = (e) => {
        e.preventDefault();
        setLoginError(false);
        setFailedLogin(false);

        if (checkLoginError) {
            setLoading(true);
            axios.post('/loginUrl', loginFormState)
                .then(data => {
                    setLoading(false);
                    // console.log(data);
                })
                .catch(err => {
                    setLoading(false);
                    setFailedLogin(true);
                    // console.log(err);
                })
        } else {
            setLoginError(true);
        }
    };






    // useEffects

    // Login Check
    useEffect(() => {
        if (loginFormState.email.length === 0 ||
            loginFormState.password.length === 0) {
            setCheckLoginError(false);
        } else {
            setCheckLoginError(true);
        }
    }, [loginFormState]);


    return (
        <Container fluid className="login-register-form" data-aos>
            <Row>
                <Col xs={12} className="login-form-hold">
                    <ul className="tab-nav">
                        <li className="nav-items">
                            <Button
                                className={`item-buttons ${tabActive === 1 ? 'active' : ''}`}
                                onClick={() => setTabActive(1)}
                                loading={loading}
                            >Login</Button>
                        </li>
                        <li className="nav-items">
                            <Button
                                className={`item-buttons ${tabActive === 2 ? 'active' : ''}`}
                                onClick={() => setTabActive(2)}
                                loading={loading}
                            >Register</Button>
                        </li>
                    </ul>

                    {tabActive === 1 && <form className="tab-section" onSubmit={(e) => onSubmitLogin(e)}>
                        <h1 className="heading-one">Login</h1>
                        {loginForm.map((item, key) =>
                            <FormInput
                                key={`input-key-${key}`}
                                form={loginFormState}
                                setForm={setLoginFormState}
                                name={item.name}
                                value={item.name}
                                type={item.type}
                                label={item.label}
                                placeholder={item.placeholder}
                                errorActive={loginError}
                                loading={loading}
                            />)}

                        {failedLogin && <span className="submit-error-message">Those details didn't match. Please try again. <br />If you're having issues logging in, please <Clickable href="/book-a-call">contact us</Clickable></span>}

                        <Clickable onClick={() => setTabActive(3)} loading={loading}>Forgotten Password</Clickable>
                        <Button
                            type="submit"
                            loading={loading}
                        >Login</Button>
                    </form>}

                    {tabActive === 2 && <div className="tab-section">
                        <h1 className="heading-one">Register</h1>
                        <p className="body-copy">Please fill out all fields to register.</p>
                        {registerForm.map((item, key) =>
                            <FormInput
                                key={`input-key-${key}`}
                                form={registerFormState}
                                setForm={setRegisterFormState}
                                name={item.name}
                                value={item.name}
                                type={item.type}
                                label={item.label}
                                placeholder={item.placeholder}
                                // errorActive={errorActive}
                                // loading={loading}
                            />)}
                        <Button>Register</Button>
                    </div>}

                    {tabActive === 3 && <div className="tab-section">
                        <h1 className="heading-one">Forgotten Password</h1>
                        <p className="body-copy">Enter your email address and we will send you a link to change your password.</p>
                        <FormInput
                            form={forgotFormState}
                            setForm={setForgotFormState}
                            name={forgotForm.name}
                            value={forgotForm.name}
                            type={forgotForm.type}
                            label={forgotForm.label}
                            placeholder={forgotForm.placeholder}
                            // errorActive={errorActive}
                            // loading={loading}
                        />
                        <Clickable onClick={() => setTabActive(1)}>Back to Login</Clickable>
                        <Button>Send email</Button>
                    </div>}
                </Col>


                {/*<Col xs={12} className="contact-form-message" id="contact-form-message">*/}
                {/*    {showMessage && <AlertMessage*/}
                {/*        success={success}*/}
                {/*        failed={failedToSend}*/}
                {/*    />}*/}
                {/*</Col>*/}
            </Row>
        </Container>
    )
}

export default LoginRegisterForm;