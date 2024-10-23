import { Outlet } from "react-router-dom";
import Header from "../components/common/Header/Header";

const PublicRoutes = () => (
  <>
    <Header isLogin={false}>
      <Outlet />
    </Header>
  </>
);

export default PublicRoutes;