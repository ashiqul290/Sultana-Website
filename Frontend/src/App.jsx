import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Rootlayout from "./layout/Rootlayout";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import FACEBOOKMARKETING from "./page/FACEBOOKMARKETING";
import GraphicsDesign from "./page/GraphicsDesign";
import E_Commerce from "./page/E_Commerce";
import BusinessWebsite from "./page/BusinessWebsite";
import TravelAgency from "./page/TravelAgency";
import RealEstateWebsite from "./page/RealEstateWebsite";
import Educational from "./page/Educational";
import NewsPortal from "./page/NewsPortal";
import LandingPage from "./page/LandingPage";

function App() {
let router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "facebook-marketing", Component: FACEBOOKMARKETING },
      { path: "graphic-design", Component: GraphicsDesign },
      { path: "e-commerce", Component: E_Commerce },
      { path: "business-website", Component: BusinessWebsite },
      { path: "travel-agency", Component: TravelAgency },
      { path: "real-estate-website", Component: RealEstateWebsite },
      { path: "educational-website", Component: Educational },
      { path: "news-portal", Component: NewsPortal },
      { path: "landing-page", Component: LandingPage },
     
    ],
  },
]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
