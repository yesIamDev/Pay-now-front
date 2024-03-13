import React from "react";
import { Link, useLocation } from "react-router-dom";
import { SIDEBAR_LINKS } from "../../helpers/navigation";
import classNames from "classnames";

export default function SideBar() {
  const { pathname } = useLocation();
  const linkClasses = "flex items-center px-2 py-2 font-semibold";
  return (
    <div className="bg-white max-w-60 px-16 border-r  flex flex-col justify-start items-center pt-10">
      <div className=" flex-col">
        {SIDEBAR_LINKS.map((item) => (
          <Link
            to={item.path}
            key={item.key}
            className={classNames(
              pathname === item.path ? "text-blue-600" : "text-gray-500",
              linkClasses
            )}
          >
            <span className="text-lg">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
