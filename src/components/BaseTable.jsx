import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-iconly";

const options = [10, 25, 50, 100];

const BaseTable = ({ searchQuery, apiUrl, renderRow, renderHeader, showActions }) => {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}?q=${encodeURIComponent(searchQuery)}&limit=${itemsPerPage}&skip=${(currentPage - 1) * itemsPerPage}`);
        setData(response.data.users); 
        setTotalItems(response.data.total);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [searchQuery, itemsPerPage, currentPage, apiUrl]); 
 
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, itemsPerPage]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const formatPageNumber = (number) => {
    return number.toString().padStart(2, "0");
  };

  return (
    <>
      <table className="w-full rounded-t-lg overflow-hidden text-sm shadow-sm border-[#E9E9E9]">
        <thead>{renderHeader()}</thead>
        <tbody>{data.map((item, index) => renderRow(item, index, startIndex, showActions))}</tbody>
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
          <hr className="border-r h-[55px] border-[#E9E9E9]"></hr>
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

BaseTable.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  apiUrl: PropTypes.string.isRequired,
  renderRow: PropTypes.func.isRequired,
  renderHeader: PropTypes.func.isRequired,
  showActions: PropTypes.bool,
};

export default BaseTable;
