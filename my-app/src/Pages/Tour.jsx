import React from 'react'
import { useEffect,useState } from 'react'
import CommonSection from '../Shared/CommonSection'
import '../styles/tour.css'
import tourData from '../assets/data/tours'
import TourCard from '../Shared/TourCard'
import SearchBar from './../Shared/Searchbar'
import Newsletter from './../Shared/Newsletter'
import { Container,Row,Col } from 'reactstrap'
import useFetch from '../Hooks/useFetch'
import axios from "axios";
import { BASE_URL } from '../utils/config'
const Tour = () => {

  
const [pageCount,setPageCount]=useState(0);
const[page,setPage]=useState(0);


const {data:tour,loading,error}= useFetch(`${BASE_URL}/tours/getall?page=${page}`);
const {data:tourCount}=useFetch(`${BASE_URL}/tours/search/getTourCount`)

useEffect(()=>{
const page=Math.ceil(tourCount/8);
setPageCount(page);
window.scrollTo(0,0)
},[page,tourCount,tour])






  return (
    <>
     <CommonSection title={'All Tours'}/>
    <section>
<Container>
  <Row>
    <SearchBar/>
  </Row>
</Container>
    </section>
    
    <section className='pt-0'>
      <Container>
         <Row>
          
        {loading && <h4 className='text-center pt-5'>Loading....</h4>}
        {error && <h4 className='text-center pt-5'>{error}</h4>}  
        
        
{!loading && !error  && tour.map((tour,k)=> 
<Col lg='4' md="6" sm="6" className='mb-4 mt-4'  ><TourCard tour={tour} key={k}/></Col>

)

       
          
            // Your map logic here    <
           

          
          }</Row>
       
       <Row>
    <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">

      {[...Array(pageCount).keys()].map(num=>(
        <span key={num} onClick={()=>setPage(num)} 
        className={page===num? 'active_page': ''}
        >{num+1}</span>
      ))}

    </div>
    </Row>
        
       

      </Container>
      </section>
      <section className="pt-0">
        <Container>
          
        </Container>
      </section>
      <Newsletter/>
      </>
  )
}

export default Tour


/*
    
    
    
     &&*/