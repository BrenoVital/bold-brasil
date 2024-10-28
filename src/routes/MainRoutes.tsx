import { Routes, Route } from "react-router-dom";
import MainLayout from "../shared/Layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ExternalCompany from "../pages/ExternalCompany";
import Partner from "../pages/Partner";
import NewPartner from "../pages/Partner/NewPartner";
import EditPartner from "../pages/Partner/EditPartner";

export default function MainRoutes() {
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
      id: "00000000",
      path: "/empresas",
      element: <ExternalCompany />,
    },
  ];

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<MainLayout />}>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
}
