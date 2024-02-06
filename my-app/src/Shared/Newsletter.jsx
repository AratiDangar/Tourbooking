import React from 'react'
import './newsletter.css'
import { Col, Container, Row } from 'reactstrap'
import femaleTourist from '../assets/images/ceo.png'
const Newsletter = () => {
  return <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
              <div className="newsletter_content">
                <h2>Subscribe now to get useful traveling information. </h2>
                <div className='newsletter_input'>
              <input type="email" name="" id=""placeholder='Enter your email' />
              <button className=" newsletter_btn">Subscribe</button>
              </div>
              <p>Feel free to reachout us for any query and get 
experiance to our website</p>
              </div>
            </Col>
            <Col lg='6'>
             <div className="newsletter_img">
                <img src={femaleTourist} alt="" />
             </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default Newsletter
