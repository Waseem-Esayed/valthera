import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import RootLayout from "../components/layout/RootLayout";

import ProtectedAdminRoute from "./ProtectedRoutes/ProtectedAdminRoute";

import HomePage from "../pages/HomePage";
import CollectionPage from "../pages/CollectionPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import CartPage from "../pages/CartPage";
import LoginPage from "../pages/LoginPage";
import ProductPage from "../pages/ProductPage";
import NotFound from "../pages/NotFound";
import AdminPanelLoginPage from "../pages/admin-panel/Login";
import AdminPanelAddPage from "../pages/admin-panel/AdminPanelAddPage";
import AdminPanelListPage from "../pages/admin-panel/AdminPanelListPage";
import AdminPanelOrdersPage from "../pages/admin-panel/AdminPanelOrdersPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="collection" element={<CollectionPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="product/:id" element={<ProductPage />} />
      </Route>

      <Route path="/admin">
        <Route index element={<AdminPanelLoginPage />} />
        <Route element={<ProtectedAdminRoute />}>
          <Route path="add" element={<AdminPanelAddPage />} />
          <Route path="list" element={<AdminPanelListPage />} />
          <Route path="order" element={<AdminPanelOrdersPage />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </>,
  ),
);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
