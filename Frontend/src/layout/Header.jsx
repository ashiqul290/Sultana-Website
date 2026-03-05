import { Home, Wrench, Info, Phone } from "lucide-react";
import Container from "../Components/Container";
import { NavLink } from "react-router";
import { IoIosArrowDown } from "react-icons/io";

export default function Header() {
  let Navbar = [
  {
    name: "Home",
    link: "",
  },
  {
    name: "Our Services",
    icon: <IoIosArrowDown />,
    link: "services",
    submenu: [
      { name: "Facebook Marketing", link: "facebook-marketing" },
      { name: "Graphic Design", link: "graphic-design" },
      { name: "Web Development", link: "web-development" },
    ],
  },
  {
    name: "About Us",
    link: "about",
  },
  {
    name: "Contact Us",
    link: "contact",
  },
  {
    name: "Our Product",
    link: "product",
  },
];
  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-black/90 text-white text-sm">
        <Container>
          <div className="flex items-center">
            <p className=" text-[18px] font-medium border-r px-4 py-5">
              Mail us : digitalwaveitbd@gmail.com
            </p>
            <p className="text-[18px] font-medium   px-4">
              Phone Number : 01629-834196
            </p>
          </div>
        </Container>
      </div>

      {/* Navbar */}
      <div className="bg-gray-100 shadow sticky top-0 left-0 w-full z-999">
        <Container>
          <div className=" flex justify-between items-center">
            <div className="">
              <div className="flex items-center gap-2">
                <span className="text-7xl font-bold text-green-600">S</span>
                <div>
                  <h1 className="font-bold text-2xl">
                    DIGITAL <span className="text-red-500">WAVE</span>
                  </h1>
                  <p className="text-[10px] tracking-widest text-gray-500">
                    DIGITAL MARKETING AGENCY
                  </p>
                </div>
              </div>
            </div>
            <div className=" py-7 ">
            <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
  {Navbar.map((item, index) => (
    <li key={index} className="relative group">

      <NavLink
        to={item.link}
        className={({ isActive }) =>
          `relative flex items-center gap-1 text-xl cursor-pointer
          after:content-[''] after:absolute after:left-0 after:-bottom-1
          after:h-[1px] after:bg-green-600
          after:transition-all after:duration-300
          ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"} `
        }
      >
        {item.name} {item.submenu  && item.icon}
      </NavLink>

      {/* Dropdown */}
      {item.submenu && (
        <ul className="absolute left-0 top-10 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

          {item.submenu.map((sub, i) => (
            <NavLink key={i} to={sub.link}>
              <li className="px-5 py-3 hover:bg-gray-500 hover:text-white cursor-pointer">
                {sub.name}
              </li>
            </NavLink>
          ))}

        </ul>
      )}

    </li>
  ))}
</ul>
            </div>
            <div className="">
              <button className="bg-red-600 hover:bg-red-500 text-white px-6 py-4 rounded-full font-semibold">
                HIRE INFLUENCERS
              </button>
            </div>
          </div>
        </Container>
      </div>
 
    </div>
  );
}
