import React, { useRef } from 'react'
import Container from './Container'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bannerimg1 from "../assets/WhatsApp Image 2026-02-03 adft 2.35.30 AM.jpeg";
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';


const Review = () => {
        const sliderRef = useRef(null);
      var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
      };
  return (
    <>
    <div className="my-30">
        <Container>
            <div className="">
               <div className=" text-center my-2 mb-10">
                   <h3 className=' text-5xl font-bold text-blue-900'>আমাদের সেবা নিয়ে</h3>
                <h3 className=' font-bold text-3xl mt-6 text-red-700'>গ্রাহকদের মন্তব্য</h3>
               </div>
                <div className="">
            <div className="relative outline-none border-none">
              <Slider ref={sliderRef}   {...settings}>
                <div className="">
                  <img
                    className="w-100 border border-gray-300 h-137.5"
                  src={Bannerimg1}
                    alt=""
                  />
                </div>
                <div className="">
                  <img
                    className="w-100 border border-gray-300 h-137.5"
                  src={Bannerimg1}
                    alt=""
                  />
                </div>
                <div className="">
                  <img
                    className="w-100 border border-gray-300 h-137.5"
                  src={Bannerimg1}
                    alt=""
                  />
                </div>
                <div className="">
                  <img
                    className="w-100 border border-gray-300 h-137.5"
                  src={Bannerimg1}
                    alt=""
                  />
                </div>
                <div className="">
                  <img
                    className="w-100 border border-gray-300 h-137.5"
                  src={Bannerimg1}
                    alt=""
                  />
                </div>
             
              
              </Slider>
              <div  onClick={() => sliderRef.current.slickPrev()} className=" border inline-block px-2 py-3 rounded-full backdrop-blur-sm bg-white/15 border-green-200/5 cursor-pointer text-gray-700 absolute top-57 left-0">
                <MdArrowBackIos className=" text-4xl ml-3"/>
              </div>
              <div  onClick={() => sliderRef.current.slickNext()} className="border inline-block px-3 py-3 rounded-full absolute bg-white/15 border-green-200/5 cursor-pointer backdrop-blur-sm top-57 right-3 text-gray-700">
                <MdArrowForwardIos className=" text-4xl "/>
              </div>
            </div>
            
          </div>
            </div>
        </Container>
    </div>
    
    </>
  )
}

export default Review