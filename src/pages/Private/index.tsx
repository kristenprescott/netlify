import { Home } from "./Home";
import { useIdentityContext } from "react-netlify-identity";
import { Navigate } from "react-router-dom";

export default function Private() {
  const { isLoggedIn } = useIdentityContext();
  return <>{isLoggedIn ? <Home /> : <Navigate to="/login" />}</>;
}
