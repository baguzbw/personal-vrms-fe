import React, { useState } from "react";
import { Activity, ChevronDown, ChevronUp, Document, Folder, Home, Logout, TwoUsers } from "react-iconly";
import { useLocation, useNavigate } from "react-router-dom";

export default function SideMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  const [masterDataOpen, setMasterDataOpen] = useState(false);
  const [resourceManagerOpen, setResourceManagerOpen] = useState(false);

  const toggleMasterData = (e) => {
    e.stopPropagation(); // Prevents navigation event
    setMasterDataOpen(!masterDataOpen);
  };

  const toggleResourceManager = (e) => {
    e.stopPropagation(); // Prevents navigation event
    setResourceManagerOpen(!resourceManagerOpen);
  };

  const menu = [
    { name: "Dashboard", icon: <Home set="two-tone" />, path: "/dashboard" },
    {
      name: "Master Data",
      icon: <Folder set="two-tone" />,
      submenu: [
        { name: "Item 1", path: "/master-data/item1" },
        { name: "Item 2", path: "/master-data/item2" },
      ],
      toggle: toggleMasterData,
    },
    {
      name: "Resource Manager",
      icon: <Document set="two-tone" />,
      submenu: [
        { name: "Translation", path: "/resource-manager/translation" },
        { name: "Non Translation", path: "/resource-manager/non-translation" },
        { name: "Vendor", path: "/resource-manager/vendor" },
      ],
      toggle: toggleResourceManager,
    },
    {
      name: "System Administrator",
      icon: <TwoUsers set="two-tone" />,
      path: "/system-administrator",
    },
    { name: "Record Log", icon: <Activity set="two-tone" />, path: "/record-log" },
  ];

  const logOutItem = { name: "Log Out", icon: <Logout set="two-tone" />, path: "/logout" };

  const isActiveSubMenuParent = (submenu) => {
    return submenu.some((item) => location.pathname.includes(item.path));
  };

  const isActive = (path, submenu) => {
    return location.pathname === path || (submenu && isActiveSubMenuParent(submenu));
  };

  const handleNavigation = (path) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <div>
      <div className="space-y-12 cursor-pointer">
        <div>
          <div className="mb-6 text-gray-300 ms-4 font-medium text-xs">MAIN MENU</div>
          <ul className="space-y-7 mb-8">
            {menu.map((val, index) => (
              <React.Fragment key={`menu-${index}`}>
                <li className={`flex flex-row items-center ${val.submenu ? "cursor-pointer" : ""}`} onClick={val.submenu ? val.toggle : () => handleNavigation(val.path)}>
                  <div className="ms-4 flex flex-row items-center w-full">
                    <div className="mr-2 w-6 h-6">
                      {React.cloneElement(val.icon, {
                        set: isActive(val.path, val.submenu) ? "bulk" : "two-tone",
                        primaryColor: isActive(val.path, val.submenu) ? "#DC362E" : undefined,
                      })}
                    </div>
                    <div className="text-sm flex-grow" style={{ color: isActive(val.path, val.submenu) ? "#DC362E" : undefined }}>
                      {val.name}
                    </div>
                    {val.submenu && (
                      <div className="ml-auto mr-4">
                        {(val.name === "Master Data" && masterDataOpen) || (val.name === "Resource Manager" && resourceManagerOpen) ? <ChevronUp size="small" stroke="light" /> : <ChevronDown size="small" stroke="light" />}
                      </div>
                    )}
                  </div>
                </li>
                {val.submenu && ((val.name === "Master Data" && masterDataOpen) || (val.name === "Resource Manager" && resourceManagerOpen)) && (
                  <ul className="ml-12 space-y-6">
                    {val.submenu.map((item, subIndex) => (
                      <li
                        key={`submenu-${subIndex}`}
                        className="text-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNavigation(item.path);
                        }}
                        style={{ color: location.pathname.includes(item.path) ? "#DC362E" : undefined }}
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                )}
                {val.name === "Record Log" && <div className="border-b-2 border-[#E9E9E9] w-full my-2"></div>}
              </React.Fragment>
            ))}
            <li className="flex flex-row items-center" onClick={() => handleNavigation(logOutItem.path)}>
              <div className="ms-4 flex flex-row items-center w-full">
                <div className="mr-2 w-6 h-6">{logOutItem.icon}</div>
                <div className="text-sm">{logOutItem.name}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
