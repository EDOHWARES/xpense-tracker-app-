import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

const Dashboard = () => {
  const { logout, isLoading, error, isAuthenticated } = useAuth0();

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
        <h1 className="text-3xl">Dashboard</h1>
        {isAuthenticated && <button onClick={() => logout()}>Sign Out</button>}
      </div>
    </>
  );
};

export default Dashboard;
