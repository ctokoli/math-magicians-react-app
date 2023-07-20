import { Outlet, Link } from 'react-router-dom';

function LayoutPage() {
  return (
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
            <Link to="/quotes">Qoutes</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default LayoutPage;
