import React, { useEffect, useState } from "react";
import Container from "./Container";
import Lottie from "lottie-react";
import animationData from "../SVG/analysis-digital-marketing.json";
const MarkentingSeciton = () => {
  const items = [
    { text: "ফ্রিল্যান্স", position: "top-[-20px] left-1/2 -translate-x-1/2" },
    { text: "কেন ফ্রিল্যান্স", position: "top-[80px] right-[-20px]" },
    { text: "ফ্রিল্যান্স কি", position: "bottom-[80px] right-[-20px]" },
    { text: "উপকারিতা", position: "bottom-[-20px] left-1/2 -translate-x-1/2" },
    {
      text: "ডিজিটাল মার্কেটিং",
      position: "top-1/2 left-[-20px] -translate-y-1/2",
    },
  ];
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 2000); // 2 second

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className=" bg-green-300/10">
        <Container>
          <div className=" flex justify-between items-center">
            <div className="">
              <h3 className=" text-5xl font-bold text-green-800">
                ডিজিটাল মার্কেটিং কি?
              </h3>
              <h3 className=" font-bold text-3xl mt-7 text-red-700">
                ডিজিটাল মার্কেটিং এর প্রয়োজনীয়তা
              </h3>
              <p className=" w-130 font-medium text-xl mt-24">
                আমাদের অভিজ্ঞ মার্কেটিং টিম আপনার বাজেট এবং চাহিদা অনুযায়ী একটি
                মার্কেটিং পরিকল্পনা করে তার প্রতিটি ধাপ গাইড করবেন এবং ব্যবসার
                উন্নতির ক্ষেত্রে সার্বিক সহযোগিতা করবেন।
              </p>

              <button className=" mt-16 bg-red-600 hover:bg-red-500 text-white px-6 py-4 rounded-full font-semibold">
                Contact us now
              </button>
            </div>
            <div className="flex items-center justify-center min-h-screen">
              <div className="relative w-125 h-125">
                {/* circle border */}
                <div className="absolute inset-0 border-[6px] border-green-700 rounded-full"></div>

                {/* center text */}
                <div className="absolute inset-0 flex items-center justify-center text-center px-10">
                  <p className="text-gray-700 text-sm">
                    এসইও বা সার্চ ইঞ্জিন অপ্টিমাইজেশন, এসইএম বা সার্চ ইঞ্জিন
                    মার্কেটিং, কন্টেন্ট মার্কেটিং, সোশ্যাল মিডিয়া মার্কেটিং,
                    ইমেইল মার্কেটিং, ইনফ্লুয়েন্সার মার্কেটিং।
                  </p>
                </div>

                {/* circles */}
                {items.map((item, index) => (
                  <div
                    key={index}
                    className={`absolute ${item.position}
            w-20 h-20 flex items-center justify-center rounded-full text-sm text-white shadow
            transition-all duration-500
            ${active === index ? "bg-green-700 scale-110" : "bg-red-600"}
            `}
                  >
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MarkentingSeciton;
