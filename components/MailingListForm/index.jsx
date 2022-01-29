import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "reactstrap";
import axios from "axios";
import FormInput from "components/Elements/FormInput";
import Button from "components/Elements/Button";
import AlertMessage from "components/AlertMessage";
import {scrollToPosition} from "../../utils/functions";

const MailingListForm = (props) => {

    const {sessionDate} = props;

    // Data
    const contactForm = [
        {
            name: 'mailingListName',
            type: 'text',
            label: 'Name',
            placeholder: 'Adam Smith',
            errorMessage: 'stop it'
        },
        {
            name: 'mailingListEmail',
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
        mailingListName: '',
        mailingListEmail: '',
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
            axios.post('/api/addToMailingList', form)
                .then(data => {
                    setForm({
                        mailingListName: '',
                        mailingListEmail: '',
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
        if (form.mailingListName.length === 0 ||
            form.mailingListEmail.length === 0) {
            setCheckError(false);
        } else {
            setCheckError(true);
        }
    }, [form]);

    useEffect(() => {
        if (showMessage) {
            setTimeout(() => {
                setShowMessage(false);
            }, 10000)
        }
    },[showMessage]);

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="contact-form-form mailing-list" id="contact-form-form">
            <Container className="contact-form" data-aos>
                <Row>
                    {contactForm.map((item, key) => <Col xs={12} md={5} className="contact-form-each-input" key={`input-key-${key}`}>
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
                    <Col xs={12} md={2} className="contact-form-footer">
                        <Button
                            type="submit"
                            loading={loading}
                        >
                            Submit
                        </Button>
                    </Col>
                    <Col xs={12}  className="contact-form-message" id="contact-form-message">
                        {showMessage && <AlertMessage
                            success={success}
                            successMessage="You have been added to the mailing list."
                            failed={failedToSend}
                        />}
                    </Col>
                </Row>
            </Container>
        </form>
    )
}

export default MailingListForm;