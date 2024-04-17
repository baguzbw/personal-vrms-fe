import { useState } from "react";
import { Filter } from "react-iconly";
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
      Email
    </th>
    <th style={{ width: "161px" }} className="py-3 border-y border-[#E9E9E9]">
      Whatsapp
    </th>

    <th style={{ width: "119px" }} className="py-3 border-y border-[#E9E9E9]">
      Created At
    </th>

  </tr>
);

const renderRow = (user, index, startIndex) => (
  <tr key={user.id} className="bg-white hover:bg-gray-100 text-sm text-gray-700">
    <td className="py-2 border-b border-l border-[#E9E9E9] text-center">{startIndex + index + 1}</td>
    <td className="py-2 border-b border-[#E9E9E9]">{user.username}</td>
    <td className="py-2 border-b border-[#E9E9E9]">{`${user.firstName} ${user.lastName}`}</td>
    <td className="py-2 border-b border-[#E9E9E9]">{user.email}</td>
    <td className="py-2 border-b border-[#E9E9E9]">{user.phone}</td>
    <td className="py-2 border-b border-[#E9E9E9]">{user.birthDate}</td>
  </tr>
);

export default function RecordLog() {
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
          <BaseButton className="bg-white border w-[48px] h-[48px] border-[#E9E9E9] hover:bg-gray-50">
            <Filter className="w-5 h-5 text-[#DC362E]" set="two-tone" />
          </BaseButton>
          <DropdownButton />
        </div>
      </div>
      <div className="px-8 pt-2 pb-8">
        <BaseTable searchQuery={searchQuery} apiUrl="https://dummyjson.com/users/search" renderRow={renderRow} renderHeader={renderHeader} showActions={true} />
      </div>
      <Footer />
    </div>
  );
}
