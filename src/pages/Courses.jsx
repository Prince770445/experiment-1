import { Link } from "react-router-dom";

function Courses() {

  const courses = ["DSA", "DBMS", "OS", "CN", "AI"];

  return (
    <div>
      <h2>Courses</h2>

      {courses.map((c, i) => (
        <div key={i}>
          <Link to={`/course/${c}`}>{c}</Link>
        </div>
      ))}

    </div>
  );
}

export default Courses;