import React from "react";
import { Activity, Document, Folder, Home, Logout, TwoUsers } from "react-iconly";
import Logo from "../assets/star.png";

export default function Sidebar() {
  const menu = [
    { name: "Dashboard", icon: <Home set="two-tone" /> },
    { name: "Master Data", icon: <Folder set="two-tone" /> },
    { name: "Resource Manager", icon: <Document set="two-tone" /> },
    { name: "System Administrator", icon: <TwoUsers set="two-tone" /> },
    { name: "Log Activity", icon: <Activity set="two-tone" /> },
    { name: "Log Out", icon: <Logout set="two-tone" /> },
  ];

  return (
    <div className="h-screen border-r-2 border-[#E9E9E9] w-72 px-6 space-y-12">
      <div className="flex flex-row place-content-center pt-8">
        <img src={Logo} alt="star" className="w-[120] h-[61]" />
      </div>
      <div className="space-y-12">
        <div>
          <div className="mb-6 text-gray-300 font-medium text-xs">MAIN MENU</div>
          <ul className="space-y-7 mb-8">
            {menu.map((val, index) => {
              return (
                <React.Fragment key={`menu-${index}`}>
                  <li className="flex flex-row items-center">
                    <div className="mr-3">{val.icon}</div>
                    <div className="text-sm">{val.name}</div>
                  </li>
                  {val.name === "Log Activity" && <div className="border-b-2 border-[#E9E9E9] w-full my-2"></div>}
                </React.Fragment>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
