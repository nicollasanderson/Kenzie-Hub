import { useHistory } from "react-router-dom";

function Dashboard({ session }) {
  const history = useHistory();

  if (!session) {
    history.push("/");
  }
  return <div>Dashboard</div>;
}

export default Dashboard;
