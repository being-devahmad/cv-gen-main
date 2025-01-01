import { useAuth } from "@/hooks/useAuth";
import { NavLink } from "react-router-dom";
import logo from "@/assets/icons/logoTransparent.png";
import { useEffect, useState } from "react";
import FlyoutLink from "./navbar-items/FlyoutLink";
import FeaturesContent from "./navbar-items/FeaturesContent";
import CompanyContent from "./navbar-items/CompanyContent";
import { Button } from "@nextui-org/button";
import ShinyButton from "../ShinyButton";

export type Position = {
  width: number;
  left: number;
  opacity: number;
};

const Navbar = () => {
  const { isAuthenticated } = useAuth();
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    const blurElement = document.getElementById("bodyBlur");
    if (isHovered) {
      blurElement?.classList.add("blurred");
    } else {
      blurElement?.classList.remove("blurred");
    }

    return () => blurElement?.classList.remove("blurred");
  }, [isHovered]);

  return (
    <div
      className={`nav-container md:flex hidden shadow-sm min-h-[48px] max-w-[97%] xl:max-w-[80%]  mx-auto transition-all duration-100 bg-bg-navigation top-3 fixed w-full left-1/2 -translate-x-1/2 ${
        isHovered ? "rounded-t-2xl" : "rounded-2xl"
      }`}
    >
      <ul className="flex w-full text-[14px] font-bold text-menu-items  items-center justify-around ">
        <li>
          <NavLink to="/">
            <img src={logo} alt="logo" width={60} />
          </NavLink>
        </li>
        <li className="hover:text-button-gpt">
          <FlyoutLink
            setState={(value) => setIsHovered(value)}
            href="/"
            FlyoutContent={FeaturesContent}
          >
            Features
          </FlyoutLink>
        </li>
        <li>
          <NavLink
            to={"/pricing"}
            className={({ isActive }) =>
              `cursor-pointer hover:text-button-gpt ${
                isActive && "text-button-gpt"
              }`
            }
          >
            <span className="hidden lg:inline">Unlock Membership</span>
            <span className="lg:hidden">Pricing</span>
          </NavLink>
        </li>
        {/* <li className="cursor-pointer hidden md:block hover:text-button-gpt">
          <NavLink to={"/about"}>About</NavLink>
        </li> */}
        <li className="cursor-pointer  hidden md:block hover:text-button-gpt">
          <NavLink
            className={({ isActive }) => (isActive ? "text-button-gpt" : "")}
            to={"/contact"}
          >
            Contact
          </NavLink>
        </li>
        <li className="cursor-pointer hidden md:block hover:text-button-gpt">
          <NavLink
            className={({ isActive }) => (isActive ? "text-button-gpt" : "")}
            to={"/faqs"}
          >
            {" "}
            FAQ's
          </NavLink>
        </li>
        <li className="cursor-pointer hidden lg:block hover:text-button-gpt">
          <FlyoutLink
            href="/"
            setState={(value) => setIsHovered(value)}
            FlyoutContent={CompanyContent}
          >
            Company
          </FlyoutLink>
        </li>
        {/* <li className="cursor-pointer  hidden lg:block hover:text-button-gpt">
          <NavLink
            className={({ isActive }) => (isActive ? "text-button-gpt" : "")}
            to={"/customers"}
          >
            Customers
          </NavLink>
        </li> */}
        {isAuthenticated ? (
          <ShinyButton className="h-9" href="/dashboard">
            Dashboard
          </ShinyButton>
        ) : (
          <>
            <li className="relative z-50">
              <Button
                className="relative z-10 flex items-center overflow-hidden text-white h-8 justify-center w-full px-4 rounded-sm bg-button-gpt hover:bg-[#095c46] transition-all duration-200 before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-[200%] before:h-full 
             shadow-lg hover:shadow-xl
            "
                to="/login"
                as={NavLink}
              >
                <span className="z-10 font-bold">Log In</span>
              </Button>
            </li>
            <li className="relative z-50">
              <Button
                as={NavLink}
                to={"/create-account"}
                className="relative z-10 flex items-center overflow-hidden text-white h-8 justify-center w-full px-4 rounded-sm  hover:bg-[#095c46] transition-all duration-200 before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-[200%] before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:animate-[shine_2s_infinite] before:z-0
            bg-gradient-to-r to-[#10a37f] from-[#095c46] hover:scale-105  shadow-lg hover:shadow-xl
           "
              >
                <span className="z-10 font-bold">Get Started</span>
              </Button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
