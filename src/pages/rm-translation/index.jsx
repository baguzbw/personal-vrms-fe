import { PaperDownload, PaperUpload, Plus } from "react-iconly";
import BaseButton from "../../components/BaseButton";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Search from "../../components/Search";
import DropdownButton from "../../components/DropdownButton";


export default function Translation() {
  return (
    <div>
      <Navbar />
      <div className="p-8 flex justify-between gap-4">
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
          <Search>
            <input type="text" placeholder="Search" className="py-3 px-2 ms-2 outline-none w-full text-sm" />
          </Search>
          <DropdownButton />
          <BaseButton className="bg-[#DC362E] border w-[131px] h-[48px] border-[#E9E9E9] hover:bg-red-500">
            <Plus className="w-4 h-4 text-white" set="curved" />
            <span className="text-white">Add</span>
          </BaseButton>
        </div>
      </div>
      <Footer />
    </div>
  );
}
