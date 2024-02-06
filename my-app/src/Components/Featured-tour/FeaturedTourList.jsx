import React from 'react'
import TourCard from '../../Shared/TourCard'
import { useState,useEffect } from 'react'
import {Row, Col, Container } from 'reactstrap'
import { BASE_URL } from './../../utils/config'
import useFetch from './../../Hooks/useFetch'
import axios from "axios";


const FeaturedTourList = () => {
  const [tour, setTour] = useState([]);
  
    //const {data:featuredTours,loading,error}=useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);
  
    useEffect(() => {
      axios
        .get(`${BASE_URL}/tours/search/getFeaturedTour`)
        .then((res) => {
          setTour(res.data);
        })
        .catch((err) => {
          console.log('Error for fatching data');
        });
    }, []);

    const tourList =
    tour.length === 0
      ? 'there is no book record!'
      : tour.map((tour, k) => <TourCard tour={tour} key={k} />);

  return (
    <>
    <section>
    <Container>


  <Row lg='4'  className='mb-4 mt-4' >
    {tourList}
  </Row>
  
 
</Container>
    </section>
    
     
    </>
  )
}

export default FeaturedTourList
/* 
    {
      loading && <h4>Loading........</h4>
    }
    {
      error &&<h4>{error}</h4>
    }
    

{!loading && !error && featuredTours?.map(tour=>(
      <Col lg='3' className='mb-4' key={tour._id}>
        {tourList}
      </Col>
        ))
    }*/