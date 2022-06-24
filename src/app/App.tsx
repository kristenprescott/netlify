import "./App.css";
import "react-netlify-identity-widget/styles.css";
import { IdentityContextProvider } from "react-netlify-identity-widget";
import AuthStatusView from "./AuthStatusView";

export const App: React.FunctionComponent = () => {
  // const url = process.env.REACT_APP_NETLIFY_IDENTITY_URL; // should look something like "https://foo.netlify.com"
  const url = "https://frolicking-dodol-a35793.netlify.app/";

  if (!url)
    throw new Error(
      "process.env.REACT_APP_NETLIFY_IDENTITY_URL is blank2, which means you probably forgot to set it in your Netlify environment variables"
    );

  return (
    <IdentityContextProvider url={url}>
      <AuthStatusView />
    </IdentityContextProvider>
  );
};
