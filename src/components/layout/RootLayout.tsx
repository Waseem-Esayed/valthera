import { Outlet } from "react-router-dom";
import { SearchBarContext } from "../../context/SearchBarContext";
import NavBar from "../ui/NavBar";
import Footer from "../ui/Footer";
import { useState } from "react";

const RootLayout = () => {
  const [visibleSearchBar, setVisibleSearchBar] = useState(false);

  return (
    <SearchBarContext.Provider
      value={{ visibleSearchBar, setVisibleSearchBar }}>
      <NavBar />
      <Outlet />
      <Footer />
    </SearchBarContext.Provider>
  );
};

export default RootLayout;
