import { DotsThreeVertical, Plus } from "@phosphor-icons/react";
import { useState } from "react";
import BaseButton from "../../components/BaseButton";
import BaseTable from "../../components/BaseTable";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SearchInput from "../../components/Search";

const renderHeader = () => (
  <tr className="bg-[#F9F9F9] text-[#9A9A9A] text-left h-[57px]">
    <th className="py-3 border-y w-[66px] border-l border-[#E9E9E9] text-center">No.</th>
    <th className="py-3 w-[336px] border-y border-[#E9E9E9]">Full Name</th>
    <th className="py-3 w-[343px] border-y border-[#E9E9E9]">Email</th>
    <th className="py-3 w-[291px] border-y border-[#E9E9E9]">Role</th>
    <th className="py-3 w-[72px] border-y border-r border-[#E9E9E9] ">Action</th>
  </tr>
);

const renderRow = (user, index, startIndex, showActions) => (
  <tr key={user.id} className="bg-white hover:bg-gray-100 text-sm text-gray-700 h-[57px]">
    <td className="py-2 border-b border-l border-[#E9E9E9] text-center">{startIndex + index + 1}</td>
    <td className="py-2 border-b border-[#E9E9E9]">{`${user.firstName} ${user.lastName}`}</td>
    <td className="py-2 border-b border-[#E9E9E9]">{user.email}</td>
    <td className="py-2 border-b border-[#E9E9E9]">{user.company.department}</td>
    {showActions && (
      <td className="py-2 border-b border-r border-[#E9E9E9]">
        <button className="ms-2 focus:outline-none">
          <DotsThreeVertical color="#DC362E" size={24} weight="bold" />
        </button>
      </td>
    )}
  </tr>
);

export default function SystemAdministrator() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="p-8 pt-8 flex justify-between gap-4">
        <div className="flex gap-4">
          <SearchInput>
            <input type="text" placeholder="Search" className="py-3 px-2 ms-2 outline-none w-full text-sm" onChange={handleSearch} />
          </SearchInput>
        </div>

        <div className="flex gap-4">
          <BaseButton className="bg-[#DC362E] border w-[131px] h-[48px] border-[#E9E9E9] hover:bg-red-500">
            <Plus className="w-4 h-4 text-white" size={24} weight="bold" />
            <span className="text-white">Add Data</span>
          </BaseButton>
        </div>
      </div>
      <div className="px-8 pt-2 pb-8">
        <BaseTable searchQuery={searchQuery} apiUrl="https://dummyjson.com/users/search" renderRow={renderRow} renderHeader={renderHeader} showActions={true} />
      </div>
      <Footer />
    </div>
  );
}
