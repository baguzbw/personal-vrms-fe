import React from "react";
import { Activity } from "react-iconly";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((x) => x);

  // Function to transform a segment into a readable format
  // e.g., "resource-manager" becomes "Resource Manager"
  const formatSegment = (segment) => {
    return segment.split("-").map(capitalize).join(" ");
  };

  // Function to capitalize the first letter of each word
  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  // Extract the last part of the path as the current page name, formatted
  const currentPageName = pathnames.length > 0 ? formatSegment(pathnames[pathnames.length - 1]) : "Home";

  return (
    <div className="flex justify-between items-center bg-white">
      <div className="px-8 py-4 h-20">
        <div className="text-xs text-[#9A9A9A]">
          {/* Breadcrumbs */}
          <nav aria-label="breadcrumb">
            <ol className="list-none p-0 inline-flex">
              <li className="inline-flex items-center">
                <Link to="/" className="text-gray-500">
                  VRMS
                </Link>
              </li>
              {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1;
                const to = `/${pathnames.slice(0, index + 1).join("/")}`;

                return (
                  <React.Fragment key={to}>
                    <li className="inline-flex items-center text-gray-500">
                      <span className="mx-1">/</span> {/* Adjusted spacing */}
                    </li>
                    <li className={`inline-flex items-center ${last ? "" : "text-gray-500"}`}>
                      {last ? (
                        <span className="text-gray-500">{formatSegment(value)}</span>
                      ) : (
                        <Link to={to} className="text-gray-500 hover:text-gray-700">
                          {formatSegment(value)}
                        </Link>
                      )}
                    </li>
                  </React.Fragment>
                );
              })}
            </ol>
          </nav>
        </div>
        <div className="text-2xl font-semibold">{currentPageName}</div>
      </div>

      <div>
        <div className="flex items-center bg-[#F9F9F9] rounded-3xl py-2 px-4 mr-4">
          <div className="p-2">
            <Activity size="medium" />
          </div>
          <div className="ml-2">
            <div className="font-bold text-base">Bagus Brang</div>
            <div className="text-xs text-[#B5B5B5]">Super Admin</div>
          </div>
        </div>
      </div>
    </div>
  );
}
