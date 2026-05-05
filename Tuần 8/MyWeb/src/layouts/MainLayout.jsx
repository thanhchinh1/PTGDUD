import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginModal from "../components/LoginModal";

export default function MainLayout() {
  const [openLogin, setOpenLogin] = useState(false);

  useEffect(() => {
    const handleOpenLogin = () => setOpenLogin(true);

    window.addEventListener("chefify-open-login", handleOpenLogin);

    return () => {
      window.removeEventListener("chefify-open-login", handleOpenLogin);
    };
  }, []);

  return (
    <>
      <Navbar onOpenLogin={() => setOpenLogin(true)} />
      <main className="container page-content">
        <Outlet />
      </main>
      <Footer />
      <LoginModal open={openLogin} onClose={() => setOpenLogin(false)} />
    </>
  );
}
