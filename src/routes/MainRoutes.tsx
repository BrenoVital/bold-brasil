import { Routes, Route } from "react-router-dom";
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

export default function MainRoutes() {
  const { isAuthenticated } = useAuthStore();
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
  ];

  return (
    <Routes>
      {isAuthenticated ? (
        <Route element={<MainLayout />}>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
      ) : (
        <Route path="/" element={<Login />} />
      )}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
