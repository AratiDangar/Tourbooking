import React from 'react'
import ServicesCard from './ServicesCard'
import { Col } from 'reactstrap'


import weathreImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import CustomizationImg from '../assets/images/customization.png'

const servicesData=[
    {
        imgUrl:weathreImg,
        title:"Calculate Weather",
        desc:"heyyy calculate whether as according to your choiise"
    },
    {
        imgUrl:guideImg,
        title:"Best Tour Guide",
        desc:"heyyy calculate whether as according to your choiise"
    },
    {
        imgUrl:CustomizationImg,
        title:"Customization",
        desc:"heyyy calculate whether as according to your choiise"
    },
]
const ServiceList = () => {
  return (
    <>
      {
        servicesData.map((item,index)=>

            <Col lg="3" md="6" sm="12" className='mb-4' key={index}>
                <ServicesCard item={item} />
            </Col>
        )}
      
    </>
  )
}

export default ServiceList
