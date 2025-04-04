import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import RootLayout from "./layout/RootLayout";
import ContactUs from "./pages/ContactUs";

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
         <Route index element={<Home />}/>
         <Route path="properties" element={<Properties />}/>
         <Route path="contactus" element={<ContactUs />}/>
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  );
};

export default App;