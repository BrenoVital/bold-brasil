import { Routes, Route, useNavigate } from "react-router-dom";
import MainLayout from "../shared/Layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NewPartner from "../Partner/pages/NewPartner";
import EditPartner from "../Partner/pages/EditPartner";
import NewCompany from "../ExternalCompany/pages/NewCompany";
import EditCompany from "../ExternalCompany/pages/EditCompany";
import Partner from "../Partner/pages";
import ExternalCompany from "../ExternalCompany/pages";
import NotFound from "../pages/NotFound";
import { useAuthStore } from "../shared/store/authStore";
import About from "../pages/About";
import { useEffect } from "react";

export default function MainRoutes() {
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const routes = [
    {
      id: "1",
      path: "/",
      element: <Home />,
    },
    {
      id: "2",
      path: "/parceiros",
      element: <Partner />,
    },
    {
      id: "3",
      path: "/parceiros/criar",
      element: <NewPartner />,
    },
    {
      id: "4",
      path: "/parceiros/editar/:id",
      element: <EditPartner />,
    },
    {
      id: "5",
      path: "/empresas",
      element: <ExternalCompany />,
    },
    {
      id: "6",
      path: "/empresas/criar",
      element: <NewCompany />,
    },
    {
      id: "7",
      path: "/empresas/editar/:id",
      element: <EditCompany />,
    },
    {
      id: "8",
      path: "/sobre",
      element: <About />,
    },
  ];

  const notFoundRoute = {
    path: "*",
    element: <NotFound />,
  };

  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<MainLayout />}>
        {routes.map((route) => (
          <Route key={route.id} path={route.path} element={route.element} />
        ))}
        <Route {...notFoundRoute} />
      </Route>
    </Routes>
  );
}
