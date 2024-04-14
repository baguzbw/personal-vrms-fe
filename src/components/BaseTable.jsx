import axios from "axios";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Setting, Star } from "react-iconly";

const options = [10, 25, 50, 100];

const BaseTable = () => {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/users?limit=100");
        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  const totalItems = users.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  const maxPageButtons = 10; // Max number of pagination buttons visible
  let startPage = Math.max(currentPage - Math.floor(maxPageButtons / 2), 1);
  let endPage = startPage + maxPageButtons - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - maxPageButtons + 1);
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const formatPageNumber = (number) => {
    return number.toString().padStart(2, "0");
  };

  return (
    <>
      <table className="w-full rounded-t-lg overflow-hidden text-sm shadow-sm border-[#E9E9E9]">
        <thead>
          <tr className="bg-[#F9F9F9] text-[#9A9A9A] text-left">
            <th style={{ width: "59px" }} className="py-3 border-y border-l border-[#E9E9E9] text-center">
              No.
            </th>
            <th style={{ width: "161px" }} className="py-3 border-y border-[#E9E9E9]">
              Username
            </th>
            <th style={{ width: "186px" }} className="py-3 border-y border-[#E9E9E9]">
              FullName
            </th>
            <th style={{ width: "217px" }} className="py-3 border-y border-[#E9E9E9]">
              Email
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
            <th style={{ width: "68px" }} className="py-3 border-y border-r border-[#E9E9E9] text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users.slice(startIndex, endIndex).map((user, index) => (
            <tr key={user.id} className="bg-white hover:bg-gray-100 text-sm text-gray-700">
              <td style={{ width: "59px" }} className="py-2 border-b border-l border-[#E9E9E9] text-center">
                {startIndex + index + 1}
              </td>
              <td style={{ width: "161px" }} className="py-2 border-b border-[#E9E9E9]">
                {user.username}
              </td>
              <td style={{ width: "186px" }} className="py-2 border-b border-[#E9E9E9]">{`${user.firstName} ${user.lastName}`}</td>
              <td style={{ width: "217px" }} className="py-2 border-b border-[#E9E9E9]">
                {user.email}
              </td>
              <td style={{ width: "161px" }} className="py-2 border-b border-[#E9E9E9]">
                {user.phone}
              </td>
              <td style={{ width: "137px" }} className="py-2 border-b border-[#E9E9E9]">
                <div className="flex items-center">
                  <Star size={18} primaryColor="#FFD155" set="bold" />
                  <span className="ml-1">
                    {user.age} <span className="text-[#BBBBBB]">/ 5</span>
                  </span>
                </div>
              </td>
              <td style={{ width: "119px" }} className="py-2 border-b border-[#E9E9E9]">
                {user.birthDate}
              </td>
              <td style={{ width: "68px" }} className="py-2 border-b border-r border-[#E9E9E9]">
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

      <div className="flex justify-between rounded-b-lg items-center bg-white border-b border-l border-r border-[#E9E9E9]">
        <div className="flex items-center">
          <label htmlFor="itemsPerPage" className="mr-2 text-sm text-gray-700 py-4 pl-4">
            Items per page:
          </label>
          <select id="itemsPerPage" className="border-[#E9E9E9] rounded-md text-sm mr-4" value={itemsPerPage} onChange={(e) => setItemsPerPage(Number(e.target.value))}>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <div className="border-r border-[#E9E9E9] h-[55px] mr-4"></div>
          <div className="text-[12px] text-[#9A9A9A]">{`${startIndex + 1}-${endIndex} of ${totalItems} items`}</div>
        </div>
        <div className="flex items-center">
          <hr className=" border-r h-[55px] border-[#E9E9E9]"></hr>
          <div className="mx-2 text-[12px]">
            {Array.from({ length: totalPages }, (_, i) => (
              <button key={i} onClick={() => handlePageChange(i + 1)} className={`mx-1 p-1 w-8 h-8 center rounded-md ${currentPage === i + 1 ? "bg-[#DC362E] text-white" : "text-gray-700"}`}>
                {formatPageNumber(i + 1)}
              </button>
            ))}
          </div>
          <div className="border-r border-[#E9E9E9] h-[55px]"></div>
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="p-1 rounded-md mx-2">
            <ChevronLeft size={20} />
          </button>
          <div className="border-r border-[#E9E9E9] h-[55px]"></div>
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="p-1 rounded-md mx-2">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </>
  );
};

export default BaseTable;
