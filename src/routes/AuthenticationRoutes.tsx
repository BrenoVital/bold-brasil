import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";

export default function AuthenticationRoutes() {
  return (
    <Routes>
      <Route>
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}
