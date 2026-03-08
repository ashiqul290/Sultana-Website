import React, { useState } from "react";
import Container from "../Components/Container";
import { FaFacebook, FaMeta, FaMinus, FaPlus } from "react-icons/fa6";
import Lottie from "lottie-react";
import img from "../assets/business-planning-stert-up-looking-future-analysis-adstract-illustration_385073-92-1.avif";
import img4 from "../assets/5.webp";
import img1 from "../assets/6287ca34-ceee-405c-af1f-c98906b7add2-1024x1024-1.webp";
import img2 from "../assets/academic-1024x1024-1.webp";
import img3 from "../assets/2-1.webp";

const FACEBOOKMARKETING = () => {
  let [show1 , setShow1] = useState(false)
  let [show2 , setShow2] = useState(false)
  let [show3 , setShow3] = useState(false)

  let handleshow1 = ()=>{
    setShow1(!show1)
    setShow2(false)
    setShow3(false)
  }
  let handleshow2 = ()=>{
    setShow1(false)
    setShow2(!show2)
    setShow3(false)
  }
  let handleshow3 = ()=>{
    setShow1(false)
    setShow2(false)
    setShow3(!show3)
  }
  const features = [
    {
      icon: img1,
      title: "এড ডেভেলপমেন্ট",
      desc: "অর্ডার প্লেস করবার পর অ্যাড রান করবার পূর্বে অ্যাড এর প্ল্যানিং নিয়ে গাইডলাইন দেওয়া থেকে শুরু করে কন্টেন্ট প্ল্যানিং এবং অ্যাড সম্পর্কিত বিবিধ বিষয়ে আপনাকে ব্রিফ করা এবং অ্যাড কি ধরণের হবে সেই সম্পর্কে আমাদের পক্ষ থেকে আপনাকে একটা ধারণা দেয়া হবে। এছাড়াও কমপ্লিট ফেসবুক মার্কেটিং প্যাকেজের মধ্যে আপনার যদি স্পেসিফিক মার্কেটিং প্ল্যানিং লাগে তবে আমরা বিভিন্ন মার্কেট রিসার্চ ও কেস স্টাডি করে আপনাকে একটা কমপ্লিট প্ল্যানিং ডেলিভার করবো।",
    },
    {
      icon: img2,
      title: "এড ম্যানেজমেন্ট",
      desc: "অ্যাড রান হবার পর আমরা আপনার অ্যাড সার্বক্ষণিক পর্যবেক্ষণ করবো এবং আপনাকে টাইম টু টাইম রিপোর্ট করবো যাতে অ্যাড রান হবার পর অ্যাড এর কন্ডিশন সম্পর্কে আপনি সম্পূর্ণরূপে অবহিত থাকেন। এছাড়া যদি আপনার অ্যাড এর খরচ কোন কারণে বেশি থাকে তবে আমাদের থেকে অ্যাড অপটিমাইজ এবং অ্যাড এর খরচ কমিয়ে আনার বিষয়ে সম্পূর্ণ সাপোর্ট এবং গাইডলাইন পাবেন । অ্যাড অপটিমাইজেশন এর সম্পূর্ণ দিকনির্দেশনা আমাদের পক্ষ থেকে পাবেন।",
    },
    {
      icon: img3,
      title: "এড পরবর্তী সেবা",
      desc: "অ্যাড কমপ্লিট হলে অ্যাড এর কমপ্লিট রিপোর্ট আমরা ডেলিভার করে থাকি। এছাড়াও মার্কেটিং সম্পর্কিত প্ল্যানিং এবং পূর্বে মার্কেটিং রিলেটেড কোন সমস্যার সম্মুখীন হয়ে থাকলে সেটার কনসালটেন্সি ওয়ান টু ওয়ান ভার্চুয়াল মিটিং এর মাধ্যমে দিয়ে থাকি। যদি এড এ কোন সমস্যা হয় (এড রিজেকশন, এড ক্রিয়েটিভ ফ্যাটিগ, পেজ রেস্ট্রিকশন) তবে আমাদের থেকে এইসব বিষয়ে উত্তরণের পূর্ণ সমধান এবং দিকনির্দেশনা আমাদের পক্ষ থেকে পাবেন।",
    },
  ];
  return (
    <>
      <div className=" bg-pink-800 text-white py-20">
        <Container>
          <div className="">
            <h2 className=" font-bold text-5xl w-190 leading-16">
              বর্তমান সময়ে ডিজিটাল মার্কেটিংয়ের গুরুত্বপূর্ণ একটি অংশ হচ্ছে
              ফেসবুক মার্কেটিং
            </h2>
            <p className=" text-2xl font-medium mt-12 w-190 leading-10">
              ফেসবুক ব্যবহার করে আপনার কোম্পানির পণ্য বা সেবা খুব সহজে গ্রাহকরের
              কাছে পৌঁছে দেয়া অথবা ব্র্যান্ডিং ও ভিজিবিলিটি বৃদ্ধি করাই হচ্ছে
              ফেসবুক মার্কেটিং। ফেসবুক মার্কেটিং এ সাধারণত কোন পণ্য বা সেবার
              বিজ্ঞাপন তৈরি করে সেটিকে সম্ভাব্য গ্রাহকের কাছে পৌঁছে দেয়া হয়।
            </p>
            <button className=" mt-10 rounded-[10px] shadow-[0_0_5px] shadow-black/75 px-5 bg-green-700 cursor-pointer font-medium py-3 ">
              GET FREE CONSULTATION
            </button>
          </div>
        </Container>
      </div>

      <div className=" bg-pink-800 text-white py-18">
        <Container>
          <div className=" flex justify-between items-center">
            <div className=" text-center">
              <h2 className=" text-5xl font-bold flex gap-2 justify-center ">
                <FaMeta /> Meta
              </h2>
              <p className="mt-5 font-medium text-2xl">Meta Business Partner</p>
            </div>
            <div className=" text-center">
              <h2 className=" text-5xl font-bold flex justify-center gap-2 ">
                10+ Years
              </h2>
              <p className="mt-5 font-medium text-2xl">
                Facebook Ads Experience
              </p>
            </div>
            <div className=" text-center">
              <h2 className=" text-5xl font-bold flex justify-center gap-2 ">
                400+
              </h2>
              <p className="mt-5 font-medium text-2xl">Client Successes</p>
            </div>
            <div className=" text-center">
              <h2 className=" text-5xl font-bold flex justify-center gap-2 ">
                $80 M
              </h2>
              <p className="mt-5 font-medium text-2xl">Revenue Generated</p>
            </div>
          </div>
        </Container>
      </div>

      <div className="my-20">
        <Container>
          <div className=" flex justify-between items-center">
            <div className="">
              <h3 className=" text-5xl font-bold text-green-800 leading-15">
                ফেসবুক মার্কেটিং কেন প্রয়োজন?
              </h3>
              <h3 className=" font-bold text-3xl mt-7 text-red-700">
                সারাবিশ্বে অন্তত ৪২% ব্যবসায়ী মনে করেন, ফেসবুক তাদের বিজনেসের
                প্রধান হাতিয়ার
              </h3>
              <p className=" w-200 font-medium text-2xl mt-24 leading-10">
                ফেসবুককে আমরা কম বেশি সকলেই চিনি পৃথিবীর সবচেয়ে বড় সামাজিক
                যোগাযোগ মাধ্যম হিসেবে । প্রতিদিন প্রায় ১.৫ বিলিয়ন মানুষ একবার
                হলেও ফেসবুকে লগইন করেন। আর প্রতিমাসে এই সংখ্যাটা যেয়ে দাঁড়ায় ২.৩
                বিলিয়নে। সেখানে প্রায় ৭ মিলিয়নেরও বেশি সক্রিয় কোম্পানি এই বিশাল
                দর্শকদের জন্য বিজ্ঞাপন তৈরি করে। বাংলাদেশে বর্তমানে ৫ কোটি ২৭
                লক্ষ+ মানুষ ফেসবুক ব্যবহার করছে, যা বাংলাদেশের মোট জনসংখ্যার
                ৩২.২ শতাংশ। এই মানুষগুলোর মধ্যে বিশাল সংখ্যা যেমন গ্রাহক আবার
                বিশাল সংখ্যক বিক্রেতা। এই সংখ্যাগুলো দেখেই বুঝা যায় ফেসবুক
                মার্কেটিং কি পরিমাণ গুরুত্বপূর্ণ। গত এক দশকে, ফেসবুক ইন্টারনেট
                জগতের সবচেয়ে বড় সামাজিক যোগাযোগ মাধ্যম থেকে সবচেয়ে বড়
                মার্কেটপ্লেসে পরিণত হয়েছে এবং ব্যবসা প্রচারের জন্য সবচেয়ে
                নির্ভরশীল স্থান হিসেবে প্রতিষ্ঠিত হয়েছে।
              </p>
            </div>
            <div className=" ">
              <img src={img} alt="" />
            </div>
          </div>
        </Container>
      </div>
      <div className=" bg-green-50 ">
        <Container>
          <div className="py-20">
            <h3 className=" text-6xl font-bold text-green-800 leading-19 w-170  mx-auto">
              কেন আমাদের ফেসবুক মার্কেটিং সার্ভিস নেবেন?
            </h3>
            <p className=" text-xl text-center mt-5 font-medium ">
              আমাদের রয়েছে দক্ষ ও অভিজ্ঞ ফেসবুক মার্কেটার। যারা আপনার ব্যবসার
              জন্য সঠিক মার্কেটিং প্ল্যান এবং বিজ্ঞাপনগুলি তৈরি করে সার্বক্ষণিক
              ট্র্যাক করবে, যাতে আপনি আপনার বিনিয়োগের সর্বোত্তম ROI পেতে পারেন।
              আমার আপনার ব্যবসার সর্বোত্তম ফলাফল অর্জনের জন্য নিবেদিত।
            </p>

            <div className=" grid grid-cols-3 gap-2 my-15 justify-between">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="bg-linear-to-b from-blue-700 to-blue-950 text-white p-8 rounded-xl shadow-lg text-center hover:scale-103 transition duration-300"
                >
                  <div className="flex justify-center mb-4 ">
                    <img
                      src={item.icon}
                      className=" w-60 rounded-[10px]"
                      alt="img"
                    />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>

                  <p className="text-sm leading-7">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <div className="my-20">
        <Container>
          <div className=" flex justify-between items-center">
            <div className="">
              <h3 className=" text-5xl font-bold text-green-800 leading-15">
               আপনি কি ফেসবুক মার্কেটিং নিয়ে একটি মিটিং করতে চান?
              </h3>
            
              <p className=" w-200 font-medium text-2xl mt-24 leading-10">
               আমাদের অভিজ্ঞ ফেসবুক মার্কেটিং টিম আপনার বাজেট এবং চাহিদা অনুযায়ী একটি সঠিক মার্কেটিং প্ল্যান তৈরি করে আপনার ব্যবসায় উন্নতির ক্ষেত্রে সার্বিক সহযোগিতা করবেন।
              </p>
              <button className=" cursor-pointer rounded-[10px] hover:bg-green-800 px-4 py-2 bg-green-700 text-white font-medium mt-9">GET FREE CONSULTATION</button>
            </div>
            <div className=" ">
              <img src={img4} alt="" />
            </div>
          </div>
        </Container>
      </div>

      <div className=" bg-green-50 py-20">
        <Container>
          <div className="">
             <h3 className=" text-6xl font-bold text-pink-700 leading-19 text-center ">
             ফেসবুক মার্কেটিং সম্পর্কিত কিছু প্রশ্ন:
            </h3>
            <div className=" flex items-center gap-3 justify-center my-5">
              <div className=" flex">
                <FaMinus />
                <FaMinus className="-ml-1"/>
                <FaMinus className="-ml-1"/>
                <FaMinus className="-ml-1"/>
                <FaMinus className="-ml-1"/>
                <FaMinus className="-ml-1"/>
              </div>
              <FaFacebook className=" text-5xl text-green-800  " />
              <div className=" flex">
                <FaMinus />
                <FaMinus className="-ml-1"/>
                <FaMinus className="-ml-1"/>
                <FaMinus className="-ml-1"/>
                <FaMinus className="-ml-1"/>
                <FaMinus className="-ml-1"/>
              </div>
            </div>

         <div className=" shadow mt-5">
             <div onClick={handleshow1} className=" border cursor-pointer border-gray-200 bg-white flex justify-between px-2 py-4">
              <h2 className=" text-2xl font-medium">আমার এড (বিজ্ঞাপনটি) কতদিন চলবে?</h2>
              {
                show1 ? 
               <FaMinus className="text-3xl text-green-600"/> :
                <FaPlus  className="text-3xl text-green-600"/>
              }
            </div>
            {
              show1 ? 
              <div className=" bg-green-50 p-6 border border-gray-100">
                <p className=" text-xl font-medium leading-9">একটি এড এঁর ডিউরেশন বা সময় এড এঁর বাজেটের ওপর নির্ভর করে। আপনি আপনার সুবিধামতো দিন নির্ধারন করে বাজেট খরচ করতে পারেন। দৈনিক যত খরচ করবেন, সেই অনুপাতে রেজাল্ট আসবে। সর্বনিন্ম প্রতিদিন ১ ডলার দেয়া যায়। মানে ৩০ ডলার দিয়ে সর্বাধিক ৩০ দিন ক্যাম্পেইন চালাতে পারবেন। তবে আপনি যদি আপনার এড শুরু থেকেই অপটিমাইজ করতে চান এবং তার থেকে একটা ভালো ফলাফল পেতে চান তবে আমাদের পরামর্শ হলো দৈনিক অন্তত ৩-১০ ডলার বরাদ্দ দিন যাতে একটি স্ট্যান্ডার্ড স্পিড বা ভালো লিড পাওযা যায়। ফেসবুক আপনার বাজেটের পুরোটা খরচ করতে না পারলে এবং বাড়তি টাকা থেকে গেলে তা আমরা রিফান্ড করে থাকি।</p>

              </div> : ""
            }
         </div>
         <div className=" shadow mt-5">
             <div onClick={handleshow2} className=" border cursor-pointer border-gray-200 bg-white flex justify-between px-2 py-4">
              <h2 className=" text-2xl font-medium">আমার এড (বিজ্ঞাপনটি) কতদিন চলবে?</h2>
              {
                show2 ? 
               <FaMinus className="text-3xl text-green-600"/> :
                <FaPlus  className="text-3xl text-green-600"/>
              }
            </div>
            {
              show2 ? 
              <div className=" bg-green-50 p-6 border border-gray-100">
                <p className=" text-xl font-medium leading-9">একটি এড এঁর ডিউরেশন বা সময় এড এঁর বাজেটের ওপর নির্ভর করে। আপনি আপনার সুবিধামতো দিন নির্ধারন করে বাজেট খরচ করতে পারেন। দৈনিক যত খরচ করবেন, সেই অনুপাতে রেজাল্ট আসবে। সর্বনিন্ম প্রতিদিন ১ ডলার দেয়া যায়। মানে ৩০ ডলার দিয়ে সর্বাধিক ৩০ দিন ক্যাম্পেইন চালাতে পারবেন। তবে আপনি যদি আপনার এড শুরু থেকেই অপটিমাইজ করতে চান এবং তার থেকে একটা ভালো ফলাফল পেতে চান তবে আমাদের পরামর্শ হলো দৈনিক অন্তত ৩-১০ ডলার বরাদ্দ দিন যাতে একটি স্ট্যান্ডার্ড স্পিড বা ভালো লিড পাওযা যায়। ফেসবুক আপনার বাজেটের পুরোটা খরচ করতে না পারলে এবং বাড়তি টাকা থেকে গেলে তা আমরা রিফান্ড করে থাকি।</p>

              </div> : ""
            }
         </div>
         <div className=" shadow mt-5">
             <div onClick={handleshow3} className=" border cursor-pointer border-gray-200 bg-white flex justify-between px-2 py-4">
              <h2 className=" text-2xl font-medium">আমার এড (বিজ্ঞাপনটি) কতদিন চলবে?</h2>
              {
                show3 ? 
               <FaMinus className="text-3xl text-green-600"/> :
                <FaPlus  className="text-3xl text-green-600"/>
              }
            </div>
            {
              show3 ? 
              <div className=" bg-green-50 p-6 border border-gray-100">
                <p className=" text-xl font-medium leading-9">একটি এড এঁর ডিউরেশন বা সময় এড এঁর বাজেটের ওপর নির্ভর করে। আপনি আপনার সুবিধামতো দিন নির্ধারন করে বাজেট খরচ করতে পারেন। দৈনিক যত খরচ করবেন, সেই অনুপাতে রেজাল্ট আসবে। সর্বনিন্ম প্রতিদিন ১ ডলার দেয়া যায়। মানে ৩০ ডলার দিয়ে সর্বাধিক ৩০ দিন ক্যাম্পেইন চালাতে পারবেন। তবে আপনি যদি আপনার এড শুরু থেকেই অপটিমাইজ করতে চান এবং তার থেকে একটা ভালো ফলাফল পেতে চান তবে আমাদের পরামর্শ হলো দৈনিক অন্তত ৩-১০ ডলার বরাদ্দ দিন যাতে একটি স্ট্যান্ডার্ড স্পিড বা ভালো লিড পাওযা যায়। ফেসবুক আপনার বাজেটের পুরোটা খরচ করতে না পারলে এবং বাড়তি টাকা থেকে গেলে তা আমরা রিফান্ড করে থাকি।</p>

              </div> : ""
            }
         </div>

          </div>
        </Container>
      </div>
    </>
  );
};

export default FACEBOOKMARKETING;
