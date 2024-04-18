import { DotsThreeVertical, Plus } from "@phosphor-icons/react";
import { useState } from "react";
import { PaperDownload, PaperUpload, Star } from "react-iconly";
import BaseButton from "../../../components/BaseButton";
import BaseTable from "../../../components/BaseTable";

import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import SearchInput from "../../../components/Search";

const renderHeader = () => (
  <tr className="bg-[#F9F9F9] text-[#9A9A9A] text-left h-[57px]">
    <th className="py-3 w-[59px] border-y border-l border-[#E9E9E9] text-center">No.</th>
    <th className="py-3 w-[161px] border-y border-[#E9E9E9]">Username</th>
    <th className="py-3 w-[186px] border-y border-[#E9E9E9]">Full Name</th>
    <th className="py-3 w-[217px] border-y border-[#E9E9E9]">Email</th>
    <th className="py-3 w-[161px] border-y border-[#E9E9E9]">Whatsapp</th>
    <th className="py-3 w-[137px] border-y border-[#E9E9E9]">Average Rating</th>
    <th className="py-3 w-[119px] border-y border-[#E9E9E9]">Created At</th>
    <th className="py-3 w-[68px] border-y border-r border-[#E9E9E9] ">Action</th>
  </tr>
);

const renderRow = (user, index, startIndex, showActions) => (
  <tr key={user.id} className="bg-white hover:bg-gray-100 text-sm text-gray-700 h-[57px]">
    <td className="py-2 border-b border-l border-[#E9E9E9] text-center">{startIndex + index + 1}</td>
    <td className="py-2 border-b border-[#E9E9E9]">{user.maidenName}</td>
    <td className="py-2 border-b border-[#E9E9E9]">{`${user.firstName} ${user.lastName}`}</td>
    <td className="py-2 border-b border-[#E9E9E9]">{user.email}</td>
    <td className="py-2 border-b border-[#E9E9E9]">{user.phone}</td>
    <td className="py-2 border-b border-[#E9E9E9]">
      <div className="flex items-center">
        <Star set="bold" primaryColor="#FFD155" size={18} />
        {user.age} <span className="ml-1 text-[#BBBBBB]">/ 5</span>
      </div>
    </td>
    <td className="py-2 border-b border-[#E9E9E9]">{user.birthDate}</td>
    {showActions && (
      <td className="py-2 border-b border-r border-[#E9E9E9]">
        <button className="ms-2 focus:outline-none">
          <DotsThreeVertical color="#DC362E" size={24} weight="bold" />
        </button>
      </td>
    )}
  </tr>
);

export default function Vendor() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="p-8 pt-8 flex justify-between gap-4">
        <div className="flex gap-4">
          <BaseButton className="bg-white w-[131px] h-[48px] border border-[#E9E9E9] hover:bg-gray-50">
            <PaperUpload className="w-4 h-4 text-[#DC362E]" set="two-tone" />
            <span className="text-[#DC362E]">Import</span>
          </BaseButton>
          <BaseButton className="bg-white border w-[131px] h-[48px] border-[#E9E9E9] hover:bg-gray-50">
            <PaperDownload className="w-4 h-4 text-[#DC362E]" set="two-tone" />
            <span className="text-[#DC362E]">Export</span>
          </BaseButton>
        </div>

        <div className="flex gap-4">
          <SearchInput>
            <input type="text" placeholder="Search" className="py-3 px-2 ms-2 outline-none w-full text-sm" onChange={handleSearch} />
          </SearchInput>
        
          <BaseButton className="bg-[#DC362E] border w-[131px] h-[48px] border-[#E9E9E9] hover:bg-red-500">
            <Plus className="w-4 h-4 text-white" size={24} weight="bold" />
            <span className="text-white">Add</span>
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
