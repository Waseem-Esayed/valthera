import { Outlet } from "react-router-dom";
import { SearchBarContext } from "../../context/SearchBarContext";
import { HamburgerMenuContext } from "../../context/HamburgerMenuContext";
import HamburgerMenu from "../ui/HamburgerMenu";
import NavBar from "../ui/NavBar";
import Footer from "../ui/Footer";
import { useState } from "react";
import { CartProvider } from "../../context/CartContext";

const RootLayout = () => {
  const [visibleSearchBar, setVisibleSearchBar] = useState(false);
  const [visibleHamburgerMenu, setVisibleHamburgerMenu] = useState(false);

  return (
    <>
      <HamburgerMenuContext.Provider value={{ setVisibleHamburgerMenu }}>
        <SearchBarContext.Provider
          value={{ visibleSearchBar, setVisibleSearchBar }}
        >
          <CartProvider>
            <NavBar />
            <Outlet />
          </CartProvider>
        </SearchBarContext.Provider>
        {visibleHamburgerMenu && <HamburgerMenu />}
      </HamburgerMenuContext.Provider>
      <Footer />
    </>
  );
};

export default RootLayout;
