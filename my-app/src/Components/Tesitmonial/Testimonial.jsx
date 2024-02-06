import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
const Testimonial = () => {

    const settings={

        dots:true,
        infinite: true,
        speed: 1000,
        autoplay:true,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint:992,
                setting:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinity:true,
                    dots:true,
            },
        },
        { breakpoint:992,
            setting:{
                slidesToShow:1,
                slidesToScroll:1,
            },
        },
        ]

    }
  return <Slider {...settings}>
    <div className="testimonial py-4 px-3">
     <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos molestias deserunt quaerat accusamus adipisci cum cupiditate quo! Doloribus modi sit accusantium soluta mollitia ex culpa nemo nobis aliquid voluptas?
     </p>

     <div className="d-flex align-items-center gap-4 mt-3">
       
       
        <img src={ava01} className='w-25 h-25 rounded-2' alt="" />

        <div>
            <h6 className='mb-0 mt-3'>John Deo</h6>
            <p>Customer</p>
        </div>
     </div>
    </div>
    <div className="testimonial py-4 px-3">
     <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos molestias deserunt quaerat accusamus adipisci cum cupiditate quo! Doloribus modi sit accusantium soluta mollitia ex culpa nemo nobis aliquid voluptas?
     </p>

     <div className="d-flex align-items-center gap-4 mt-3">
       
       
        <img src={ava02} className='w-25 h-25 rounded-2' alt="" />

        <div>
            <h6 className='mb-0 mt-3'>Lia Franklin</h6>
            <p>Customer</p>
        </div>
     </div>
    </div>
    <div className="testimonial py-4 px-3">
     <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos molestias deserunt quaerat accusamus adipisci cum cupiditate quo! Doloribus modi sit accusantium soluta mollitia ex culpa nemo nobis aliquid voluptas?
     </p>

     <div className="d-flex align-items-center gap-4 mt-3">
       
       
        <img src={ava03} className='w-25 h-25 rounded-2' alt="" />

        <div>
            <h6 className='mb-0 mt-3'>John Deo</h6>
            <p>Customer</p>
        </div>
     </div>
    </div>
    <div className="testimonial py-4 px-3">
     <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos molestias deserunt quaerat accusamus adipisci cum cupiditate quo! Doloribus modi sit accusantium soluta mollitia ex culpa nemo nobis aliquid voluptas?
     </p>

     <div className="d-flex align-items-center gap-4 mt-3">
       
       
        <img src={ava01} className='w-25 h-25 rounded-2' alt="" />

        <div>
            <h6 className='mb-0 mt-3'>John Deo</h6>
            <p>Customer</p>
        </div>
     </div>
    </div>
    <div className="testimonial py-4 px-3">
     <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos molestias deserunt quaerat accusamus adipisci cum cupiditate quo! Doloribus modi sit accusantium soluta mollitia ex culpa nemo nobis aliquid voluptas?
     </p>

     <div className="d-flex align-items-center gap-4 mt-3">
       
       
        <img src={ava02} className='w-25 h-25 rounded-2' alt="" />

        <div>
            <h6 className='mb-0 mt-3'>Lia Franklin</h6>
            <p>Customer</p>
        </div>
     </div>
    </div>
    <div className="testimonial py-4 px-3">
     <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos molestias deserunt quaerat accusamus adipisci cum cupiditate quo! Doloribus modi sit accusantium soluta mollitia ex culpa nemo nobis aliquid voluptas?
     </p>

     <div className="d-flex align-items-center gap-4 mt-3">
       
       
        <img src={ava03} className='w-25 h-25 rounded-2' alt="" />

        <div>
            <h6 className='mb-0 mt-3'>John Deo</h6>
            <p>Customer</p>
        </div>
     </div>
    </div>
  </Slider>
}

export default Testimonial
