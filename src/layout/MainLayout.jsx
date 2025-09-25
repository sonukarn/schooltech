import React from "react";
import { Outlet } from "react-router-dom";

// import WhatsAppButton from './WhatsAppButton'

import Header from "../sections/Header";
import Footer from "../sections/Footer";
import useScrollToTop from "../hooks/useScrollToTop";

export default function MainLayout() {
  useScrollToTop();
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main className="flex-1">{<Outlet />}</main>
      <Footer />
      {/* <WhatsAppButton /> */}
    </div>
  );
}
