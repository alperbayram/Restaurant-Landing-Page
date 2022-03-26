import React from 'react';

import Footer from '../../components/Footer';
import Navigation from '../../components/Navbar';
import FoodItem from '../../partials/FoodItem';
import Booking from '../../partials/Booking';
import Download from '../../partials/Download';
import Foods from '../../partials/Foods';
import Services from '../../partials/Ourservices';
import Slider from '../../partials/Slider';


function Home() {
  return (
    <div>
      <Navigation />
      <Slider></Slider>
      <FoodItem></FoodItem>
      <Booking></Booking>
      <Services></Services>
      <Foods></Foods>
      <Download></Download>
      <Footer></Footer>
    </div>
  );
}

export default Home;
