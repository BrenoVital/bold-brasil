import { Routes, Route } from "react-router-dom";
import MainLayout from "../shared/Layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";

export default function MainRoutes() {
  const routes = [
    {
      id: "1",
      path: "/",
      element: <Home />,
    },
  ];

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<MainLayout />}>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
            // children={
            //   route.children &&
            //   route.children.map((child) => (
            //     <Route
            //       key={child.path}
            //       path={child.path}
            //       element={child.element}
            //     />
            //   ))
            // }
          />
        ))}
      </Route>
    </Routes>
  );
}
