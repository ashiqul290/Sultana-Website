import React from "react";
import aboutimg from '../assets/Ceo-Rakib-1536x2048.webp'
const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-20">
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
          DigitalWaveIT একটি উদ্ভাবনী প্রতিষ্ঠান, যা ডিজিটাল মার্কেটিং এবং প্রযুক্তি ভিত্তিক সেবার মাধ্যমে ক্ষুদ্র ও মাঝারি উদ্যোক্তাদের ব্যবসায়িক সাফল্যের নতুন মাত্রা দিতে কাজ করে। আমাদের মূল লক্ষ্য হলো ডিজিটাল প্ল্যাটফর্মের মাধ্যমে ব্র্যান্ডকে গড়ে তোলা এবং তাদের গ্রাহকদের কাছে কার্যকরভাবে পৌঁছে দেওয়া।
          </p>

          <p className="text-black mt-12 text-xl leading-relaxed">
          আমাদের অভিজ্ঞ টিম ডিজিটাল মার্কেটিং, ওয়েবসাইট ডিজাইন, ফেসবুক মনিটাইজেশন এবং সব ধরনের সোশ্যাল মিডিয়া মার্কেটিংয়ে দক্ষ। দীর্ঘ দশ বছরের অভিজ্ঞতার আলোকে, আমরা উদ্যোক্তাদের সঠিক মার্কেটিং স্ট্র্যাটেজি এবং কার্যকর পরামর্শ দিয়ে ব্যবসার প্রবৃদ্ধি বাড়াতে সহায়তা করি।
          </p>

          <button className="mt-10 bg-red-600   text-white px-6 py-3 rounded-full font-medium hover:bg-red-500 cursor-pointer duration-300">
            ABOUT MORE
          </button>
        </div>

        {/* Right Image */}
        <div className="relative h-200 rounded-[10px]">
          <img
            src={aboutimg}
            alt="Team"
            className="rounded-xl w-full h-full"
          />

          {/* Bottom Card */}
          <div className="absolute bottom-0 right-0 bg-linear-to-b  from-blue-700 to-blue-950 text-white px-8 py-5 rounded-tl-xl rounded-br-xl shadow-lg">
            <h4 className="font-bold text-lg">JONY RAKIB</h4>
            <p className="text-sm opacity-90">CEO & FOUNDER</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;