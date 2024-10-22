import { Outlet, Navigate } from "react-router-dom";
import Cookie from "js-cookie";
import Header from "../components/common/Header/Header";
const PrivateRoutes = () => {
  const token = Cookie.get('token')
  return (
    token ?
      (
        <>
          <Header isLogin={!!token}>
            <Outlet context={token} />
          </Header>
        </>
      ) :
      <Navigate to="/login" />
  )
}

export default PrivateRoutes;