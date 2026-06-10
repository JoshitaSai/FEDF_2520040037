import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Librarian Dashboard</h2>

      <Link to="/deletebook">
        Delete Books
      </Link>
    </div>
  );
}

export default Dashboard;
