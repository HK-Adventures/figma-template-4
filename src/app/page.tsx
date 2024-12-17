'use client'

import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import TopCategories from "./components/TopCategories";
import LatestProducts from "./components/LatestProducsts";
import Feature from "./components/FeaturedProducts";
import Offers from "./components/Offers";
import Unique from "./components/Unique";
import TrendingProducts from "./components/TrendingProducts";
import Discount from "./components/Discount";
import BlogSection from "./components/BlogSection";
import NewsLetter from "./components/NewsLetter";

function Homepage(){
  return(
    <div>
      <Header />
      <Hero />
      <Feature />
      <LatestProducts />
      <Offers />
      <Unique />
      <TrendingProducts />
      <Discount />
      <TopCategories />
      <NewsLetter />
      <BlogSection />
      <Footer />
    </div>
  )
}

export default Homepage;