import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";

const App = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      // { path: "who-we-are", element: <WhoWeAre /> },
      // { path: "services", element: <Services /> },
      // { path: "projects", element: <Projects /> },
      // { path: "services/:slug", element: <ServiceDetail /> },
      // { path: "gallery", element: <Gallery /> },
      // { path: "contact", element: <Contact /> },
      // { path: "booking", element: <Booking /> },
      // { path: "privacy", element: <Privacy /> },
      // { path: "*", element: <NotFound /> },
    ],
  },
]);

export default App;
