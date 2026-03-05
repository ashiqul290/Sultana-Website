import React, { useRef } from "react";
import Bannerimg1 from "../assets/Web-DMP.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";



const Banner = () => {
    const sliderRef = useRef(null);
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };
  return (
    <>
      <div className="mb-5">
        <>
          <div className="flex gap-5">
            <div className="w-[95%] relative mx-auto outline-none border-none ">
              <Slider ref={sliderRef}  {...settings}>
                <div className="">
                  <img
                    className="w-full h-[500px]"
                  src={Bannerimg1}
                    alt=""
                  />
                </div>
                <div className="">
                  <img
                    className="w-full h-[500px]"
                    src={Bannerimg1}
                    alt=""
                  />
                </div>
              </Slider>
              <div  onClick={() => sliderRef.current.slickPrev()} className=" border inline-block px-2 py-3 rounded-full backdrop-blur-sm bg-white/15 border-green-200/5 cursor-pointer text-gray-700 absolute top-57 left-0">
                <MdArrowBackIos className=" text-4xl ml-3"/>
              </div>
              <div  onClick={() => sliderRef.current.slickNext()} className="border inline-block px-3 py-3 rounded-full absolute bg-white/15 border-green-200/5 cursor-pointer backdrop-blur-sm top-57 right-0 text-gray-700">
                <MdArrowForwardIos className=" text-4xl "/>
              </div>
            </div>
            
          </div>
        
        </>
      </div>
    </>
  );
};

export default Banner;