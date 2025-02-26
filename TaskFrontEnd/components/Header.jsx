import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="shadow-lg">
      <header className="flex justify-around items-center h-16">
        <h1 className="font-bold text-xl text-gray-700">TSM</h1>
        <div className="flex gap-5 text-gray-600">
          <Link to="/">Home</Link>
          <Link to="/task">Task</Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
