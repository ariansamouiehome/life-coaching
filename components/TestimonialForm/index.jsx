import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "reactstrap";
import axios from "axios";
import FormInput from "components/Elements/FormInput";
import Button from "components/Elements/Button";
import AlertMessage from "components/AlertMessage";
import {scrollToPosition} from "../../utils/functions";

const TestimonialForm = (props) => {

    const {subject} = props;

    // State
    const [checkError, setCheckError] = useState(false);
    const [errorActive, setErrorActive] = useState(false);
    const [failedToSend, setFailedToSend] = useState(true);
    const [success, setSuccess] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        testimonialName: '',
        testimonialMessage: '',
        subject: subject,
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
            axios.post('/api/addToTestimonial', form)
                .then(data => {
                    setForm({
                        testimonialName: '',
                        testimonialMessage: '',
                        subject: subject,
                    })
                    setShowMessage(true);
                    setFailedToSend(false);
                    setSuccess(true);
                    setLoading(false);
                    // console.log(data);
                })
                .catch(err => {
                    setShowMessage(true);
                    setLoading(false);
                    setSuccess(false);
                    setFailedToSend(true);
                    // console.log(err);
                })
        } else {
            setErrorActive(true);
            scrollToPosition('contact-form-form', 90);
        }
    }

    useEffect(() => {
        if (form.testimonialName.length === 0 ||
            form.testimonialMessage.length === 0) {
            setCheckError(false);
        } else {
            setCheckError(true);
        }
    }, [form]);

    useEffect(() => {
        if (showMessage) {
            setTimeout(() => {
                setShowMessage(false);
            }, 8000)
        }
    },[showMessage]);

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="contact-form-form mailing-list" id="contact-form-form">
            <Container className="contact-form" style={{padding: '15px 0 0'}}>
                <Row>
                    {!showMessage && <> <Col xs={12} className="contact-form-each-input">
                        <FormInput
                            form={form}
                            setForm={setForm}
                            name="testimonialName"
                            value="testimonialName"
                            type="text"
                            label="Full Name"
                            placeholder="Adam Smith"
                            errorActive={errorActive}
                            loading={loading}
                        />
                    </Col>

                    <Col xs={12} className="contact-form-each-input">
                        <FormInput
                            form={form}
                            setForm={setForm}
                            name="testimonialMessage"
                            value="testimonialMessage"
                            type="textarea"
                            label="Message"
                            placeholder="How did you find the meditation experience?"
                            errorActive={errorActive}
                            loading={loading}
                        />
                    </Col>
                    <Col xs={12} className="contact-form-footer">
                        <Button
                            type="submit"
                            loading={loading}
                        >
                            Submit
                        </Button>
                    </Col>
                    </>}
                    <Col xs={12}  className="contact-form-message" id="contact-form-message">
                        {showMessage && <AlertMessage
                            success={success}
                            successMessage="Thank you. Your testimonial has been submitted."
                            failed={failedToSend}
                        />}
                    </Col>
                </Row>
            </Container>
        </form>
    )
}

export default TestimonialForm;