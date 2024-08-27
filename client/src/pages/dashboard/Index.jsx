import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import FRF from "./FRF";
import FRL from "./FRL";

const Dashboard = () => {
  const { logout, isLoading, error, isAuthenticated, user } = useAuth0();

  if (error) {
    return <div>{error}</div>;
  }

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#438883"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to={"/auth"} />;
  }

  return (
    <>
      <div>
        <div>
          <p>{user?.name || 'user'}</p>
          {isAuthenticated && <button onClick={() => logout()}>Sign Out</button>}
        </div>
        
        <div>
          <FRF />
          <FRL />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
