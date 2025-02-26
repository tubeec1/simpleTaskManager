import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Featurs from "../components/Featurs";

function App() {
  let location = useLocation();
  return (
    <div>
      <Header />
      {location.pathname === "/" && <Hero />}
      {location.pathname === "/" && <Featurs />}
      <Outlet />

      <footer className="my-10 text-center">
        <p className="text-gray-500">Thanks for you visiting us</p>
        <p className="text-gray-900 font-semibold">TSM &copy;2025</p>
      </footer>
    </div>
  );
}

export default App;
