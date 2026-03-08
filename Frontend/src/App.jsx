import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Rootlayout from "./layout/Rootlayout";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import FACEBOOKMARKETING from "./page/FACEBOOKMARKETING";

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
