import React from 'react';
import CustomNavbar from '../components/CostomNavbar';
import CustomCarousel from '../components/CustomCarousel';
import Footer from '../components/Footer';
import CarouselCaption from '../components/CarouselCaption';
import Card from '../components/Card';
// import Card from '../components/Card';






export default function Home() {
  return (
<div>
   <div>
   <CustomNavbar/>
   
   <CustomCarousel/> 
   <CarouselCaption/>
</div>

    <Card/>

   <Footer/>
   
   </div>
  
  )
}