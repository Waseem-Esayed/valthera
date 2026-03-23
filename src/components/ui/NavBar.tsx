import { Link, NavLink } from "react-router-dom";
import brandLogo from "../../assets/images/brand-logo.svg";
import SearchIcon from "../../assets/images/search-icon.svg";
import userIcon from "../../assets/images/user-icon.svg";
import cartIcon from "../../assets/images/cart-icon.svg";

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
        className="flex flex-col items-center gap-1"
      >
        {({ isActive }) => (
          <>
            <p className=" text-[#374151] text-sm font-semibold tracking-wide uppercase">
              {title}
            </p>
            {isActive && <hr className="w-[55%] border-[#374151]" />}
          </>
        )}
      </NavLink>
    </li>
  );
};

const NavBar = () => {
  return (
    <header className="mx-[9%] pt-3.5 pb-3.5 relative flex justify-between items-center">
      <img
        src={brandLogo}
        alt="Valthera"
        className="w-50 max-w-50 flex-[0.2]"
      />
      <nav className="flex-[0.7] absolute left-1/2 -translate-x-1/2">
        <ul className="flex justify-center gap-6">
          <NavLinkElement title="home" destination="/" />
          <NavLinkElement title="collection" destination="collection" />
          <NavLinkElement title="about" destination="about" />
          <NavLinkElement title="contact" destination="contact" />
        </ul>
      </nav>
      <nav className="flex-[0.1]">
        <ul className="flex items-center justify-end gap-5.5">
          <li>
            <NavLink to="/collection">
              <img src={SearchIcon} alt="Collection" className="h-5.5" />
            </NavLink>
          </li>
          <li>
            <Link to="/login">
              <img src={userIcon} alt="Collection" className="h-5.5" />
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <img src={cartIcon} alt="Cart" className="h-5.5" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
