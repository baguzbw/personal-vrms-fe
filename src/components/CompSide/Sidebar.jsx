import Logo from "../../assets/StarSoftware.png";
import SideMenu from "./SideMenu";

export default function Sidebar() {
  return (
    <div className="border border-r border-[#E9E9E9] w-[274px] bg-white py-[30px]">
      <div className="flex flex-row place-content-center mb-[50px]">
        <img src={Logo} alt="star" />
      </div>
      <div>
        <SideMenu />
      </div>
    </div>
  );
}