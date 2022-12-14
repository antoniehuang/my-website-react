import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const AboutMe = () => {
    return (
        <Container id='about-me' className='shadow-lg rounded p-3 m-6'>
            <div className='post m-3'>
                <Row>
                    <Col>
                        <h1><span class="font-wight-bold">Antonie </span>Yu-Chi Huang</h1>
                        <p>Full Stack Deep Learning Developer</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <article>
                            <p>Ooh Hello! My name is Yu-Chi Huang, but I go by Antonie most of the time.</p>
                            <p>I recently graduated from The University of Birmingham with a degree in Artificial
                                Intelligence
                                and
                                Computer
                                Science. My interest in AI focuses on thinking about how computers can simulate
                                imaginations,
                                generate
                                synthetic samples and the ways to use simulations and synthetic samples to better train our
                                AI
                                agents.
                            </p>
                            <p>You can connect with me by clicking the icons below!</p>
                            <div className='contact-info'>
                                <div id='icons'>
                                    <a href="https://www.linkedin.com/in/antonie-yu-chi-huang/" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedinIn size='2.5em'
                                            color='#999999'
                                            onMouseOver={({ target }) => target.style.color = "plum"}
                                            onMouseOut={({ target }) => target.style.color = "#999999"} />
                                    </a>
                                    <a href="https://www.github.com/antoniehuang" target="_blank" rel="noopener noreferrer">
                                        <FaGithub size='2.5em'
                                            color='#999999'
                                            onMouseOver={({ target }) => target.style.color = "plum"}
                                            onMouseOut={({ target }) => target.style.color = "#999999"} />
                                    </a>
                                    <a href="https://twitter.com/antoniehuang" target="_blank" rel="noopener noreferrer">
                                        <FaTwitter size='2.5em'
                                            color='#999999'
                                            onMouseOver={({ target }) => target.style.color = "plum"}
                                            onMouseOut={({ target }) => target.style.color = "#999999"} />
                                    </a>
                                </div>
                                <div class='short-contact-info'>
                                    <span>or email me at @</span>
                                    <span id='email'> antonieyuchi@gmail.com</span>
                                </div>
                            </div>
                        </article>
                    </Col>
                    <Col className='col-md-auto d-flex justify-content-center'>
                        <Image src="img/prof_pic.jpeg" id="prof-pic" fluid rounded
                            alt="An image of myself with a tucan!"></Image>
                    </Col>
                    <Row>

                    </Row>
                </Row>
            </div>
        </Container >
    );
}

export default AboutMe;