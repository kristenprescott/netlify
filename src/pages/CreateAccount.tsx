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
  PasswordTip: {},
};

export const CreateAccount: React.FunctionComponent = () => {
  const { loginUser, signupUser } = useIdentityContext();
  const [error, setError] = useState(false);
  const emailInput = useRef<HTMLInputElement>(null!);
  const passwordInput = useRef<HTMLInputElement>(null!);
  const signUpButton = useRef<HTMLButtonElement>(null!);

  useEffect(() => {
    signUpButton.current.disabled = true;
  }, [emailInput, passwordInput]);

  const passwordPattern = /^.{6,}$/;

  const handleChange = (): void => {
    const email = emailInput.current.value;
    const password = passwordInput.current.value;
    if (email && passwordPattern.test(password)) {
      signUpButton.current.disabled = false;
    } else {
      signUpButton.current.disabled = true;
    }
  };

  const signUp = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const email = emailInput.current.value;
    const password = passwordInput.current.value;
    signupUser(email, password, {})
      .then(() => {
        loginUser(email, password, true);
        <Navigate to="/home" />;
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  };

  return (
    <>
      <div style={styles.Header}>Create account</div>
      <div>
        <div style={styles.AuthOption}>
          <div style={styles.AuthText}>Sign up with email:</div>

          <form onSubmit={signUp}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              ref={emailInput}
              onChange={handleChange}
            />
            <label htmlFor="password">
              Password <div style={styles.PasswordTip}>(min. 6 characters)</div>
            </label>
            <input
              type="password"
              id="password"
              ref={passwordInput}
              onChange={handleChange}
            />
            {error ? (
              <div style={styles.TextError}>
                The email and/or password seems to be incorrect. Please check it
                and try again.
              </div>
            ) : null}

            <button type="submit" ref={signUpButton}>
              Create account
            </button>
          </form>
        </div>
        <div style={styles.AuthOption}>
          <div style={styles.AuthText}>Or sign up with Google:</div>
          <ButtonGoogle>Sign up with Google</ButtonGoogle>
        </div>
      </div>
    </>
  );
};
