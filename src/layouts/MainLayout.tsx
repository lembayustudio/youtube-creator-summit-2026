import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../sections/Footer/Footer";

export default function MainLayout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}