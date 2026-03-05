import React from 'react'
import Container from './Container'
import Lottie from 'lottie-react'
import animationData from '../SVG/analysis-digital-marketing.json'
const BusinessSVG = () => {
  return (
    <>
    <div className="">
        <Container>
            <div className=" flex justify-between items-center">
                <div className="">
                <h3 className=' text-5xl font-bold text-green-800'>আপনি কি ব্যবসায়</h3>
                <h3 className=' font-bold text-3xl mt-7 text-red-700'>উন্নতি করতে চান?</h3>
                <p className=' w-130 font-medium text-xl mt-24'>আমাদের অভিজ্ঞ মার্কেটিং টিম আপনার বাজেট এবং চাহিদা অনুযায়ী একটি মার্কেটিং পরিকল্পনা করে তার প্রতিটি ধাপ গাইড করবেন এবং ব্যবসার উন্নতির ক্ষেত্রে সার্বিক সহযোগিতা করবেন।</p>

                <button className=' mt-16 bg-red-600 hover:bg-red-500 text-white px-6 py-4 rounded-full font-semibold'>Contact us now</button>
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

export default BusinessSVG