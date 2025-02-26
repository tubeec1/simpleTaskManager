import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="bg-blue-900">
      <div className="flex flex-col px-3 md:flex-row justify-center py-30 h-160 items-center h-fit">
        <div className="text-white">
          <h1 className="font-bold text-3xl mb-5">
            Stay Organized, Stay Productive! 🚀
          </h1>
          <p className="line leading-8 mb-5">
            Manage your tasks efficiently with <span>Simple Task Manager</span>.
            <br></br> Track, update, and complete tasks with ease—all in one
            place.<br></br> Start now and take control of your workflow! ✅
          </p>
          <Link
            to="/task"
            className="bg-white py-2 px-8 rounded-2xl text-blue-900 my-5 hover:bg-blue-500 hover:text-white transition duration-200"
          >
            Get Started
          </Link>
        </div>
        <div>
          <img src="../src/assets/Task-bro.png" alt="" width={450} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
