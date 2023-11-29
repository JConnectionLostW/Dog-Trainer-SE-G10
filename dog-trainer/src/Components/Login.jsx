//Creates a button that redirects user to auth0 login signup page for our webpage
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated} = useAuth0();

  return ( 
    !isAuthenticated && (
    <button onClick={() => loginWithRedirect()}>
      Log In
    </button>
    )  
  )
}

export default LoginButton;

