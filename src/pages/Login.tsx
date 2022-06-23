import React, { useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import { useIdentityContext } from "react-netlify-identity";
import { InlineStylesModel } from "../models/InlineStylesModel";
import { ButtonGoogle } from "components/ButtonGoogle";

const styles: InlineStylesModel = {
  AuthOption: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    margin: "0 auto 10vh auto",
    width: "100%",
  },
  AuthText: {
    borderBottom: "1px solid lightgray",
    display: "block",
    fontWeight: 700,
    lineHeight: 1.4,
    marginBottom: "3vh",
    textAlign: "center",
    width: "100%",
  },
  Button: {},
  ButtonGoogle: {},
  Container: {},
  Form: {},
  Input: {},
  Label: {},
  Header: {},
  TextError: {},
};

export const Login: React.FunctionComponent = () => {
  const { loginUser } = useIdentityContext();
  const [error, setError] = useState(false);
  const emailInput = useRef<HTMLInputElement>(null!);
  const passwordInput = useRef<HTMLInputElement>(null!);
  const logInButton = useRef<HTMLButtonElement>(null!);

  useEffect(() => {
    logInButton.current.disabled = true;
  }, [emailInput, passwordInput]);

  const handleChange = (): void => {
    const email = emailInput.current.value;
    const password = passwordInput.current.value;
    if (email && password) {
      logInButton.current.disabled = false;
    } else {
      logInButton.current.disabled = true;
    }
  };

  const logIn = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const email = emailInput.current.value;
    const password = passwordInput.current.value;
    loginUser(email, password, true)
      .then(() => {
        <Navigate to="/home" />;
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  };

  return (
    <>
      <div style={styles.Header}>Log in</div>
      <div style={styles.Container}>
        <div style={styles.AuthOption}>
          <div style={styles.AuthText}>Log in with email:</div>
          <form onSubmit={logIn}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              ref={emailInput}
              onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              ref={passwordInput}
              onChange={handleChange}
            />
            {error ? (
              <div style={styles.textError}>
                The email and/or password seems to be incorrect. Please check it
                and try again.
              </div>
            ) : null}
            <button type="submit" ref={logInButton}>
              Log in
            </button>
          </form>
        </div>
        <div style={styles.AuthOption}>
          <div style={styles.AuthText}>Or log in with Google:</div>
          <ButtonGoogle>Log in with Google</ButtonGoogle>
        </div>
      </div>
    </>
  );
};
