import { NavLink } from "react-router-dom";
import { useContext } from "react";
import carretLeftIcon from "../../assets/images/carret-left.svg";
import { HamburgerMenuContext } from "../../context/HamburgerMenuContext";

const HamburgerMenu = () => {
  const { setVisibleHamburgerMenu } = useContext(HamburgerMenuContext);

  const NavLinkStyles = ({ isActive }: { isActive: boolean }) =>
    (isActive ? "bg-black text-white" : "bg-white text-black") +
    " border-y border-y-[#e5e7eb] px-4 py-3 w-full";

  return (
    <nav className="hamburger-menu bg-white w-screen h-screen fixed top-0 bottom-0 left-0 right-0">
      <button
        className="px-4 py-3 flex gap-3 text-[##4d5563]"
        onClick={() => setVisibleHamburgerMenu(false)}
      >
        <img src={carretLeftIcon} alt="Back" className="w-3" />
        Back
      </button>
      <ul className="flex flex-col">
        <li className="flex">
          <NavLink
            to="/"
            onClick={() => setVisibleHamburgerMenu(false)}
            className={NavLinkStyles}
          >
            HOME
          </NavLink>
        </li>
        <li className="flex">
          <NavLink
            to="/collection"
            onClick={() => setVisibleHamburgerMenu(false)}
            className={NavLinkStyles}
          >
            COLLECTION
          </NavLink>
        </li>
        <li className="flex">
          <NavLink
            to="/about"
            onClick={() => setVisibleHamburgerMenu(false)}
            className={NavLinkStyles}
          >
            ABOUT
          </NavLink>
        </li>
        <li className="flex">
          <NavLink
            to="/contact"
            onClick={() => setVisibleHamburgerMenu(false)}
            className={NavLinkStyles}
          >
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HamburgerMenu;
