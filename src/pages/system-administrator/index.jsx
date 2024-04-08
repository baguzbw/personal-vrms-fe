import { Filter, Plus } from "react-iconly";
import BaseButton from "../../components/BaseButton";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Search from "../../components/Search";

export default function SystemAdministrator() {
  return (
    <div>
      <Navbar />
      <div className="p-8 flex justify-between gap-4">
        <div className="flex gap-4">
          <Search>
            <input type="text" placeholder="Search" className="py-3 px-2 ms-2 outline-none w-full text-sm" />
          </Search>
          <BaseButton className="bg-white border w-[48px] h-[48px] border-[#E9E9E9] hover:bg-gray-50">
            <Filter className="w-5 h-5 text-[#DC362E]" set="two-tone" />
          </BaseButton>
        </div>
        <div className="flex gap-4">
          <BaseButton className="bg-[#DC362E] border border-[#E9E9E9] w-[131px] h-[48px] hover:bg-red-500">
            <Plus className="w-4 h-4 text-white" set="curved" />
            <span className="text-white">Add User</span>
          </BaseButton>
        </div>
      </div>
      <Footer />
    </div>
  );
}
