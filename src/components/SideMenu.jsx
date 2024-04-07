import PropTypes from "prop-types";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "react-iconly";
import { useLocation, useNavigate } from "react-router-dom";

function SideMenu({ menu }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [openSubMenus, setOpenSubMenus] = useState({});

  const toggleSubMenu = (name) => {
    setOpenSubMenus({ ...openSubMenus, [name]: !openSubMenus[name] });
  };

  const isActiveSubMenuParent = (submenu) => {
    return submenu.some((item) => location.pathname.includes(item.path));
  };

  const isActive = (path, submenu) => {
    return location.pathname === path || (submenu && isActiveSubMenuParent(submenu));
  };

  const handleNavigation = (path) => {
    if (path) navigate(path);
  };

  return (
    <div>
      <div className="space-y-12 cursor-pointer">
        <div>
          <div className="mb-6 text-gray-300 ms-4 font-medium text-xs">MAIN MENU</div>
          <ul className="space-y-7 mb-8">
            {menu.map((item, index) => (
              <React.Fragment key={`menu-${index}`}>
                <li onClick={() => (item.submenu ? toggleSubMenu(item.name) : handleNavigation(item.path))} className={`flex flex-row items-center ${item.submenu ? "cursor-pointer" : ""}`}>
                  <div className="ms-4 flex flex-row items-center w-full">
                    <div className="mr-2 w-6 h-6">
                      {React.cloneElement(item.icon, {
                        set: isActive(item.path, item.submenu) ? "bulk" : "two-tone", // Change to 'bulk' when active
                        primaryColor: isActive(item.path, item.submenu) ? "#DC362E" : undefined,
                      })}
                    </div>
                    <div className={`text-sm flex-grow ${isActive(item.path, item.submenu) ? "text-[#DC362E]" : ""}`}>{item.name}</div>
                    {item.submenu && <div className="ml-auto mr-4">{openSubMenus[item.name] ? <ChevronUp size="small" stroke="light" /> : <ChevronDown size="small" stroke="light" />}</div>}
                  </div>
                </li>
                {item.submenu && openSubMenus[item.name] && (
                  <ul className="ml-12 space-y-6">
                    {item.submenu.map((subItem, subIndex) => (
                      <li
                        key={`submenu-${subIndex}`}
                        className={`text-sm ${location.pathname.includes(subItem.path) ? "text-[#DC362E]" : ""}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNavigation(subItem.path);
                        }}
                      >
                        {subItem.name}
                      </li>
                    ))}
                  </ul>
                )}
                {item.name === "Record Log" && <div className="border-b-2 border-[#E9E9E9] w-full my-2"></div>}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

SideMenu.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
      path: PropTypes.string,
      submenu: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          path: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
};

export default SideMenu;
