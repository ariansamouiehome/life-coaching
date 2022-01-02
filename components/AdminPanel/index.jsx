import React, {useState} from 'react';
import {Col, Container, Row} from "reactstrap";
import FormInput from "components/Elements/FormInput";
import Button from "components/Elements/Button";
import axios from "axios";
import Link from "next/link";
import {globalMailingList} from "../../utils/mailingList";

const AdminPanel = () => {

    // States
    const [showSureButton, setShowSureButton] = useState(false);
    const [success, setSuccess] = useState(false);
    const [form, setForm] = useState({
        password: ''
    });
    const [mailingList, setMailingList] = useState({
        subject: '',
        title: '',
        bodyCopy: '',
        href: '',
    });

    // Data
    const password = 'qwerty';

    // Functions
    const handleSubmit = () => {
        if (form.password === password) {
            setSuccess(true);
        }
    }

    const sendMailingList = () => {
        // for (let i = 0; i < globalMailingList.length; i++) {
        //     axios.post('/api/mailingList', {email:globalMailingList[i]})
        //         .then(data => {
        //             console.log(data);
        //         })
        //         .catch(err => {
        //             console.log(err);
        //         })
        // }
    };

    return (
        <Container fluid className="admin-panel">
            <Row>
                {!success && <Col xs={12} className="admin-panel-login">
                    <form onSubmit={handleSubmit} className="admin-login">
                        <FormInput
                            form={form}
                            setForm={setForm}
                            name="password"
                            value="password"
                            type="password"
                            label="Password"
                            placeholder="***********"
                        />
                        <Button
                        >Submit</Button>
                    </form>
                </Col>}
                {success && <>
                    <Col xs={12} className="admin-panel-nav">
                        <Link href="/">
                            <a className="admin-logo">
                                <img src="/images/logo-single.svg" alt="Arian Samouie Life Coach"
                                     className="admin-logo-image"/>
                            </a>
                        </Link>
                    </Col>
                    <Col xs={12} className="admin-panel-login">
                        <div className="mailing-list-form-wrapper">
                            {/*<FormInput*/}
                            {/*    form={mailingList}*/}
                            {/*    setForm={setMailingList}*/}
                            {/*    name="subject"*/}
                            {/*    value="subject"*/}
                            {/*    type="text"*/}
                            {/*    label="Subject"*/}
                            {/*    placeholder="Email subject"*/}
                            {/*/>*/}
                            {/*<FormInput*/}
                            {/*    form={mailingList}*/}
                            {/*    setForm={setMailingList}*/}
                            {/*    name="bodyCopy"*/}
                            {/*    value="bodyCopy"*/}
                            {/*    type="textarea"*/}
                            {/*    label="Copy"*/}
                            {/*    placeholder="This has to be in html format in order to add (new lines - <p>)"*/}
                            {/*/>*/}
                            <Button
                                onClick={() => setShowSureButton(!showSureButton)}
                            >
                                {showSureButton ? 'go back' : 'Send Emails'}
                            </Button>
                            {showSureButton &&
                            <Button
                                onClick={() => sendMailingList()} style={{marginTop: '15px'}}
                                danger
                            >
                                confirm send emails?
                            </Button>}
                        </div>
                    </Col>
                </>}
            </Row>
        </Container>
    )
}

export default AdminPanel;