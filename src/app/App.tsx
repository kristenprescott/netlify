import "./App.css";
import {
  IdentityContextProvider,
  useIdentityContext,
} from "react-netlify-identity";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Private from "../pages/Private";

import { CreateAccount, Login, Welcome } from "../pages";

interface Props {
  children?: any;
  // any props that come into the component
}

// const PublicRoute: React.FunctionComponent<Props> = (props: Props) => {
//   const { isLoggedIn } = useIdentityContext();
//   return isLoggedIn ? <Navigate to="home" /> : <Route {...props} />;
// };

// const PrivateRoute: React.FunctionComponent<Props> = (props: Props) => {
//   const { isLoggedIn } = useIdentityContext();

//   return isLoggedIn ? <Route {...props} /> : <Navigate to="welcome" />;
// };

// function PublicRoute({ children }: Props) {
//   const { isLoggedIn } = useIdentityContext();
//   return isLoggedIn ? <Navigate to="home" /> : children;
// }

function PrivateRoute({ children }: Props) {
  const { isLoggedIn } = useIdentityContext();
  return isLoggedIn ? children : <Navigate to="login" />;
}

export const App: React.FunctionComponent = () => {
  const url = "https://frolicking-dodol-a35793.netlify.app/";

  return (
    <>
      <IdentityContextProvider url={url}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/createaccount" element={<CreateAccount />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Private />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>

        {/* <BrowserRouter>
          <Routes>
            <PublicRoute exact path="/" element={Welcome} />
            <PublicRoute path="/welcome" element={Welcome} />
            <PublicRoute path="/createaccount" element={CreateAccount} />
            <PublicRoute path="/login" element={Login} />
            <PrivateRoute path="/home" element={Home} />
          </Routes>
        </BrowserRouter> */}
      </IdentityContextProvider>
    </>
  );
};

// const Public = () => <div>public</div>;
