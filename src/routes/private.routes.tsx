import { Outlet, Navigate } from "react-router-dom";
import Cookie from "js-cookie";
const PrivateRoutes = () => {
  const token = Cookie.get('token')
  return (
    token ?
      (
        <Outlet context={token} />
      ) :
      <Navigate to="/login" />
  )
}

export default PrivateRoutes;