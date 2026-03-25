import { Outlet } from "react-router-dom";
import { SearchBarContext } from "../../context/SearchBarContext";
import { HamburgerMenuContext } from "../../context/HamburgerMenuContext";
import HamburgerMenu from "../ui/HamburgerMenu";
import NavBar from "../ui/NavBar";
import Footer from "../ui/Footer";
import { useState } from "react";

const RootLayout = () => {
  const [visibleSearchBar, setVisibleSearchBar] = useState(false);
  const [visibleHamburgerMenu, setVisibleHamburgerMenu] = useState(false);

  return (
    <>
      <HamburgerMenuContext.Provider value={{ setVisibleHamburgerMenu }}>
        <SearchBarContext.Provider
          value={{ visibleSearchBar, setVisibleSearchBar }}
        >
          <NavBar />
          <Outlet />
        </SearchBarContext.Provider>
        {visibleHamburgerMenu && <HamburgerMenu />}
      </HamburgerMenuContext.Provider>
      <Footer />
    </>
  );
};

export default RootLayout;
