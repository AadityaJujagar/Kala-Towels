import { NavLink } from "react-router-dom";
import NavLogo from "../../../public/assets/nav-logo.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useEffect, useState } from "react";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#0A142F] w-[100vw] text-white overflow-x-hidden flex mx-auto flex-col justify-center items-center p-16 max-sm:mt-8 max-sm:p-4">
      <div className="flex flex-col gap-8 justify-center items-center">
        <NavLink to="/">
          <div className="flex justify-center items-center gap-2">
            <img className="w-16" src={NavLogo} alt="" />
            <p className="font-medium text-[20px] text-white">Kala Towels</p>
          </div>
        </NavLink>
        <div className="flex justify-center items-center xl:gap-16 lg:gap-16 sm:gap-4 max-sm:flex-col max-sm:gap-4">
          <NavLink to="/">
            <p className="text-base text-center">Home</p>
          </NavLink>
          <NavLink to="/products">
            <p className="text-base text-center">Products</p>
          </NavLink>
          <NavLink to="/about">
            <p className="text-base text-center">About</p>
          </NavLink>
          <NavLink to="/contact">
            <p className="text-base text-center">Contact</p>
          </NavLink>
        </div>
        <div className="flex items-center justify-center gap-4">
          <a href="#">
            <FacebookIcon />
          </a>
          <a href="#">
            <InstagramIcon />
          </a>
          <a href="#">
            <CallIcon />
          </a>
          <a href="#">
            <WhatsAppIcon />
          </a>
          <a href="#">
            <MailOutlineIcon />
          </a>
        </div>
        <p className="text-[14px] text-slate-200">
          © {currentYear} Naval Handloom. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;