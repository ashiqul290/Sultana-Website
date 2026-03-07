import React from 'react'
import Container from './Container'
import Lottie from 'lottie-react'
import animationData from '../SVG/business-investor-gaining-profit-from-investment.json'
const GrowBusiness = () => {
  return (
    <>
    <div className="my-20">
        <Container>
            <div className=" flex justify-between items-center">
                <div className="">
                <h3 className=' text-5xl font-bold text-green-800'>ডিজিটাল মার্কেটিং এর মাধ্যমে আপনার ব্যবসা বাড়াতে</h3>
                <h3 className=' font-bold text-3xl mt-7 text-red-700'>আমাদের সাথে যোগাযোগ করুন
</h3>
                <p className=' w-150 font-medium text-xl mt-24'>আপনার ব্যবসার মার্কেটিং নিয়ে দুশ্চিন্তায় আছেন?
মার্কেটিং সংক্রান্ত যেকোনো সমস্যা নিয়ে আলোচনা করতে এবং সঠিক গাইডলাইন পেতে আমাদের ডিজিটাল মার্কেটিং টিমের সাথে একটি ফ্রি মিটিং বুক করুন।

আমাদের অভিজ্ঞ টিম আপনার ব্যবসার জন্য সঠিক স্ট্র্যাটেজি ও পরামর্শ দিয়ে আপনার ব্র্যান্ডকে নেক্সট লেভেলে নিয়ে যেতে সহায়তা করবে।</p>

                <button className=' mt-16 bg-red-600 hover:bg-red-500 text-white px-6 py-4 rounded-full font-semibold'>Book a Free Consultation</button>
            </div>
            <div className=" ">
                 <Lottie animationData={animationData} loop={true} />
            </div>
            </div>
        </Container>
    </div>
    </>
  )
}

export default GrowBusiness