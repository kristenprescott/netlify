import { InlineStylesModel } from "models/InlineStylesModel";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ReduxState } from "redux/rootReducer";
import { ReactComponent as Logo } from "../../common/assets/logo.svg";
// import { ReactComponent as Logo } from "common/assets/logo.svg";
// import { isMobileOnly } from "react-device-detect";

const styles: InlineStylesModel = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    borderBottom: "1px solid gainsboro",
    padding: 5,
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  appName: {
    cursor: "pointer",
    margin: "0px 5px",
    fontSize: "28px",
    // fontSize: isMobileOnly ? "0.75rem" : "24px",
    // marginLeft: isMobileOnly ? "8px" : "16px",
    // marginRight: isMobileOnly ? "8px" : "16px",
  },
  logo: {
    cursor: "pointer",
    margin: "0px 5px",
  },
  link: {},
};

export const PageHeader = (): JSX.Element => {
  const { user } = useSelector((state: ReduxState) => state.app);

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <div style={styles.logo}>
          <Logo height="76" width="76" />
        </div>

        <div style={styles.appName}>
          <Link to="/" style={styles.link}>
            <h3>Netlify Identity Test</h3>
          </Link>
        </div>
      </div>

      <div style={styles.userName}>{user ? "Log in" : user}</div>
    </div>
  );
};
