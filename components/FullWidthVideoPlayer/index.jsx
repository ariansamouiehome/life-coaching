import React, {useState} from 'react';
import {Col, Container, Row} from "reactstrap";
import Button from "components/Elements/Button";

const FullWidthVideoPlayer = (props) => {

    const {title, hTag, iframeSrc, thumbnailImage, paddingTop, cta_href, cta_text, cta_target} = props

    const [play, setPlay] = useState(false);
    const src = play ? `${iframeSrc}&autoplay=1` : iframeSrc

    const playVideo = () => {
        setPlay(true);
    }

    const hTagOutput = () => {
        if (hTag) {
            if (hTag === 1) {
                return <h1 className="content-title" dangerouslySetInnerHTML={{ __html: title }} />
            }
            if (hTag === 3) {
                return <h3 className="content-title" dangerouslySetInnerHTML={{ __html: title }} />
            }
            if (hTag === 4) {
                return <h4 className="content-title" dangerouslySetInnerHTML={{ __html: title }} />
            }
            if (hTag === 5) {
                return <h5 className="content-title" dangerouslySetInnerHTML={{ __html: title }} />
            }
        } else {
            return <h2 className="content-title" dangerouslySetInnerHTML={{ __html: title }} />
        }
    }

    return (
        <Container className={`full-width-video-player ${paddingTop ? 'padding-top' : ''}`} fluid data-aos>
            <Container>
                <Row>
                    {title && <Col xs={12} className="full-width-video-player-header">
                        {hTagOutput()}
                    </Col>}
                    <Col xs={12} className="full-width-video-player-inner-content">
                        <div className="iframe-wrapper">
                            <iframe src={src}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen/>
                            {thumbnailImage && <button
                                className={`iframe-play-overlay-button ${play ? 'active' : ''}`}
                                onClick={playVideo}
                            >
                                <div className="thumbnail-image" style={{backgroundImage: `url(${thumbnailImage})`}}/>
                                <span className="play-image"/>
                            </button>}
                        </div>
                    </Col>
                    {cta_href && <Col xs={12} className="full-width-video-player-button-content">
                        <Button
                            target={cta_target}
                            href={cta_href}
                            className="meetUp"
                        >{cta_text}</Button>
                    </Col>}
                </Row>
            </Container>
        </Container>
    )
}

export default FullWidthVideoPlayer;