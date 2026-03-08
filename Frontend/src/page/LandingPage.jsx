import React from "react";
import Container from "../Components/Container";
import imgProject from "../assets/landing-page.webp";
import { IoCheckmarkCircle, IoCheckmarkSharp } from "react-icons/io5";
import webImg from "../assets/ShopZen-E-commerce-Website-03-05-2026_02_44_AM.png";
import solveIMG from "../assets/fast-loading.webp";
import { Link } from "react-router";

const LandingPage = () => {
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
    }, {
      name: "Gold Package",
      price: "৳29999",
      features: [
        ".com .net .shop .xyz ডোমেইন",
        "Hostinger হোস্টিং সেটআপ",
        "CMS: WordPress",
        "SSL সার্টিফিকেট",
        "10-12 Page Design",
        "Advanced SEO",
        "Responsive Design",
        "24/7 Support",
      ],
    },
  ];

  const features = [
    "কাস্টম ডিজাইন: আপনার ব্র্যান্ডের জন্য অনন্য ডিজাইন",
    "মজবুত আকার 40% ডিসকাউন্ট",
    "ডোমেইন + হোস্টিং সেটআপ",
    "ফুল রেসপন্সিভ: মোবাইল ও ডেস্কটপে এক্সপেরিয়েন্সে কোনো ফাঁক নেই",
    "SEO অপ্টিমাইজড: গুগল র‍্যাঙ্কিং উন্নত হবে",
    "কনভার্সন ফোকাস: উচ্চ কনভার্সন রেট নিশ্চিত",
    "ইন্টিগ্রেশন সাপোর্ট: পেমেন্ট গেটওয়ে, ইমেইল মার্কেটিং, CRM ইন্টিগ্রেশন",
    "A/B টেস্টিং: পারফরম্যান্স পরীক্ষা ও উন্নয়ন",
    "২৪/৭ সাপোর্ট: লাইভ সার্ভিসের পরও সাহায্য পাবেন",
  ];

  const feature2 = [
    "কাস্টম ডিজাইন: আপনার ব্র্যান্ডের জন্য অনন্য ডিজাইন",
    "মজবুত আকার 40% ডিসকাউন্ট",
    "ডোমেইন + হোস্টিং সেটআপ",
    "ফুল রেসপন্সিভ: মোবাইল ও ডেস্কটপে এক্সপেরিয়েন্সে কোনো ফাঁক নেই",
    "SEO অপ্টিমাইজড: গুগল র‍্যাঙ্কিং উন্নত হবে",
    "কনভার্সন ফোকাস: উচ্চ কনভার্সন রেট নিশ্চিত",
    "ইন্টিগ্রেশন সাপোর্ট: পেমেন্ট গেটওয়ে, ইমেইল মার্কেটিং, CRM ইন্টিগ্রেশন",
    "A/B টেস্টিং: পারফরম্যান্স পরীক্ষা ও উন্নয়ন",
    "২৪/৭ সাপোর্ট: লাইভ সার্ভিসের পরও সাহায্য পাবেন",
  ];
  return (
    <>
      <div className=" text-white bg-gradient-to-t to-green-700 from-black/90 py-25 relative">
        <Container>
          <div className=" text-center">
            <h3 className=" text-2xl font-bold">
              ফেক অর্ডার থেকে রক্ষা এবং ব্যবসায় নতুন গতি আনতে সহজ সমধান হলো একটি
              প্রফেশনাল ল্যান্ডিং পেইজ।
            </h3>
            <div className="mt-10 bg-red-700 p-2 rounded-2xl">
              <div className=" border-6 border-dotted px-3 py-5 rounded-2xl ">
                <h2 className=" font-bold text-6xl text-center leading-21">
                  সেলস অপ্টিমাইজ ল্যান্ডিং পেজ যা আপনার ব্যবসার সেলকে বৃদ্ধি
                  করবে ১০ গুন!!
                </h2>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="my-10">
        <Container>
          <div className="">
            <div className=" bg-blue-800 text-white text-center rounded-2xl">
              <h3 className=" text-4xl font-bold py-4">
                Digital Wave IT দিচ্ছে স্মার্ট সল্যুশন:
              </h3>
            </div>

            <div className=" flex gap-2 items-center">
              <div className="">
                {features.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 mt-8">
                    <div className=" px-1 text-white bg-green-600 py-1">
                      <IoCheckmarkSharp />
                    </div>
                    <p className="text-gray-800 font-bold text-2xl ">{item}</p>
                  </div>
                ))}
              </div>
              <div className="w-160 rounded-[10px]">
                <img src={solveIMG} alt="img" className=" rounded-[10px]" />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="my-20">
        <Container>
          <div className=" mt-20">
            <h2 className=" font-bold text-5xl text-center text-green-700 leading-16">
              আমাদের করা Landing Page
            </h2>

            <div className=" grid grid-cols-3 gap-5 my-9">
              <div className="w-105 h-130 shadow shadow-black/20">
                <div className="w-full h-116 overflow-hidden">
                  <img src={webImg} alt="" />
                </div>
                <Link to={``}>
                  <button className=" py-3 w-full font-medium text-2xl bg-green-500 text-white cursor-pointer hover:bg-pink-700 duration-500">
                    Live view
                  </button>
                </Link>
              </div>
              <div className="w-105 h-130 shadow shadow-black/20">
                <div className="w-full h-116 overflow-hidden">
                  <img src={webImg} alt="" />
                </div>
                <Link to={``}>
                  <button className=" py-3 w-full font-medium text-2xl bg-green-500 text-white cursor-pointer hover:bg-pink-700 duration-500">
                    Live view
                  </button>
                </Link>
              </div>
              <div className="w-105 h-130 shadow shadow-black/20">
                <div className="w-full h-116 overflow-hidden">
                  <img src={webImg} alt="" />
                </div>
                <Link to={``}>
                  <button className=" py-3 w-full font-medium text-2xl bg-green-500 text-white cursor-pointer hover:bg-pink-700 duration-500">
                    Live view
                  </button>
                </Link>
              </div>
              <div className="w-105 h-130 shadow shadow-black/20">
                <div className="w-full h-116 overflow-hidden">
                  <img src={webImg} alt="" />
                </div>
                <Link to={``}>
                  <button className=" py-3 w-full font-medium text-2xl bg-green-500 text-white cursor-pointer hover:bg-pink-700 duration-500">
                    Live view
                  </button>
                </Link>
              </div>
              <div className="w-105 h-130 shadow shadow-black/20">
                <div className="w-full h-116 overflow-hidden">
                  <img src={webImg} alt="" />
                </div>
                <Link to={``}>
                  <button className=" py-3 w-full font-medium text-2xl bg-green-500 text-white cursor-pointer hover:bg-pink-700 duration-500">
                    Live view
                  </button>
                </Link>
              </div>
              <div className="w-105 h-130 shadow shadow-black/20">
                <div className="w-full h-116 overflow-hidden">
                  <img src={webImg} alt="" />
                </div>
                <Link to={``}>
                  <button className=" py-3 w-full font-medium text-2xl bg-green-500 text-white cursor-pointer hover:bg-pink-700 duration-500">
                    Live view
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="">
            <div className="my-10">
              <Container>
                <div className="">
                  <div className=" bg-blue-900 text-white text-center rounded-2xl">
                    <h3 className=" text-4xl font-bold py-4">
                      ল্যান্ডিং পেজ কেন বানাবেন
                    </h3>
                  </div>

                  <div className=" flex gap-2 items-center">
                    <div className="">
                      {feature2.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 mt-8"
                        >
                          <div className=" px-1 text-white bg-green-600 py-1">
                            <IoCheckmarkSharp />
                          </div>
                          <p className="text-gray-800 font-bold text-2xl ">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="w-160 rounded-[10px]">
                      <img
                        src={imgProject}
                        alt="img"
                        className=" rounded-[10px]"
                      />
                    </div>
                  </div>
                </div>
              </Container>
            </div>

            <h2 className=" font-bold text-5xl text-center text-green-700 leading-16">
              আমাদের প্যাকেজসমূহ
            </h2>

            <div className=" grid grid-cols-3  gap-4 mt-10">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r   from-gray-800 to-black/70 text-white rounded-lg shadow-lg p-6 flex flex-col justify-between"
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
};

export default LandingPage;
