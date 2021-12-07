import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "reactstrap";
import axios from "axios";
import FormInput from "components/Elements/FormInput";
import Button from "components/Elements/Button";
import AlertMessage from "components/AlertMessage";
import {scrollToPosition} from "../../utils/functions";

const MediationForm = (props) => {

    const {date} = props;

    // Data
    const contactForm = [
        {
            name: 'first_name',
            type: 'text',
            label: 'First Name',
            placeholder: 'Adam',
            errorMessage: 'stop it'
        },
        {
            name: 'last_name',
            type: 'text',
            label: 'Last Name',
            placeholder: 'Smith'
        },
        {
            name: 'telephone',
            type: 'number',
            label: 'Telephone',
            placeholder: '***********'
        },
        {
            name: 'email',
            type: 'email',
            label: 'Email',
            placeholder: 'adam.smith@gmail.com'
        }
    ];
    const currentDate = new Date().toLocaleDateString('en-GB');

    // State
    const [checkError, setCheckError] = useState(false);
    const [errorActive, setErrorActive] = useState(false);
    const [failedToSend, setFailedToSend] = useState(true);
    const [success, setSuccess] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        first_name: '',
        last_name: '',
        telephone: '',
        email: '',
        date: currentDate,
        session_date: date,
        mailing_list: false,
    });

    // Function
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowMessage(false)
        setFailedToSend(false);
        setLoading(false);
        setErrorActive(false);
        setSuccess(false);

        if (checkError) {
            setLoading(true);
            axios.post('/api/meditationSession', form)
                .then(data => {
                    setForm({
                        first_name: '',
                        last_name: '',
                        telephone: '',
                        email: '',
                        date: currentDate,
                        session_date: date,
                        mailing_list: false,
                    })
                    setShowMessage(true);
                    setFailedToSend(false);
                    setSuccess(true);
                    setLoading(false);
                    scrollToPosition('contact-form-message');
                    // console.log(data);
                })
                .catch(err => {
                    setShowMessage(true);
                    setLoading(false);
                    setSuccess(false);
                    setFailedToSend(true);
                    scrollToPosition('contact-form-message');
                    // console.log(err);
                })
        } else {
            setErrorActive(true);
            scrollToPosition('contact-form-form', 90);
        }
    }

    useEffect(() => {
        if (form.first_name.length === 0 ||
            form.last_name.length === 0 ||
            form.email.length === 0 ||
            form.telephone.length === 0) {
            setCheckError(false);
        } else {
            setCheckError(true);
        }
    }, [form]);

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="contact-form-form" id="contact-form-form">
            <Container className="contact-form" data-aos>
                <Row>
                    {contactForm.map((item, key) => <Col xs={12} sm={6} className="contact-form-each-input" key={`input-key-${key}`}>
                        <FormInput
                            form={form}
                            setForm={setForm}
                            name={item.name}
                            value={item.name}
                            type={item.type}
                            label={item.label}
                            placeholder={item.placeholder}
                            errorActive={errorActive}
                            loading={loading}
                        />
                    </Col>)}
                    <Col xs={12} className="contact-form-footer">
                        <FormInput
                            form={form}
                            setForm={setForm}
                            name="mailing_list"
                            value="mailing_list"
                            type="checkbox"
                            label="Add me to the mailing list."
                            placeholder="mailing_list"
                            errorActive={errorActive}
                            loading={loading}
                        />
                        <Button
                            type="submit"
                            loading={loading}
                        >
                            Submit
                        </Button>
                    </Col>
                    <Col xs={12} className="contact-form-message" id="contact-form-message">
                        {showMessage && <AlertMessage
                            success={success}
                            successMessage="Your position has been booked. An email with a zoom link has been sent to you with information about the session"
                            failed={failedToSend}
                        />}
                    </Col>
                </Row>
            </Container>
        </form>
    )
}

export default MediationForm;