import React from "react";
import { Link } from "react-router-dom";

export const Welcome: React.FunctionComponent = () => {
  return (
    <>
      <div>React Netlify Identity Example</div>
      <p>
        This is made with: TypeScript, React, React Router, Netlify Identity
      </p>
      <div>
        <Link to="/login">
          <button>Log in</button>
        </Link>
      </div>
      <div>
        <Link to="/createaccount">
          <button>Create account</button>
        </Link>
      </div>
    </>
  );
};
