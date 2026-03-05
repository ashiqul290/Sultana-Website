import { Phone, Mail, MapPin } from "lucide-react";
import Container from "../Components/Container";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-10">
      <Container>

        {/* Logo */}
        <div className="flex justify-center mb-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold">
              <span className="text-green-500">Sultana</span> DIGITAL{" "}
              <span className="text-red-500">WAVE</span>
            </h1>
            <p className="text-sm tracking-widest text-gray-400">
              DIGITAL MARKETING AGENCY
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* Services */}
          <div>
            <h3 className="text-green-500 text-xl font-semibold mb-4">
              সেবা সমূহ
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>ফেসবুক মার্কেটিং</li>
              <li>প্রডাক্ট</li>
              <li>গ্রাফিক ডিজাইন</li>
              <li>বিজনেস কনসাল্টিং</li>
              <li>লজিক ডেভেলপমেন্ট</li>
              <li>ওয়েব ডেভেলপমেন্ট</li>
            </ul>
          </div>

          {/* Design */}
          <div>
            <h3 className="text-green-500 text-xl font-semibold mb-4">
              ডিজাইন
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>বিজনেস ওয়েবসাইট</li>
              <li>নিউজ ওয়েবসাইট</li>
              <li>মাল্টি ভেন্ডর ওয়েবসাইট</li>
              <li>কর্পোরেট ওয়েবসাইট</li>
              <li>ল্যান্ডিং পেজ ডিজাইন</li>
              <li>ফ্রিল্যান্স ওয়েবসাইট</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-green-500 text-xl font-semibold mb-4">
              যোগাযোগের ঠিকানা
            </h3>

            <div className="space-y-4 text-gray-300">

              <div className="flex items-start gap-3">
                <Phone className="text-green-500" size={20}/>
                <p>
                  মোবাইল নাম্বার <br />
                  +8801629-834196
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="text-green-500" size={20}/>
                <p>
                  ইমেইল এড্রেস <br />
                  digitalwaveitbd@gmail.com
                </p>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="text-green-500" size={20}/>
                <p>
                  অফিসের ঠিকানা <br />
                  ঝিনাইদহ সদর, ঝিনাইদহ
                </p>
              </div>

            </div>
          </div>

          {/* Business Info */}
          <div>
            <h3 className="text-green-500 text-xl font-semibold mb-4">
              বিজনেস ইনফো
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>Terms and Conditions</li>
              <li>Return & Refund Policy</li>
              <li>Privacy Policy</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>

            <p className="mt-4 text-sm text-white font-semibold">
              Trade License : <br />
              TRAD/DNCC/003232/2024
            </p>
          </div>

        </div>
      </Container>
    </footer>
  );
}