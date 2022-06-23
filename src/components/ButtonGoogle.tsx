import React from "react";
import { useIdentityContext } from "react-netlify-identity";

// import { logo } from "../common/assets/index";
import { InlineStylesModel } from "../models/InlineStylesModel";

const styles: InlineStylesModel = {
  logo: {
    marginRight: "24px",
  },
  styledButton: {
    backgroundColor: "#4285f4",
    backgroundImage: "none",
    color: "#ffffff",
  },
};

interface Props {
  children: string;
}

export const ButtonGoogle: React.FunctionComponent<Props> = (props: Props) => {
  const { loginProvider } = useIdentityContext();

  const logInWithGoogle = (): void => {
    loginProvider("google");
  };

  return (
    <button style={styles.StyledButton} onClick={logInWithGoogle}>
      <div style={styles.logo}>[IMG]</div>
      {props.children}
    </button>
  );
};
