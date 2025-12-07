 import React from "react";
import { Link} from "react-router-dom";
import { RouteIndex, RouteTaskList } from "../helper/RouteName";

const Nav = () => {
 
  const buttonClass =
    "py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100";

  const activeButtonClass =
    "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none";

  return (
    <div className="pb-5 border-b flex gap-5">
      <Link 
        to={RouteIndex}
        className="bg-blue-600 text-white p-2 mt-3 rounded-lg mx-3"
      >
        Add Task
      </Link>
      <Link
        to={RouteTaskList}
        className="bg-blue-600 text-white p-2 mt-3 rounded-lg mx-3"
      >
        My Task
      </Link>
    </div>
  );
};

export default Nav;