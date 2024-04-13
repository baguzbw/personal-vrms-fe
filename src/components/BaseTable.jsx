import { useState } from "react";
import { ChevronLeft, ChevronRight, Setting } from "react-iconly";

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "5",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "6",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "7",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "8",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "9",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "10",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "8",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "9",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "10",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
];

const options = [10, 25, 50, 100];

const BaseTable = () => {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const formatPageNumber = (number) => {
    return number.toString().padStart(2, "0");
  };

  return (
    <>
      <table className="w-full border-collapse rounded-t-lg overflow-hidden text-sm shadow-sm border border-[#D9D9D9]">
        <thead>
          <tr className="bg-[#F9F9F9] text-[#9A9A9A] text-left">
            <th className="py-3 border-b border-[#D9D9D9] text-center">No.</th>
            <th className="py-3 border-b border-[#D9D9D9]">Name</th>
            <th className="py-3 border-b border-[#D9D9D9]">Age</th>
            <th className="py-3 border-b border-[#D9D9D9]">Address</th>
            <th className="py-3 border-b border-[#D9D9D9] text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(startIndex, endIndex).map((item, index) => (
            <tr key={item.key} className="bg-white hover:bg-gray-100 text-sm text-gray-700">
              <td className="py-2 border-b border-gray-300 text-center">{index + 1}</td>
              <td className="py-2 border-b border-gray-300">{item.name}</td>
              <td className="py-2 border-b border-gray-300">{item.age}</td>
              <td className="py-2 border-b border-gray-300">{item.address}</td>
              <td className="py-2 border-b border-gray-300">
                <div className="flex justify-center items-center h-full">
                  <button title="Settings" className="text-center focus:outline-none">
                    <Setting set="two-tone" primaryColor="#DC362E" size="medium" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between rounded-b-lg items-center p-4 bg-white border-t border-[#D9D9D9]">
        <div className="flex items-center">
          <label htmlFor="itemsPerPage" className="mr-2 text-sm text-gray-700">
            Items per page:
          </label>
          <select id="itemsPerPage" className="border-gray-300 rounded-md text-sm mr-4" value={itemsPerPage} onChange={(e) => setItemsPerPage(Number(e.target.value))}>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <div className="border-r border-gray-300 h-6 mr-4"></div>
          <div className="text-sm text-gray-700">{`${startIndex + 1}-${endIndex} of ${totalItems} items`}</div>
        </div>
        <div className="flex items-center">
          <div className="mx-2 border-r border-gray-300 h-6"></div>
          {Array.from({ length: totalPages }, (_, i) => (
            <button key={i} onClick={() => handlePageChange(i + 1)} className={`mx-1 p-1 w-8 h-8 center rounded-md ${currentPage === i + 1 ? "bg-[#DC362E] text-white" : "text-gray-700"}`}>
              {formatPageNumber(i + 1)}
            </button>
          ))}
          <div className="mx-2 border-r border-gray-300 h-6"></div>
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="p-1 rounded-md">
            <ChevronLeft />
          </button>
          <div className="mx-2 border-r border-gray-300 h-6"></div>
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="p-1 rounded-md">
            <ChevronRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default BaseTable;
