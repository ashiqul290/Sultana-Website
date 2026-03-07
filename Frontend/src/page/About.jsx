import React from "react";
import Container from "../Components/Container";
import aboutimg from "../assets/Ceo-Rakib-1536x2048.webp";
import { FaHandshake, FaUserFriends, FaWhatsapp } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoMdShare } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import mission from "../assets/OUR-MISSION-700x700.webp";
import vision from "../assets/Our-Vision-700x700.webp";
const About = () => {
  const features = [
    {
      icon: <FaUserFriends size={50} />,
      title: "বিশেষজ্ঞ টিম",
      desc: "আমাদের অভিজ্ঞ টিম সব সময় আপনার ব্যবসার চাহিদা অনুযায়ী সেরা সমাধান দিতে প্রস্তুত।",
    },
    {
      icon: <BsGraphUpArrow size={50} />,
      title: "ব্যবসায়িক প্রবৃদ্ধি",
      desc: "আমাদের কৌশলগুলো আপনার বিক্রি বাড়ানোর জন্য ডিজাইন করা।",
    },
    {
      icon: <FaHandshake size={50} />,
      title: "গ্রাহক সম্পর্ক",
      desc: "আমরা কেবল নতুন কাস্টমার আকর্ষণ করাই নয়, আপনার বর্তমান কাস্টমারদের সাথে গভীর সম্পর্ক গড়ে তুলতেও সাহায্য করি।",
    },
    {
      icon: <IoMdShare size={50} />,
      title: "সোশ্যাল মিডিয়া এক্সপার্টিজ",
      desc: "আমরা ফেসবুক মনিটাইজেশনসহ সব ধরনের সোশ্যাল মিডিয়া প্ল্যাটফর্মে আপনার উপস্থিতি বাড়ানোর জন্য কাজ করি।",
    },
  ];
  return (
    <>
      <div className="bg-gray-100 mb-20">
        <Container>
          <div className="">
            <section className=" py-20">
              <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
                {/* Left Content */}
                <div>
                  <h2 className="text-5xl font-bold text-green-800">
                    ডিজিটাল ওয়েব আইটি
                  </h2>

                  <h3 className="text-red-600 font-semibold text-2xl mt-6">
                    একটি ডিজিটাল মার্কেটিং এজেন্সি
                  </h3>

                  <p className="text-black mt-15 text-xl leading-relaxed">
                    DigitalWaveIT একটি উদ্ভাবনী প্রতিষ্ঠান, যা ডিজিটাল মার্কেটিং
                    এবং প্রযুক্তি ভিত্তিক সেবার মাধ্যমে ক্ষুদ্র ও মাঝারি
                    উদ্যোক্তাদের ব্যবসায়িক সাফল্যের নতুন মাত্রা দিতে কাজ করে।
                    আমাদের মূল লক্ষ্য হলো ডিজিটাল প্ল্যাটফর্মের মাধ্যমে
                    ব্র্যান্ডকে গড়ে তোলা এবং তাদের গ্রাহকদের কাছে কার্যকরভাবে
                    পৌঁছে দেওয়া।
                  </p>

                  <p className="text-black mt-12 text-xl leading-relaxed">
                    আমাদের অভিজ্ঞ টিম ডিজিটাল মার্কেটিং, ওয়েবসাইট ডিজাইন,
                    ফেসবুক মনিটাইজেশন এবং সব ধরনের সোশ্যাল মিডিয়া মার্কেটিংয়ে
                    দক্ষ। দীর্ঘ দশ বছরের অভিজ্ঞতার আলোকে, আমরা উদ্যোক্তাদের সঠিক
                    মার্কেটিং স্ট্র্যাটেজি এবং কার্যকর পরামর্শ দিয়ে ব্যবসার
                    প্রবৃদ্ধি বাড়াতে সহায়তা করি।
                  </p>
                  <p className="text-black mt-12 text-xl leading-relaxed">
                    আমাদের সেবার মাধ্যমে, আপনি সহজেই নতুন কাস্টমার আকর্ষণ করতে
                    পারবেন এবং পুরনো কাস্টমারদের সাথে দীর্ঘমেয়াদী সম্পর্ক গড়ে
                    তুলতে সক্ষম হবেন। আমরা বিশ্বাস করি, গ্রাহকদের সাথে নিয়মিত
                    এবং কার্যকর এনগেজমেন্ট বজায় রেখে বিক্রির হার দশ গুণ পর্যন্ত
                    বাড়ানো সম্ভব।
                  </p>
                </div>

                {/* Right Image */}
                <div className="relative h-200 rounded-[10px]">
                  <img
                    src={aboutimg}
                    alt="Team"
                    className="rounded-xl w-full h-full"
                  />

                  {/* Bottom Card */}
                  <div className="absolute -bottom-20 right-0 bg-linear-to-b  from-blue-700 to-blue-950 text-white px-8 py-5 rounded-tl-xl rounded-br-xl shadow-lg">
                    <h4 className="font-bold text-lg">Sultana Akthar</h4>
                    <p className="text-sm opacity-90">working time</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Container>
      </div>
      <div className="my-10">
        <Container>
          <div className=" flex justify-around ">
            <div className="w-150 border-blue-500 h-105 flex items-center justify-center rounded-[20px] border-5">
              <div className="w-145 h-100 border-blue-500  rounded-[10px] border-5 p-7 text-center">
                <div className=" flex justify-center">
                  <img src={mission} className="w-40" alt="" />
                </div>
                <h2 className=" text-3xl font-bold  text-gray-800">
                  Our Mission
                </h2>
                <p className=" mt-5 font-medium text-xl">
                  আমাদের মিশন হলো, উদ্ভাবনী ডিজিটাল মার্কেটিং এবং ওয়েবসাইট
                  ডিজাইন সেবার মাধ্যমে উদ্যোক্তাদের ব্যবসায়িক সাফল্যের পথে
                  অগ্রসর করা।
                </p>
              </div>
            </div>
            <div className="w-150 border-blue-500 h-105 flex items-center justify-center rounded-[20px] border-5">
              <div className="w-145 h-100 border-blue-500  rounded-[10px] border-5 p-7 text-center">
                <div className=" flex justify-center">
                  <img src={vision} className="w-40" alt="" />
                </div>
                <h2 className=" text-3xl font-bold  text-gray-800">
                  Our Vision
                </h2>
                <p className=" mt-5 font-medium text-xl">
                  একটি আধুনিক ও প্রযুক্তি-নির্ভর ব্যবসায়িক কমিউনিটি গড়ে তোলা,
                  যেখানে ক্ষুদ্র ও মাঝারি ব্যবসাগুলো ডিজিটাল প্ল্যাটফর্মের
                  মাধ্যমে সর্বোচ্চ সাফল্য অর্জন করতে পারে।
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className=" my-20">
        <Container>
          <div className="">
            <h2 className="text-5xl text-center font-bold text-green-600">
              Why Choose DigitalWaveIT?
            </h2>
            <div className=" grid grid-cols-4 gap-4 my-10">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="bg-linear-to-b from-blue-700 to-blue-950 text-white p-8 rounded-xl shadow-lg text-center hover:scale-105 transition duration-300"
                >
                  <div className="flex justify-center mb-4">{item.icon}</div>

                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>

                  <p className="text-sm leading-7">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <div className=" py-25">
        <Container>
          <div className=" flex justify-between gap-15">
            <div className="">
              <h2 className="text-5xl font-bold text-indigo-800">
                আমাদের সাথে যোগাযোগ করুন
              </h2>
              <p className=" text-xl mt-8 font-bold w-140 text-black">
                আমরা আপনার সঙ্গে কথা বলতে আগ্রহী। নিচের তথ্য ব্যবহার করে
                নির্দ্বিধায় আমাদের সঙ্গে যোগাযোগ করুন।
              </p>

              <div className=" flex gap-4 mt-15 w-full">
                <div className=" border inline-block px-2 py-2 rounded-[10px] border-gray-200 text-blue-700">
                  <FaWhatsapp className=" text-3xl" />
                </div>
                <div className="">
                  <h3 className=" text-xl font-medium text-black"> WhatsUp</h3>
                  <h3 className=" text-[16px] font-medium text-black">
                    {" "}
                    019666*****
                  </h3>
                </div>
              </div>
              <div className=" flex gap-4 mt-10">
                <div className=" border inline-block px-2 py-2 rounded-[10px] border-gray-200 text-blue-700">
                  <MdOutlineEmail className=" text-3xl" />
                </div>
                <div className="">
                  <h3 className=" text-xl font-medium text-black"> Email Me</h3>
                  <h3 className=" text-[16px] font-medium text-black">
                    {" "}
                    sultana***@gmail.com
                  </h3>
                </div>
              </div>
            </div>
            <div className=" w-full">
              <h2 className=" text-2xl font-bold text-blue-800">Contcat Me!</h2>
              <div className=" flex gap-2">
                <input
                  type="text"
                  className=" border w-full py-3 pl-2 font-medium mt-3 border-gray-200 rounded-[10px] "
                  placeholder="FastName *"
                />
                <input
                  type="text"
                  className=" border w-full py-3 pl-2 font-medium mt-3 border-gray-200 rounded-[10px] "
                  placeholder="LestName *"
                />
              </div>
              <div className="">
                <input
                  type="text"
                  className=" border w-full py-3 pl-2 font-medium mt-3 border-gray-200 rounded-[10px] "
                  placeholder="Phone Number *"
                />
                <input
                  type="text"
                  className=" border w-full py-3 pl-2 font-medium mt-3 border-gray-200 rounded-[10px] "
                  placeholder="Email *"
                />
              </div>
              <div className="">
                <textarea
                  type="text"
                  placeholder="Message*"
                  className=" border w-full py-3 pl-2 font-medium mt-3 border-gray-200 rounded-[10px] h-25"
                />
              </div>
              <button className=" cursor-pointer px-4 mt-2 bg-green-600 text-xl  text-white font-medium py-2 rounded-[15px]">
                Submit
              </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default About;
