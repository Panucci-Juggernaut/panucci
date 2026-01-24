import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    const currentYear = new Date().getFullYear();

   return (
     <footer className="bg-dark text-light mt-5">
         <Container>
            <Row className="py-4">
                <Col md={3} sm={6} className="mb-4">
                    <h5 className="mb-3">Panucci</h5>
                    <p >
                        Your trusted e-commerce destination. Quality products, 
                        exceptional service, and seamless shopping experience.
                    </p>
                </Col>
                <Col md={3} sm={6} className="mb-4">
                    <h5 className="mb-3">Quick Links</h5>
                    <ul className="list-unstyled">
                        <li className="mb-2">
                            <Link to="/" className="text-light text-decoration-none">
                                Home
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/cart" className="text-light text-decoration-none">
                                Shopping Cart
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/login" className="text-light text-decoration-none">
                                Sign In
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/register" className="text-light text-decoration-none">
                                Register
                            </Link>
                        </li>
                    </ul>
                </Col>
                <Col md={3} sm={6} className="mb-4">
                    <h5 className="mb-3">Customer Service</h5>
                    <ul className="list-unstyled">
                        <li className="mb-2">
                            <Link to="/" className="text-light text-decoration-none">
                                Contact Us
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/" className="text-light text-decoration-none">
                                Shipping Info
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/" className="text-light text-decoration-none">
                                Returns & Exchanges
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/" className="text-light text-decoration-none">
                                FAQ
                            </Link>
                        </li>
                    </ul>
                </Col>
                <Col md={3} sm={6} className="mb-4">
                    <h5 className="mb-3">Connect With Us</h5>
                    <div className="d-flex gap-3">
                        <a href="/" target="_blank" rel="noopener noreferrer" 
                           className="text-light" style={{ fontSize: '1.5rem' }}>
                            <FaFacebook />
                        </a>
                        <a href="/" target="_blank" rel="noopener noreferrer" 
                           className="text-light" style={{ fontSize: '1.5rem' }}>
                            <FaTwitter />
                        </a>
                        <a href="/" target="_blank" rel="noopener noreferrer" 
                           className="text-light" style={{ fontSize: '1.5rem' }}>
                            <FaInstagram />
                        </a>
                        <a href="/" target="_blank" rel="noopener noreferrer" 
                           className="text-light" style={{ fontSize: '1.5rem' }}>
                            <FaLinkedin />
                        </a>
                    </div>
                </Col>
            </Row>
            <hr className="bg-light" />
            <Row>
                <Col md={6} className="text-center text-md-start mb-2 mb-md-0">
                    <p className="mb-0 ">
                        &copy; {currentYear} Panucci. All rights reserved.
                    </p>
                </Col>
                <Col md={6} className="text-center text-md-end">
                    <Link to="/" className=" text-decoration-none me-3">
                        Privacy Policy
                    </Link>
                    <Link to="/" className=" text-decoration-none">
                        Terms of Service
                    </Link>
                </Col>
            </Row>
         </Container> 
     </footer>
   )
 }
 
 export default Footer