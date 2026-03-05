import { FaFacebookF } from "react-icons/fa";
import { SiGoogleads } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { GiMaterialsScience } from "react-icons/gi";
import { FaRocket } from "react-icons/fa";
import { FaDev } from "react-icons/fa";

const services = [
  {
    icon: <FaFacebookF />,
    title: "ফেসবুক মার্কেটিং",
    desc: "আপনার ব্যবসার প্রচারের জন্য কার্যকর ফেসবুক মার্কেটিং ক্যাম্পেইন পরিচালনা করা হয়।",
  },
  {
    icon: <SiGoogleads />,
    title: "এড ক্রিয়েট",
    desc: "আকর্ষণীয় এড ডিজাইন ও কনটেন্ট তৈরি করে আপনার ব্র্যান্ডকে আরও শক্তিশালী করা।",
  },
  {
    icon: <MdDesignServices />,
    title: "গ্রাফিক ডিজাইন",
    desc: "প্রফেশনাল গ্রাফিক ডিজাইন সার্ভিস যা আপনার ব্র্যান্ডকে আলাদা করে তুলবে।",
  },
  {
    icon: <GiMaterialsScience />,
    title: "বিজনেস মার্কেটিং",
    desc: "ডিজিটাল মার্কেটিং কৌশল ব্যবহার করে আপনার ব্যবসার দ্রুত বৃদ্ধি নিশ্চিত করা।",
  },
  {
    icon: <FaRocket />,
    title: "ল্যান্ডিং পেজ ডিজাইন",
    desc: "কনভার্সন ফোকাসড ল্যান্ডিং পেজ ডিজাইন যা আপনার সেল বৃদ্ধি করবে।",
  },
  {
    icon: <FaDev />,
    title: "ওয়েব ডেভেলপমেন্ট",
    desc: "আধুনিক প্রযুক্তি ব্যবহার করে দ্রুত এবং নিরাপদ ওয়েবসাইট ডেভেলপমেন্ট।",
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-5 text-center">
        
        <h2 className="text-5xl font-bold text-red-600">
          আমাদের বিশেষ সেবা সমূহ
        </h2>

        <p className="text-gray-600 mt-10 text-2xl px-5">
          আমরা সকল ধরনের ব্যবসার জন্য সময়োপযোগী এবং কার্যকর সমাধান প্রদান করে থাকি। আপনার জন্য উপযুক্ত সমাধানটি খুঁজে নিন এবং আপনার সাফল্যের পথে আরও একধাপ এগিয়ে যান।
        </p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-green-700 text-white p-8 rounded-xl shadow-lg hover:scale-105 duration-300"
            >
              <div className="text-5xl mb-4 flex justify-center">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>

              <p className="text-sm opacity-90">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}