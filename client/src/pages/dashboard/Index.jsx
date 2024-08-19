import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    <div>
      <h1>Dashboard</h1>
      {isAuthenticated && (
        <button
          onClick={() =>
            logout()
          }
        >
          Sign Out
        </button>
      )}
    </div>
  );
};

export default Dashboard;
