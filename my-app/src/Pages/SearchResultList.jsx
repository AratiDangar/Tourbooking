import React, { useState } from 'react'

import CommonSection from '../Shared/CommonSection'
import { Col, Container, Row } from 'reactstrap'
import { useLocation } from 'react-router-dom'
import TourCard from '../Shared/TourCard'
import Newsletter from '../Shared/Newsletter'


const SearchResultList = () => {

 const location=useLocation()
 const [data]=useState(location.state)
console.log(data)
 const arr = data || [];

 
  return <>
  
  <CommonSection title={'Tour search Result'}/>
  <section>
    <Container>
      <Row>
{

  arr.length===0?(
    <h4 className='text-center'>No tour found</h4>
  ):(
    arr?.map(tour=>(
      <Col lg='3' className='mb-4' key={tour._id} > 

      <TourCard tour={tour}/> 
      </Col>
    ))
  )
}
      </Row>

    </Container>
  </section>
  <Newsletter/>
  </>
}

export default SearchResultList
