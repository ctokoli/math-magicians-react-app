import { Link } from 'react-router-dom';

const LayoutPage = () => (
  <>
    <div className="menu">
      <h2>Math magicians</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/qoutes">Qoutes</Link>
        </li>
      </ul>
    </div>
  </>
);

export default LayoutPage;
