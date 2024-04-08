import { Filter } from "react-iconly";
import BaseButton from "../../components/BaseButton";
import DropdownButton from "../../components/DropdownButton";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Search from "../../components/Search";

export default function RecordLog() {
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
          <DropdownButton />
        </div>
      </div>
      <Footer />
    </div>
  );
}
