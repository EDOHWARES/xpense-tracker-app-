import { useAuth0 } from "@auth0/auth0-react";

const Auth = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div>
      <h1>Login in to Xpenser Tracker App</h1>
        {
            !isAuthenticated && <button onClick={() => loginWithRedirect()}>Sign In</button>
        }
    </div>
  );
};

export default Auth;
