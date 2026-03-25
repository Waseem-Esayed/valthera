import { Link, NavLink } from "react-router-dom";
import { SearchBarContext } from "../../context/SearchBarContext";
import brandLogo from "../../assets/images/brand-logo.svg";
import SearchIcon from "../../assets/images/search-icon.svg";
import userIcon from "../../assets/images/user-icon.svg";
import cartIcon from "../../assets/images/cart-icon.svg";
import hamburgerIcon from "../../assets/images/hamburger-icon.svg";
import { useContext } from "react";
import { HamburgerMenuContext } from "../../context/HamburgerMenuContext";

const NavLinkElement = ({
  destination,
  title,
}: {
  destination: string;
  title: string;
}) => {
  return (
    <li>
      <NavLink
        to={`/${destination}`}
        className="flex flex-col items-center gap-1">
        {({ isActive }) => (
          <>
            <p className=" text-[#374151] text-sm font-semibold tracking-wide uppercase">
              {title}
            </p>
            {isActive && <hr className="w-[55%] border border-[#374151]" />}
          </>
        )}
      </NavLink>
    </li>
  );
};

const NavBar = () => {
  const { setVisibleSearchBar } = useContext(SearchBarContext);
  const { setVisibleHamburgerMenu } = useContext(HamburgerMenuContext);

  function makeSearchBarVisible() {
    setVisibleSearchBar(true);
  }

  function testFunc() {
    setVisibleHamburgerMenu(true);
  }

  return (
    <header className="mx-[4%] pt-3.5 pb-3.5 flex justify-between items-center">
      <NavLink to="/">
        <img src={brandLogo} alt="Valthera" className="w-45 flex-[0.2]" />
      </NavLink>
      <nav className="left-1/2 -translate-x-1/2 hidden">
        <ul className="flex justify-center gap-6">
          <NavLinkElement title="home" destination="/" />
          <NavLinkElement title="collection" destination="collection" />
          <NavLinkElement title="about" destination="about" />
          <NavLinkElement title="contact" destination="contact" />
        </ul>
      </nav>
      <nav>
        <ul className="flex items-center justify-end gap-5">
          <li>
            <NavLink to="/collection" onClick={() => makeSearchBarVisible()}>
              <img src={SearchIcon} alt="Collection" className="w-5" />
            </NavLink>
          </li>
          <li>
            <Link to="/login">
              <img src={userIcon} alt="Collection" className="w-5" />
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <img src={cartIcon} alt="Cart" className="w-5" />
            </Link>
          </li>
          <li>
            <button onClick={testFunc}>
              <img src={hamburgerIcon} alt="Menu" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
