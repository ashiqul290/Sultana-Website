import React from "react";
import Container from "../Components/Container";
import img from "../assets/MagMan.webp";

const GraphicsDesign = () => {
  return (
    <>
      <div className=" text-white bg-black bgimg py-20 relative">
        <Container>
          <div className=" w-full h-full bg-black/70 absolute top-0 left-0 "></div>
          <div className=" relative z-20">
            <h2 className=" font-bold text-7xl w-190 leading-16">
              গ্রাফিক্স ডিজাইন কি?
            </h2>
            <p className=" text-2xl font-medium mt-12 w-190 leading-10">
              গ্রাফিক্স ডিজাইন হচ্ছে কোনো একটি ম্যাসেজ বা তথ্যকে সৃজনশীলতা দিয়ে
              রঙ, রেখা ও বিভিন্ন সেপের মাধ্যমে মানুষের সামনে তুলে ধরা। বেশিরভাগ
              ক্ষেত্রেই এখন এই তথ্য বা ম্যাসেজগুলো হয় মার্কেটিং
              সম্পর্কিত।মার্কেটিং বাদেও বিভিন্ন সেক্টর রয়েছে গ্রাফিক্স ডিজাইনের
              আওতায়। গার্মেন্টস সেক্টর তার মধ্যে অন্যতম। গার্মেন্টস খাতের যেকোনো
              পণ্য তৈরি করার আগে এর ডিজাইন করতে হয়।আর আপনি জেনে থাকবেন যে
              বাংলাদেশের গার্মেন্টস সেক্টর পৃথিবী বিখ্যাত।
            </p>
            <button className=" mt-10 rounded-[10px] shadow-[0_0_5px] shadow-black/75 px-5 bg-green-700 font-medium py-3 ">
              GET FREE CONSULTATION
            </button>
          </div>
        </Container>
      </div>

      <div className="py-20">
        <Container>
          <div className="">
            <h2 className=" font-bold text-5xl text-center  leading-16">
              আমাদের করা ডিজাইনগুলো
            </h2>

            <div className=" grid grid-cols-4 gap-1 mt-10 ">
              <div className="w-80 h-80">
                <img src={img} className="" alt="" />
              </div>
              <div className="w-80 h-80">
                <img src={img} className="" alt="" />
              </div>
              <div className="w-80 h-80">
                <img src={img} className="" alt="" />
              </div>
              <div className="w-80 h-80">
                <img src={img} className="" alt="" />
              </div>
              <div className="w-80 h-80">
                <img src={img} className="" alt="" />
              </div>
              <div className="w-80 h-80">
                <img src={img} className="" alt="" />
              </div>
              <div className="w-80 h-80">
                <img src={img} className="" alt="" />
              </div>
              <div className="w-80 h-80">
                <img src={img} className="" alt="" />
              </div>
              <div className="w-80 h-80">
                <img src={img} className="" alt="" />
              </div>
              <div className="w-80 h-80">
                <img src={img} className="" alt="" />
              </div>
              <div className="w-80 h-80">
                <img src={img} className="" alt="" />
              </div>
              <div className="w-80 h-80">
                <img src={img} className="" alt="" />
              </div>
              <div className="w-80 h-80">
                <img src={img} className="" alt="" />
              </div>
              <div className="w-80 h-80">
                <img src={img} className="" alt="" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default GraphicsDesign;
