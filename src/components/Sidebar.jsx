import Logo from "../img/StarSoftware.png";
import SideMenu from "./SideMenu";
import { Home, Folder, Document, TwoUsers, Activity, Logout } from "react-iconly";

// ngirim props
const menuConfig = [
  { name: "Dashboard", icon: <Home set="two-tone" />, path: "/dashboard" },
  {
    name: "Master Data",
    icon: <Folder set="two-tone" />,
    submenu: [
      { name: "Item 1", path: "/master-data/item1" },
      { name: "Item 2", path: "/master-data/item2" },
    ],
  },
  {
    name: "Resource Manager",
    icon: <Document set="two-tone" />,
    submenu: [
      { name: "Translation", path: "/resource-manager/translation" },
      { name: "Non Translation", path: "/resource-manager/non-translation" },
      { name: "Vendor", path: "/resource-manager/vendor" },
    ],
  },
  {
    name: "System Administrator",
    icon: <TwoUsers set="two-tone" />,
    path: "/system-administrator",
  },
  { name: "Record Log", icon: <Activity set="two-tone" />, path: "/record-log" },
  { name: "Log Out", icon: <Logout set="two-tone" />, path: "/logout" },
];

export default function Sidebar() {
  return (
    <div className="h-screen border-r border-[#E9E9E9] w-[274px] bg-white py-[30px]">
      <div className="flex justify-center mb-[50px]">
        <img src={Logo} alt="Star Software Logo" />
      </div>
      <SideMenu menu={menuConfig} />
    </div>
  );
}
