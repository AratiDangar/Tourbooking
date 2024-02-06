import React from 'react'
import "../styles/home.css"
import Gallery from '../Components/image-gallery/Gallery'
import {Container,Row,Col} from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from '../Shared/Subtitle'
import Searchbar from '../Shared/Searchbar'
import ServiceList from '../Services/ServiceList'
import FeaturedTourList from '../Components/Featured-tour/FeaturedTourList'
import experienceImg from '../assets/images/travel.png'
import Testimonial from '../Components/Tesitmonial/Testimonial'
import Newsletter from '../Shared/Newsletter'
const Home = () => {
  return (
    <>
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero_content">
              <div className="hero_subtitle d-flex align-items-center ">
        <Subtitle className="service_subtitle" subtitle={'Know Befor You Go'}/>
        <img src={worldImg} alt="img" />
              </div>
              <h1>
                Traveling opens the door to creating {""}
              <span className='highlight'>memories</span>
              </h1>
              <p>
              Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip.[1] Travel can also include relatively short stays between successive movements, as in the case of tourism.
              </p>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero_img-box">
              <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero_img-box hero_video-box mt-4">
              <video src={heroVideo} alt="" controls autoPlay={true} />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero_img-box mt-5">
              <img src={heroImg02} alt="" />
            </div>
          </Col>
          <Searchbar/>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='3'>
           <h5 className="service_subtitle">What we serve</h5>
           <h2 className='service_title'>We offer our best services</h2> 
          </Col>
          <ServiceList/>
        </Row>
      </Container>
    </section>
    {/*=====featured tour==== */}

    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <Subtitle subtitle={'Explore'}/>
            <h2 className="f-title">Our featured tours</h2>
          </Col>
          <FeaturedTourList/>
        </Row>
      </Container>
    </section>
     {/*=====experience section==== */}

    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience_content">
              <Subtitle subtitle={'Experience'}/>
              <h2>With our all experience<br/>we will serve you</h2>
              <p>In the travel industry, customer experience is particularly important because travel is a high-touch, emotional experience. People often save up for months or even years to go on a trip, and they want to ensure that they have a great experience every step of the way.</p>

            </div>
            <div className="counter_wrapper d-flex align-items-center gap-5">
        <div className="counter_box">
          <span>12k+</span>
          <h6>Successful Trip</h6>
        </div>
        <div className="counter_box">
          <span>2k+</span>
          <h6>Regular Clients</h6>
        </div>
        <div className="counter_box">
          <span>15 </span>
          <h6>Years experience</h6>
        </div>
            </div>
          </Col>
          <Col lg='6'>
       <div className="experienceimg">
        <img src={experienceImg} alt="" />
       </div>

          </Col>
        </Row>
      </Container>
    </section>

    {/*======Galary section===== */}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Gallery'}/>
            <h2 className="gallery_title">
              Visit our customers tour gallery
            </h2>
          </Col>
          <Col lg='12'>
        <Gallery/>
          </Col>
        </Row>
      </Container>
    </section>
    {/*=====testinomial section */}
    <section>
    <Container>
      <Row>
        <Col lg='12'>
          <Subtitle subtitle={'Fans Love'}/>
          <h2 className="testimonial_title">
            What our fans saying about us
          </h2>
        </Col>
        <Col lg='12'>
        <Testimonial/>
        </Col>
      </Row>
    </Container>
    </section>
    <Newsletter/>
    </>
  )
}

export default Home
