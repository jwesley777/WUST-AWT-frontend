import { Link } from "react-router-dom";

function HomePage(props) {
    return (
    <nav>
        <ul>
          <li>
            <Link to="/reviews">Review Service</Link>
          </li>
          <li>
            <Link to="/tickets">Tickets Service</Link>
          </li>
        </ul>
      </nav>
    )
};
export default HomePage;