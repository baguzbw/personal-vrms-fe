import React from "react";
import { User } from "react-iconly";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((x) => x);

  // Spliting text buat Breadcrumbs
  const formatSegment = (segment) => {
    return segment.split("-").map(capitalize).join(" ");
  };

  // buat capital
  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  // Extract path terakhir
  const currentPageName = pathnames.length > 0 ? formatSegment(pathnames[pathnames.length - 1]) : "VRMS";

  return (
    <div className="flex justify-between items-center bg-white">
      <div className="px-9 py-4 h-20">
        <div className="text-xs text-[#9A9A9A]">
          <nav aria-label="breadcrumb">
            <ol className="list-none p-0 inline-flex">
              <li className="inline-flex items-center">
                <div className="text-[#9A9A9A]">VRMS</div>
              </li>
              {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1;
                const to = `/${pathnames.slice(0, index + 1).join("/")}`;

                return (
                  <React.Fragment key={to}>
                    <li className="inline-flex items-center text-[#9A9A9A]">
                      <span className="mx-1">/</span>
                    </li>
                    <li className={`inline-flex items-center ${last ? "" : "text-[#9A9A9A]"}`}>{last ? <span className="text-[#9A9A9A]">{formatSegment(value)}</span> : <div className="text-[#9A9A9A] ">{formatSegment(value)}</div>}</li>
                  </React.Fragment>
                );
              })}
            </ol>
          </nav>
        </div>
        <div className="text-2xl font-semibold text-[#232323] ">{currentPageName}</div>
      </div>

      <div>
        <div className="flex items-center bg-[#F9F9F9] rounded-3xl py-2 px-4 mr-9">
          <div className="p-2">
            <User size="medium" />
          </div>
          <div className="ml-1">
            <div className="font-bold text-[#292929] text-base">Bagus Brang</div>
            <div className="text-xs text-[#B5B5B5]">Super Admin</div>
          </div>
        </div>
      </div>
    </div>
  );
}
