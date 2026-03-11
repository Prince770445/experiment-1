import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>University Portal</h1>
      <Link to="/courses">View Courses</Link>
    </div>
  );
}

export default Home;