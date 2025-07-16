import { Route, Routes } from "react-router-dom";
import { NotFound } from "../pages/NotFound/NotFound";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default AppRoutes;
