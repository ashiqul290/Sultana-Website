import React, { useState } from "react";
import Container from "../Components/Container";
import { MdOutlineEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Contact = () => {
  let [show1, setShow1] = useState(false);
  let [show2, setShow2] = useState(false);
  let [show3, setShow3] = useState(false);
  let [show4, setShow4] = useState(false);
  let [show5, setShow5] = useState(false);
  let [show6, setShow6] = useState(false);
  let [show7, setShow7] = useState(false);

  let heandleshow1 = () => {
    setShow1(!show1);
    setShow2(false);
    setShow3(false);
    setShow4(false);
    setShow5(false);
    setShow6(false);
    setShow7(false);
  };
  let heandleshow2 = () => {
    setShow1(false);
    setShow2(!show2);
    setShow3(false);
    setShow4(false);
    setShow5(false);
    setShow6(false);
    setShow7(false);
  };
  let heandleshow3 = () => {
    setShow1(false);
    setShow2(false);
    setShow3(!show3);
    setShow4(false);
    setShow5(false);
    setShow6(false);
    setShow7(false);
  };
  let heandleshow4 = () => {
    setShow1(false);
    setShow2(false);
    setShow3(false);
    setShow4(!show4);
    setShow5(false);
    setShow6(false);
    setShow7(false);
  };
  let heandleshow5 = () => {
    setShow1(false);
    setShow2(false);
    setShow3(false);
    setShow4(false);
    setShow5(!show5);
    setShow6(false);
    setShow7(false);
  };
  let heandleshow6 = () => {
    setShow1(false);
    setShow2(false);
    setShow3(false);
    setShow4(false);
    setShow5(false);
    setShow6(!show6);
    setShow7(false);
  };
  let heandleshow7 = () => {
    setShow1(false);
    setShow2(false);
    setShow3(false);
    setShow4(false);
    setShow5(false);
    setShow6(false);
    setShow7(!show7);
  };
  return (
    <>
      <div className="">
        <Container>
          <div className=" flex justify-around py-15">
            <div className="w-150 border-blue-500 h-105 flex items-center justify-center rounded-[20px] border-5">
              <div className="w-145 h-100 border-blue-500  rounded-[10px] border-5 p-7 text-center">
                <div className=" flex justify-center">
                  <MdOutlineEmail className=" text-9xl text-green-600" />
                </div>
                <h2 className=" text-3xl font-bold  text-gray-800">
                  ইমেইল এড্রেস
                </h2>
                <p className=" mt-5 font-medium text-xl">
                  digitalwaveitbd@gmail.com
                </p>
              </div>
            </div>
            <div className="w-150 border-blue-500 h-105 flex items-center justify-center rounded-[20px] border-5">
              <div className="w-145 h-100 border-blue-500  rounded-[10px] border-5 p-7 text-center">
                <div className=" flex justify-center">
                  <IoCall className=" text-9xl text-green-600" />
                </div>
                <h2 className=" text-3xl font-bold  text-gray-800">
                  মোবাইল নাম্বার
                </h2>
                <p className=" mt-5 font-medium text-xl">0162983****</p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className=" py-25">
        <Container>
          <div className=" flex justify-between gap-15 ">
            <div className=" w-full">
              <div className=" border-t border-b border-gray-300 p-3">
                <div
                  onClick={heandleshow1}
                  className=" flex justify-between items-center py-2 cursor-pointer"
                >
                  <h2
                    className={`   font-medium ${show1 ? "text-green-600" : " text-black"}`}
                  >
                    আপনারা কী ধরনের সেবা প্রদান করেন?{" "}
                  </h2>
                  <IoIosArrowDown />
                </div>
                {show1 ? (
                  <p className=" font-bold text-gray-600">
                    আমরা ডিজিটাল মার্কেটিং, ওয়েবসাইট ডিজাইন, ফেসবুক মনিটাইজেশন,
                    এবং সকল ধরনের সোশ্যাল মিডিয়া মার্কেটিং সেবা প্রদান করি।
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className=" border-b border-gray-300 p-3">
                <div className=" flex justify-between items-center py-2 cursor-pointer">
                  <h2
                    onClick={heandleshow2}
                    className={`   font-medium ${show2 ? "text-green-600" : " text-black"}`}
                  >
                    ছোট ও মাঝারি উদ্যোক্তাদের জন্য আপনারা কীভাবে সাহায্য করতে
                    পারেন?
                  </h2>
                  <IoIosArrowDown />
                </div>
                {show2 ? (
                  <p className=" font-bold text-gray-600">
                    আমাদের দশ বছরের অভিজ্ঞতার আলোকে, আমরা উদ্যোক্তাদের সঠিক
                    মার্কেটিং কৌশল প্রদান করি। এর ফলে তারা নতুন কাস্টমার পেতে
                    এবং পুরনো কাস্টমারদের সঙ্গে ভালো সম্পর্ক বজায় রেখে বিক্রি
                    বৃদ্ধি করতে সক্ষম হন।
                  </p>
                ) : (
                  ""
                )}
              </div>

              <div className=" border-b border-gray-300 p-3">
                <div
                  onClick={heandleshow3}
                  className=" flex justify-between items-center py-2 cursor-pointer"
                >
                  <h2
                    className={`   font-medium ${show3 ? "text-green-600" : " text-black"}`}
                  >
                    ফেসবুক মনিটাইজেশনের জন্য কী কী সেবা প্রদান করা হয়?
                  </h2>
                  <IoIosArrowDown />
                </div>
                {show3 ? (
                  <p className=" font-bold text-gray-600">
                    আমরা ফেসবুক পেজ সেটআপ, কন্টেন্ট স্ট্র্যাটেজি, এবং মনিটাইজেশন
                    নীতিমালা পূরণে প্রয়োজনীয় গাইডলাইন প্রদান করি, যাতে আপনার
                    পেজ দ্রুত মনিটাইজ করা যায়।
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className=" border-b border-gray-300 p-3">
                <div
                  onClick={heandleshow4}
                  className=" flex justify-between items-center py-2 cursor-pointer"
                >
                  <h2
                    className={`   font-medium ${show4 ? "text-green-600" : " text-black"}`}
                  >
                    আপনারা কোন প্ল্যাটফর্মে ওয়েবসাইট ডিজাইন করেন?
                  </h2>
                  <IoIosArrowDown />
                </div>
                {show4 ? (
                  <p className=" font-bold text-gray-600">
                    আমরা WordPress, Shopify, এবং অন্যান্য আধুনিক প্ল্যাটফর্ম
                    ব্যবহার করে রেসপন্সিভ এবং ইউজার-ফ্রেন্ডলি ওয়েবসাইট ডিজাইন
                    করি।
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className=" border-b border-gray-300 p-3">
                <div
                  onClick={heandleshow5}
                  className=" flex justify-between items-center py-2 cursor-pointer"
                >
                  <h2
                    className={`   font-medium ${show5 ? "text-green-600" : " text-black"}`}
                  >
                    DigitalWaveIT-এর সাথে কাজ করার সুবিধা কী?
                  </h2>
                  <IoIosArrowDown />
                </div>
                {show5 ? (
                  <p className=" font-bold text-gray-600">
                    আমাদের বিশেষজ্ঞ টিম সর্বোচ্চ মানের পরিষেবা প্রদান করে এবং
                    আমরা প্রতিটি ক্লায়েন্টের ব্যবসার অনন্য চাহিদা অনুযায়ী
                    কাস্টমাইজড সেবা নিশ্চিত করি।
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className=" border-b border-gray-300 p-3">
                <div
                  onClick={heandleshow6}
                  className=" flex justify-between items-center py-2 cursor-pointer"
                >
                  <h2
                    className={`   font-medium ${show6 ? "text-green-600" : " text-black"}`}
                  >
                    সোশ্যাল মিডিয়া মার্কেটিংয়ে আপনারা কীভাবে সহায়তা করেন?
                  </h2>
                  <IoIosArrowDown />
                </div>
                {show6 ? (
                  <p className=" font-bold text-gray-600">
                    আমরা সোশ্যাল মিডিয়ার মাধ্যমে আপনার ব্র্যান্ডকে পরিচিত করতে
                    কন্টেন্ট ক্রিয়েশন, বিজ্ঞাপন পরিচালনা, এবং এনগেজমেন্ট
                    বাড়ানোর কৌশল প্রদান করি।
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className=" border-b border-gray-300 p-3">
                <div
                  onClick={heandleshow7}
                  className=" flex justify-between items-center py-2 cursor-pointer"
                >
                  <h2
                    className={`   font-medium ${show7 ? "text-green-600" : " text-black"}`}
                  >
                    আপনাদের সেবা নেওয়ার জন্য কীভাবে যোগাযোগ করবো?
                  </h2>
                  <IoIosArrowDown />
                </div>
                {show7 ? (
                  <p className=" font-bold text-gray-600">
                    আপনারা আমাদের অফিসিয়াল ওয়েবসাইট, ফোন নম্বর, বা ইমেইলের
                    মাধ্যমে আমাদের সঙ্গে যোগাযোগ করতে পারেন। আমাদের টিম দ্রুত
                    উত্তর দেওয়ার জন্য সর্বদা প্রস্তুত।
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className=" w-full">
              <h2 className=" text-3xl font-bold text-blue-800">
                যোগাযোগ করুন
              </h2>
              <div className=" flex gap-2 mt-5">
                <input
                  type="text"
                  className=" border outline-none w-full py-3 pl-2 font-medium mt-3 border-gray-200 rounded-[10px] "
                  placeholder="FastName *"
                />
                <input
                  type="text"
                  className=" border outline-none w-full py-3 pl-2 font-medium mt-3 border-gray-200 rounded-[10px] "
                  placeholder="LestName *"
                />
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  className=" border outline-none w-full py-3 pl-2 font-medium mt-3 border-gray-200 rounded-[10px] "
                  placeholder="Phone Number *"
                />
                <input
                  type="text"
                  className=" border mt-8 outline-none w-full py-3 pl-2 font-medium  border-gray-200 rounded-[10px] "
                  placeholder="Email *"
                />
              </div>
              <div className="mt-8">
                <textarea
                  type="text"
                  placeholder="Message*"
                  className=" outline-none border w-full py-3 pl-2 font-medium mt-3 border-gray-200 rounded-[10px] h-25"
                />
              </div>
              <button className=" cursor-pointer px-4 mt-15 bg-green-600 text-xl  text-white font-medium py-2 rounded-[15px]">
                Submit
              </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Contact;
