import React from 'react'
import Container from '../Components/Container'
import imgProject from "../assets/Untitled design (2).png";
import { IoCheckmarkCircle } from "react-icons/io5";
import webImg from '../assets/ShopZen-E-commerce-Website-03-05-2026_02_44_AM.png'
import { Link } from "react-router";

const Educational = () => {
    let packages = [
    {
      name: "Basic Package",
      price: "৳12999",
      features: [
        ".com .net .shop .xyz ডোমেইন",
        "Hostinger হোস্টিং সেটআপ",
        "প্রিমিয়াম থিম প্লাগিন দিয়ে কাস্টমাইজেশন ।",
        "CMS: WordPress",
        "সারা জীবনের জন্য SSL সার্টিফিকেট",
        "কাস্টমার ফ্রেন্ডলি",
        "অটোমেটিক পেমেন্ট গেটওয়ে",
        "Basic SEO setup",
        "Responsive Design",
        "24/7 Support",
      ],
    },
    {
      name: "Premium Package",
      price: "৳19999",
      features: [
        ".com .net .shop .xyz ডোমেইন",
        "Hostinger হোস্টিং সেটআপ",
        "CMS: WordPress",
        "SSL সার্টিফিকেট",
        "সারা জীবনের জন্য SSL সার্টিফিকেট",
        "5-8 Page Design",
        "কাস্টমার ফ্রেন্ডলি",
        "Responsive Design",
        "স্পীড অপ্টিমাইজেশন",
        "সকল ডিভাইস সুপার রেস্পন্সিভ",
        "এক বছর ফ্রি-সাপোর্ট",
        "24/7 Support",
      ],
    },
   
  ];
  return (
    <>
      <div className=" text-white bg-black py-20 relative">
        <Container>
          <div className=" text-center">
          
              <h2 className=" font-bold text-6xl text-center leading-16">
              Educational Website
              </h2>
            <div className=" flex gap-1 justify-center  mt-5 items-center">
                <Link to={`/`} className=' text-xl  font-medium'> Home </Link>
                / <h4 className=' text-xl  font-medium'>Educational website</h4>
            </div>
      
          </div>
        </Container>
      </div>

      <div className="my-20">
        <Container>
           
         
               <div className=" mt-20">
              <h2 className=" font-bold text-5xl text-center text-green-700 leading-16">
              আমাদের করা Educational Website ওয়েবসাইটগুলো
            </h2>

            <div className=" grid grid-cols-3 gap-5 my-9">
          
        
            <div className="w-105 h-130 shadow shadow-black/20">
              <div className="w-full h-116 overflow-hidden">
                <img src={webImg} alt="" />
              </div>
              <Link to={``}>
              <button className=" py-3 w-full font-medium text-2xl bg-green-500 text-white cursor-pointer hover:bg-pink-700 duration-500">Live view</button>
              </Link>
            </div>
            <div className="w-105 h-130 shadow shadow-black/20">
              <div className="w-full h-116 overflow-hidden">
                <img src={webImg} alt="" />
              </div>
              <Link to={``}>
              <button className=" py-3 w-full font-medium text-2xl bg-green-500 text-white cursor-pointer hover:bg-pink-700 duration-500">Live view</button>
              </Link>
            </div>
            <div className="w-105 h-130 shadow shadow-black/20">
              <div className="w-full h-116 overflow-hidden">
                <img src={webImg} alt="" />
              </div>
              <Link to={``}>
              <button className=" py-3 w-full font-medium text-2xl bg-green-500 text-white cursor-pointer hover:bg-pink-700 duration-500">Live view</button>
              </Link>
            </div>
            <div className="w-105 h-130 shadow shadow-black/20">
              <div className="w-full h-116 overflow-hidden">
                <img src={webImg} alt="" />
              </div>
              <Link to={``}>
              <button className=" py-3 w-full font-medium text-2xl bg-green-500 text-white cursor-pointer hover:bg-pink-700 duration-500">Live view</button>
              </Link>
            </div>
            <div className="w-105 h-130 shadow shadow-black/20">
              <div className="w-full h-116 overflow-hidden">
                <img src={webImg} alt="" />
              </div>
              <Link to={``}>
              <button className=" py-3 w-full font-medium text-2xl bg-green-500 text-white cursor-pointer hover:bg-pink-700 duration-500">Live view</button>
              </Link>
            </div>
            <div className="w-105 h-130 shadow shadow-black/20">
              <div className="w-full h-116 overflow-hidden">
                <img src={webImg} alt="" />
              </div>
              <Link to={``}>
              <button className=" py-3 w-full font-medium text-2xl bg-green-500 text-white cursor-pointer hover:bg-pink-700 duration-500">Live view</button>
              </Link>
            </div>
            </div>
          </div>
           <div className="">
            <h2 className=" font-bold text-5xl text-center text-green-700 leading-16">
              আমাদের প্যাকেজসমূহ
            </h2>

            <div className=" grid grid-cols-2  gap-4 mt-10">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r w-[90%] mx-auto from-gray-800 to-black/70 text-white rounded-lg shadow-lg p-6 flex flex-col justify-between"
                >
                  <div>
                    <h2 className="text-center font-bold text-3xl mb-2">
                      {pkg.name}
                    </h2>

                    <p className="text-center text-red-500 text-3xl font-bold mb-4">
                      {pkg.price}
                    </p>

                    <ul className="space-y-2 text-xl">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-1">
                          <IoCheckmarkCircle className=" text-green-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="mt-6 bg-green-500 hover:bg-green-600 py-2 rounded text-white font-semibold">
                    ORDER NOW
                  </button>
                </div>
              ))}
            </div>
          </div>
          
        </Container>
      </div>
    </>
  );
}

export default Educational