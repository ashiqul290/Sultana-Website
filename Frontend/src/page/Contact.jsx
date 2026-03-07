import React from "react";
import Container from "../Components/Container";
import { MdOutlineEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Contact = () => {
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
              <div className=" border">
                <div className=" flex justify-between items-center py-2 cursor-pointer">
                  <h2 className=" text-green-600 font-medium">
                    আপনারা কী ধরনের সেবা প্রদান করেন?{" "}
                  </h2>
                  <IoIosArrowDown />
                </div>
                <p>
                  আমরা ডিজিটাল মার্কেটিং, ওয়েবসাইট ডিজাইন, ফেসবুক মনিটাইজেশন,
                  এবং সকল ধরনের সোশ্যাল মিডিয়া মার্কেটিং সেবা প্রদান করি।
                </p>
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
