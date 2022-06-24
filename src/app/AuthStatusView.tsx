import React from "react";
import { InlineStylesModel } from "models/InlineStylesModel";
import {
  IdentityModal,
  useIdentityContext,
} from "react-netlify-identity-widget";

// // code split the modal til you need it!
// const IdentityModal = React.lazy(() => import('react-netlify-identity-widget'))

const styles: InlineStylesModel = {
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    backgroundColor: "bisque",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    width: "100%",
    margin: "15px",
    borderBottom: "1px solid tomato",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    margin: "9px 0px",
  },
  outbtn: {
    maxWidth: 400,
    background: "orangered",
  },
  inbtn: {
    maxWidth: 400,
    background: "darkgreen",
  },
};

function AuthStatusView() {
  const identity = useIdentityContext();

  const [dialog, setDialog] = React.useState(false);

  const name =
    (identity &&
      identity.user &&
      identity.user.user_metadata &&
      identity.user.user_metadata.full_name) ||
    "NoName";

  const avatar_url =
    identity &&
    identity.user &&
    identity.user.user_metadata &&
    identity.user.user_metadata.avatar_url;

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        {identity && identity.isLoggedIn ? (
          <>
            <h1> hello {name}!</h1>
            {avatar_url && (
              <img
                alt="user name"
                src={avatar_url}
                style={{ height: 100, borderRadius: "50%" }}
              />
            )}
            <button
              className="btn"
              style={styles.outbtn}
              onClick={() => setDialog(true)}
            >
              LOG OUT
            </button>
          </>
        ) : (
          <>
            <h1> hello! try logging in! </h1>
            <button
              className="btn"
              style={styles.inbtn}
              onClick={() => setDialog(true)}
            >
              LOG IN
            </button>
          </>
        )}

        <IdentityModal
          showDialog={dialog}
          onCloseDialog={() => setDialog(false)}
          onLogin={(user) => console.log("hello ", user!.user_metadata)}
          onSignup={(user) => console.log("welcome ", user!.user_metadata)}
          onLogout={() => console.log("bye ", name)}
        />

        {/* <h3>
          Or
          <a
            href="https://github.com/sw-yx/react-netlify-identity-widget"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "powderblue" }}
          >
            view the source
          </a>
        </h3> */}
      </header>
    </div>
  );
}

export default AuthStatusView;
