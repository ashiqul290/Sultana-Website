import { Trophy, Headphones, Rocket, CreditCard, Container } from "lucide-react";

const features = [
  {
    icon: <Trophy size={50} />,
    title: "এক্সপেরিয়েন্স",
    desc: "ডিজিটালওয়েভআইটি ১৫০০+ ক্লায়েন্ট এবং ২০০০+ প্রজেক্টে কাজ করেছে। ডিজিটাল মার্কেটিং, ফেসবুক ও ইউটিউব মার্কেটিং সেবা দিয়ে হাজার হাজার মানুষের অনলাইন সাফল্য নিশ্চিত করেছে।",
  },
  {
    icon: <Headphones size={50} />,
    title: "২৪/৭ কাস্টমার সাপোর্ট",
    desc: "ডিজিটালওয়েভআইটি সবসময় দ্রুত সাপোর্ট প্রদান করে। আমাদের টিম ২৪/৭ কাজ করে যাতে গ্রাহকদের যেকোনো সমস্যার দ্রুত সমাধান নিশ্চিত হয়।",
  },
  {
    icon: <Rocket size={50} />,
    title: "দ্রুত ডেলিভারি",
    desc: "ডিজিটালওয়েভআইটি সময়মতো সেবা প্রদান করে। ক্লায়েন্টদের সময়ের গুরুত্ব বুঝে আমরা দ্রুত ডেলিভারি নিশ্চিত করি।",
  },
  {
    icon: <CreditCard size={50} />,
    title: "সাশ্রয়ী সমাধান",
    desc: "ডিজিটালওয়েভআইটি সাশ্রয়ী মূল্যে মানসম্মত সেবা প্রদান করে। আমাদের লক্ষ্য হলো সবার জন্য সহজলভ্য ডিজিটাল সেবা নিশ্চিত করা।",
  },
];

export default function Features() {
  return (
    <div className=" my-26">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {features.map((item, index) => (
          <div
            key={index}
            className="bg-linear-to-b from-blue-700 to-blue-950 text-white p-8 rounded-xl shadow-lg text-center hover:scale-105 transition duration-300"
          >
            <div className="flex justify-center mb-4">
              {item.icon}
            </div>

            <h3 className="text-2xl font-bold mb-4">
              {item.title}
            </h3>

            <p className="text-sm leading-7">
              {item.desc}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}