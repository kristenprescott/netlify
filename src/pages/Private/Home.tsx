import { InlineStylesModel } from "models/InlineStylesModel";
import { useIdentityContext } from "react-netlify-identity";
import { Navigate } from "react-router-dom";

const styles: InlineStylesModel = {
  main: {},
  content: {},
  divider: {
    margin: "9px 0px",
  },
};

export const Home = (): JSX.Element => {
  const { user, logoutUser } = useIdentityContext();

  const logOut = (): void => {
    logoutUser();
    <Navigate to="/" />;
  };

  return (
    <>
      <div style={styles.main}>
        <h1 style={{ marginTop: "10vh" }}>
          Hello {JSON.stringify(user!.email)}
        </h1>

        <hr style={styles.divider} />

        <button onClick={logOut}>Log out</button>
      </div>
    </>
  );
};
