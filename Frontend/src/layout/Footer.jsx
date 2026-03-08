import { Phone, Mail, MapPin } from "lucide-react";
import Container from "../Components/Container";
import logo from '../assets/logo.png'
export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-10">
      <Container>

        {/* Logo */}
        <div className="flex justify-center mb-12 h-30 overflow-hidden">
                         <img src={logo} className=" scale-180"  alt=""  />
                       
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* Services */}
          <div>
            <h3 className="text-green-500 text-2xl font-semibold mb-4">
              সেবা সমূহ
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className=" hover:text-green-600 duration-200">ফেসবুক মার্কেটিং</li>
              <li className=" hover:text-green-600 duration-200">প্রডাক্ট</li>
              <li className=" hover:text-green-600 duration-200">গ্রাফিক ডিজাইন</li>
              <li className=" hover:text-green-600 duration-200">বিজনেস কনসাল্টিং</li>
              <li className=" hover:text-green-600 duration-200">লজিক ডেভেলপমেন্ট</li>
              <li className=" hover:text-green-600 duration-200">ওয়েব ডেভেলপমেন্ট</li>
            </ul>
          </div>

          {/* Design */}
          <div>
            <h3 className="text-green-500 text-2xl font-semibold mb-4">
              ডিজাইন
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className=" hover:text-green-600 duration-200">বিজনেস ওয়েবসাইট</li>
              <li className=" hover:text-green-600 duration-200">নিউজ ওয়েবসাইট</li>
              <li className=" hover:text-green-600 duration-200">মাল্টি ভেন্ডর ওয়েবসাইট</li>
              <li className=" hover:text-green-600 duration-200">কর্পোরেট ওয়েবসাইট</li>
              <li className=" hover:text-green-600 duration-200">ল্যান্ডিং পেজ ডিজাইন</li>
              <li className=" hover:text-green-600 duration-200">ফ্রিল্যান্স ওয়েবসাইট</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-green-500 text-2xl font-semibold mb-4">
              যোগাযোগের ঠিকানা
            </h3>

            <div className="space-y-4 text-gray-300">

              <div className="flex items-start gap-3">
                <Phone className="text-green-500" size={40}/>
                <p className=" hover:text-green-600 duration-200" >
                  মোবাইল নাম্বার <br />
                  +8801966006427
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="text-green-500" size={40}/>
                <p className=" hover:text-green-600 duration-200">
                  ইমেইল এড্রেস <br />
                  socialwave2005@gmail.com
                </p>
              </div>

              {/* <div className="flex items-start gap-3">
                <MapPin className="text-green-500" size={20}/>
                <p>
                  অফিসের ঠিকানা <br />
                  ঝিনাইদহ সদর, ঝিনাইদহ
                </p>
              </div> */}

            </div>
          </div>

          {/* Business Info */}
          <div>
            <h3 className="text-green-500 text-2xl font-semibold mb-4">
              বিজনেস ইনফো
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className=" hover:text-green-600 duration-200">Terms and Conditions</li>
              <li className=" hover:text-green-600 duration-200">Return & Refund Policy</li>
              <li className=" hover:text-green-600 duration-200">Privacy Policy</li>
              <li className=" hover:text-green-600 duration-200">About Us</li>
              <li className=" hover:text-green-600 duration-200">Contact Us</li>
            </ul>

            {/* <p className="mt-4 text-sm text-white font-semibold">
              Trade License : <br />
              TRAD/DNCC/003232/2024
            </p> */}
          </div>

        </div>
      </Container>
    </footer>
  );
}