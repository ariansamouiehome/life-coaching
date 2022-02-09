import React from 'react';
import {Col, Container, Row} from "reactstrap";
import Button from "components/Elements/Button";

const BackImageFloatingContent = (props) => {

    const {
        backgroundImage,
        hTag,
        title,
        href,
        cta_text,
        onClick,
        curveBottom,
        center,
        large,
    } = props;

    const ctaOutput = () => {
        if (href) {
            return (
                <Button
                    href={href}
                    onClick={onClick}
                >{cta_text}</Button>
            )
        } else {
            return (
                <Button
                    onClick={onClick}
                >{cta_text}</Button>
            )
        }
    }

    const hTagOutput = () => {
        if (hTag) {
            if (hTag === 2) {
                return <h2 className={`content-title heading-one heading-mark ${!center ? 'mark-left' : ''}`} dangerouslySetInnerHTML={{ __html: title }} />
            }
            if (hTag === 1) {
                return <h1 className={`content-title heading-one heading-mark ${!center ? 'mark-left' : ''}`} dangerouslySetInnerHTML={{ __html: title }} />
            }
            if (hTag === 4) {
                return <h4 className={`content-title heading-one heading-mark ${!center ? 'mark-left' : ''}`} dangerouslySetInnerHTML={{ __html: title }} />
            }
            if (hTag === 5) {
                return <h5 className={`content-title heading-one heading-mark ${!center ? 'mark-left' : ''}`} dangerouslySetInnerHTML={{ __html: title }} />
            }
        } else {
            return <h3 className={`content-title heading-one heading-mark ${!center ? 'mark-left' : ''}`} dangerouslySetInnerHTML={{ __html: title }} />
        }
    }

    return (
        <Container fluid className={`back-image-floating-content ${curveBottom ? 'curve-bottom' : ''} ${center ? 'center' : ''}`} data-aos>
            <Col xs={12} className="inner-image" style={{backgroundImage: `url(${backgroundImage})`}}/>
            <Container>
                <Row>
                    <Col xs={12} xl={!large && 10} className={`inner-content `}>
                        {title && hTagOutput()}
                        {props.children}
                        {cta_text && <div className="theme-button-wrapper">{ctaOutput()}</div>}
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default BackImageFloatingContent;