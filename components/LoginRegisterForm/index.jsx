import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "reactstrap";
import axios from "axios";
import FormInput from "components/Elements/FormInput";
import Button from "components/Elements/Button";
import Clickable from "components/Elements/Clickable";

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

    // Forgot
    const [checkForgotError, setCheckForgotError] = useState(false);
    const [forgotError, setForgotError] = useState(false);
    const [forgotSent, setForgotSent] = useState(false);

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

    // Forgot
    const onSubmitForgot = (e) => {
        e.preventDefault();
        setForgotError(false);

        if (checkForgotError) {
            setLoading(true);
            axios.post('/ForgotUrl', forgotFormState)
                .then(data => {
                    setLoading(false);
                    setForgotSent(true);
                    setForgotFormState({
                        email: ''
                    })
                    // console.log(data);
                })
                .catch(err => {
                    setLoading(false);
                    setForgotSent(true);
                    setForgotFormState({
                        email: ''
                    })
                    // console.log(err);
                })
        } else {
            setForgotError(true);
        }
    };

    // useEffects
    useEffect(() => {
        if (tabActive === 1 ||
            tabActive === 2) {
            setForgotSent(true);
        } else {
            setForgotSent(false);
        }
    }, [tabActive]);

    // Login Check
    useEffect(() => {
        if (loginFormState.email.length === 0 ||
            loginFormState.password.length === 0) {
            setCheckLoginError(false);
        } else {
            setCheckLoginError(true);
        }
    }, [loginFormState]);

    // Forgot Check
    useEffect(() => {
        if (forgotFormState.email.length === 0) {
            setCheckForgotError(false);
        } else {
            setCheckForgotError(true);
        }
    }, [forgotFormState]);


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
                        {failedLogin && <span className="submit-message error">Those details didn't match. Please try again. <br />If you're having issues logging in, please <Clickable href="/book-a-call">contact us</Clickable></span>}
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

                    {tabActive === 3 && <form className="tab-section" onSubmit={(e) => onSubmitForgot(e)}>
                        <h1 className="heading-one">Forgotten Password</h1>
                        <p className="body-copy">Enter your email address and we will send you a link to change your password.</p>
                        {!forgotSent && <FormInput
                            form={forgotFormState}
                            setForm={setForgotFormState}
                            name={forgotForm.name}
                            value={forgotForm.name}
                            type={forgotForm.type}
                            label={forgotForm.label}
                            placeholder={forgotForm.placeholder}
                            errorActive={forgotError}
                            loading={loading}
                        />}
                        {forgotSent && <span className="submit-message success mb-5">An email with a link to change your password has been sent to you.</span>}
                        <Clickable onClick={() => setTabActive(1)}>Back to Login</Clickable>
                        <Button
                            type="submit"
                        >Send email</Button>
                    </form>}
                </Col>
            </Row>
        </Container>
    )
}

export default LoginRegisterForm;