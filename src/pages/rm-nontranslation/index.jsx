import { useState } from "react";
import { PaperDownload, PaperUpload, Plus, Setting, Star } from "react-iconly";
import BaseButton from "../../components/BaseButton";
import BaseTable from "../../components/BaseTable";
import DropdownButton from "../../components/DropdownButton";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SearchInput from "../../components/Search";

const renderHeader = () => (
  <tr className="bg-[#F9F9F9] text-[#9A9A9A] text-left">
    <th style={{ width: "59px" }} className="py-3 border-y border-l border-[#E9E9E9] text-center">
      No.
    </th>
    <th style={{ width: "161px" }} className="py-3 border-y border-[#E9E9E9]">
      Username
    </th>
    <th style={{ width: "186px" }} className="py-3 border-y border-[#E9E9E9]">
      Full Name
    </th>
    <th style={{ width: "217px" }} className="py-3 border-y border-[#E9E9E9]">
      Domain
    </th>
    <th style={{ width: "161px" }} className="py-3 border-y border-[#E9E9E9]">
      Whatsapp
    </th>
    <th style={{ width: "137px" }} className="py-3 border-y border-[#E9E9E9]">
      Average Rating
    </th>
    <th style={{ width: "119px" }} className="py-3 border-y border-[#E9E9E9]">
      Created At
    </th>
    <th style={{ width: "68px" }} className="py-3 border-y border-r border-[#E9E9E9] ">
      Action
    </th>
  </tr>
);

const renderRow = (user, index, startIndex, showActions) => (
  <tr key={user.id} className="bg-white hover:bg-gray-100 text-sm text-gray-700">
    <td className="py-2 border-b border-l border-[#E9E9E9] text-center">{startIndex + index + 1}</td>
    <td className="py-2 border-b border-[#E9E9E9]">{user.username}</td>
    <td className="py-2 border-b border-[#E9E9E9]">{`${user.firstName} ${user.lastName}`}</td>
    <td className="py-2 border-b border-[#E9E9E9]">{user.domain}</td>
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
          <Setting set="two-tone" primaryColor="#DC362E" size="medium" />
        </button>
      </td>
    )}
  </tr>
);

export default function NonTranslation() {
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
          <DropdownButton />
          <BaseButton className="bg-[#DC362E] border w-[131px] h-[48px] border-[#E9E9E9] hover:bg-red-500">
            <Plus className="w-4 h-4 text-white" set="curved" />
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
