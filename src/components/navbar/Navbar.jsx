import { NavLink, useLocation } from "react-router-dom";
import NavLogo from "../../../public/assets/nav-logo.svg";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [pageIdentifier, setPageIdentifier] = useState("home");
  const [menu, setMenu] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname.replace("/", "");
    setPageIdentifier(currentPath || "home");
  }, [location]);

  const clickHandler = (element) => {
    setPageIdentifier(element);
  };

  const clickMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <nav className="xl:w-[1024px] overflow-x-hidden lg:w-[1024px] mx-auto flex items-center p-2 justify-between">
        <NavLink to="/">
          <div className="flex justify-center items-center gap-1">
            <img className="w-16" src={NavLogo} alt="" />
            <div className="flex flex-col justify-center items-start">
              <p className="font-black text-[20px] text-slate-600">Kala</p>
              <p className="font-black text-[20px] text-slate-600">Towels</p>
            </div>
          </div>
        </NavLink>
        <div className="justify-center items-center gap-[24px] hidden sm:flex">
          <NavLink to="/">
            <p
              onClick={() => clickHandler("home")}
              className={
                "text-base text-center " +
                (pageIdentifier === "home" ? "font-bold" : "")
              }
            >
              Home
            </p>
          </NavLink>
          <NavLink to="/about-us">
            <p
              onClick={() => clickHandler("about-us")}
              className={
                "text-base text-center " +
                (pageIdentifier === "about-us" ? "font-bold" : "")
              }
            >
              About Us
            </p>
          </NavLink>
          <NavLink to="products">
            <p
              onClick={() => clickHandler("products")}
              className={
                "text-base text-center " +
                (pageIdentifier === "products" ? "font-bold" : "")
              }
            >
              Products
            </p>
          </NavLink>
          <NavLink to="contact">
            <p
              onClick={() => clickHandler("contact")}
              className={
                "text-base text-center " +
                (pageIdentifier === "contact" ? "font-bold" : "")
              }
            >
              Contact
            </p>
          </NavLink>
        </div>
        <div
          className="flex justify-center items-center xl:hidden lg:hidden md:hidden sm:block"
          onClick={clickMenu}
        >
          {menu ? <MenuIcon /> : <CloseIcon />}
        </div>
      </nav>
      <div className="border-b-[1px] border-gray-200"></div>
      {!menu && (
        <div className="border-t border-opacity-10 flex flex-col justify-center items-center xl:hidden lg:hidden md:hidden p-4 gap-4">
          <NavLink to="/">
            <p onClick={clickMenu}>Home</p>
          </NavLink>
          <NavLink to="/about-us">
            <p onClick={clickMenu}>About Us</p>
          </NavLink>
          <NavLink to="/products">
            <p onClick={clickMenu}>Products</p>
          </NavLink>
          <NavLink to="/contact">
            <p onClick={clickMenu}>Contact</p>
          </NavLink>
        </div>
      )}
    </>
  );
};

export default Navbar;
