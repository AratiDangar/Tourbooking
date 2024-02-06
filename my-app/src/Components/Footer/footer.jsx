import React from 'react'
import './footer.css'
import { Container,Row,Col,ListGroup,ListGroupItem} from 'reactstrap'
import {Link} from 'react-router-dom'
import logo from '../../assets/images/logo.png'


const quick_links=[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'#',
    display:'About'
  },
  {
    path:'/tours',
    display:'Tours'
  },

];
const quick_links2=[
  {
    path:'/gallery',
    display:'Gallery'
  },
  {
    path:'/login',
    display:'Login'
  },
  {
    path:'/register',
    display:'Register'
  },

]
const footer = () => {
  return <section className='footer'>
    <Container>
      <Row>
        <Col lg='3'>
<div className="logo">
  <img src={logo} alt="" />
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
  <div className="social_icons d-flex align-items-center gap-4">
<span>
  <Link to='#'><i class="ri-youtube-line"></i></Link>
</span>
<span>
  <Link to='#'><i class="ri-github-fill"></i></Link>
</span>
<span>
  <Link to='#'><i class="ri-facebook-circle-line"></i></Link>
</span>
<span>
  <Link to='#'><i class="ri-instagram-line"></i></Link>
</span>
  </div>
</div>
        </Col>
        <Col lg='3'>
          <h5 className="footer_link-title">Discover</h5>

          <ListGroup className='footer_quick-links'>
            {
              quick_links.map((item,index)=>(
                <ListGroupItem key={index} className='border-0 pt-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
        
        </Col>
        <Col lg='3'>
          <h5 className="footer_link-title">Quick Links</h5>

          <ListGroup className='footer_quick-links'>
            {
              quick_links2.map((item,index)=>(
                <ListGroupItem key={index} className='border-0 pt-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
        
        </Col>
        <Col lg='3'>
          <h5 className="footer_link-title">Contact</h5>

          <ListGroup className='footer_quick-links'>
            
                <ListGroupItem  className='border-0 ps-0 d-flex align-items-center gap-3'>
              <h6 className='mb-0 d-flex align-items-center gap-2'>
                <span>
                  <i class="ri-map-pin-line"></i>
                </span>
                Address:
              </h6>
              <p className='mb-0'>Gujrat, India</p>
                </ListGroupItem>
                <ListGroupItem  className='border-0 ps-0 d-flex align-items-center gap-3'>
              <h6 className='mb-0 d-flex align-items-center gap-2'>
                <span>
                  <i class="ri-mail-line"></i>
                </span>
                Email:
              </h6>
              <p className='mb-0'>aratidangar65@gmail.com</p>
                </ListGroupItem>
                <ListGroupItem  className='border-0 ps-0 d-flex align-items-center gap-3'>
              <h6 className='mb-0 d-flex align-items-center gap-2'>
                <span>
                  <i class="ri-phone-fill"></i>
                </span>
                Phone:
              </h6>
              <p className='mb-0'>+0112349654</p>
                </ListGroupItem>
            
          </ListGroup>
        
        </Col>
      </Row>
    </Container>

  </section>
}

export default footer
