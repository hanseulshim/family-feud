import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import TeamNames from "./TeamNames";
import SetQuestions from "./SetQuestions";

const Setup = () => {
  return (
    <div className="w-full bg-blue-300 py-2 px-6 bg-opacity-50">
      <Link
        to="/"
        className="text-blue-500 hover:text-blue-700 mb-4 inline-block"
      >
        <FaHome size={36} />
      </Link>
      <h1 className="text-3xl font-bold mb-6">Set up game</h1>
      <TeamNames />
      <div className="border-b-2 my-4"></div>
      <SetQuestions />
    </div>
  );
};

export default Setup;
