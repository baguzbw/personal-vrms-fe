import React, { useEffect, useState } from "react";
import { Activity, ChevronDown, ChevronUp, Document, Folder, Home, Logout, TwoUsers } from "react-iconly";
import { Link, useLocation } from "react-router-dom";

export default function SideMenu() {
  const location = useLocation();
  const [submenuOpen, setSubmenuOpen] = useState(Array(6).fill(false));
  const [vipSubmenuOpen, setVipSubmenuOpen] = useState(false);
  const [masterDataBulk, setMasterDataBulk] = useState(false);
  const [resourceManagerBulk, setResourceManagerBulk] = useState(false);

  useEffect(() => {
    const isMasterDataActive = isActive("/master-data", menu[1].submenu);
    setMasterDataBulk(isMasterDataActive);

    const isResourceManagerActive = isActive("/resource-manager", menu[2].submenu);
    setResourceManagerBulk(isResourceManagerActive);
  }, [location.pathname]);

  const toggleSubmenu = (index) => {
    const newSubmenuOpen = [...submenuOpen];
    newSubmenuOpen[index] = !newSubmenuOpen[index];
    setSubmenuOpen(newSubmenuOpen);
  };

  const handleMenuClick = (index) => {
    toggleSubmenu(index);
  };

  const handleVipSubmenuClick = () => {
    setVipSubmenuOpen(!vipSubmenuOpen);
  };

  const isActive = (path, submenu) => {
    // Check if the current path is active
    if (location.pathname === path) {
      return true;
    }
    // Recursively check for active status in nested submenus
    if (submenu) {
      return submenu.some((item) => isActive(item.path, item.submenu));
    }
    return false;
  };

  const menu = [
    { name: "Dashboard", icon: <Home set={isActive("/dashboard") ? "bulk" : "two-tone"} />, path: "/dashboard" },
    {
      name: "Master Data",
      icon: <Folder set={masterDataBulk ? "bulk" : isActive("/master-data") ? "bulk" : "two-tone"} />,
      submenu: [
        {
          name: "Variable Input Form",
          submenu: [
            { name: "Translation", path: "/master-data/translation" },
            { name: "Non Translation", path: "/master-data/non-translation" },
            { name: "Vendor", path: "/master-data/vendor" },
          ],
        },
        { name: "Rate", path: "/master-data/rate" },
        { name: "Tools", path: "/master-data/tools" },
        { name: "Financial Directory", path: "/master-data/financial-directory" },
      ],
    },
    {
      name: "Resource Manager",
      icon: <Document set={resourceManagerBulk ? "bulk" : isActive("/resource-manager") ? "bulk" : "two-tone"} />,
      submenu: [
        { name: "Translation", path: "/resource-manager/translation" },
        { name: "Non Translation", path: "/resource-manager/non-translation" },
        { name: "Vendor", path: "/resource-manager/vendor" },
      ],
    },
    {
      name: "System Administrator",
      icon: <TwoUsers set={isActive("/system-administrator") ? "bulk" : "two-tone"} />,
      path: "/system-administrator",
    },
    {
      name: "Record Log",
      icon: <Activity set={isActive("/record-log") ? "bulk" : "two-tone"} />,
      path: "/record-log",
    },
    { name: "Log Out", icon: <Logout set="two-tone" />, path: "/login" },
  ];

  return (
    <div>
      <ul className="cursor-pointer">
        <div className="mb-4 text-[#BBBBBB] text-[12px] ml-[20px]">MAIN MENU</div>
        {menu.map((val, index) => (
          <React.Fragment key={index}>
            <li className="mb-7 mx-[20px] flex flex-row items-center" onClick={() => handleMenuClick(index)}>
              <div className="mr-[10px]">
                {React.cloneElement(val.icon, {
                  className: isActive(val.path, val.submenu) ? "text-[#DC362E]" : "text-[#000000]",
                })}
              </div>
              <Link to={val.path} className={isActive(val.path, val.submenu) ? "text-[#DC362E]" : ""}>
                {val.name}
              </Link>
              {val.submenu && (
                <button onClick={() => toggleSubmenu(index)} className="ml-auto">
                  {submenuOpen[index] ? <ChevronUp /> : <ChevronDown />}
                </button>
              )}
            </li>
            {val.submenu && submenuOpen[index] && (
              <ul className="ml-[45px] cursor-pointer">
                {val.submenu.map((subitem, subIndex) => (
                  <React.Fragment key={subIndex}>
                    <li className={"mb-7 flex flex-row items-center"} onClick={subitem.submenu ? handleVipSubmenuClick : undefined}>
                      <div className="mr-[10px]"></div>
                      <Link to={subitem.path} className={isActive(subitem.path, subitem.submenu) ? "text-[#DC362E]" : ""}>
                        {subitem.name}
                      </Link>
                      {subitem.name === "Variable Input Form" && <button className="ml-[32px]">{vipSubmenuOpen ? <ChevronUp set="light" /> : <ChevronDown set="light" />}</button>}
                    </li>
                    {subitem.name === "Variable Input Form" && vipSubmenuOpen && (
                      <ul className="ml-[15px] cursor-pointer">
                        {subitem.submenu.map((subsubitem, subsubIndex) => (
                          <li key={subsubIndex} className="mb-7 flex flex-row items-center">
                            <div className="mr-[10px]"></div>
                            <Link to={subsubitem.path} className={isActive(subsubitem.path) ? "text-[#DC362E]" : ""}>
                              {subsubitem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </React.Fragment>
                ))}
              </ul>
            )}
            {index === menu.length - 2 && <hr className="my-[33px] border-[#E9E9E9] w-full" />}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
