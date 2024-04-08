import { useState } from "react";
import { ChevronDown } from "react-iconly";

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Set "Newest" as the default value for selectedLabel
  const [selectedLabel, setSelectedLabel] = useState("Newest");
  const items = [
    { key: "1", label: "Newest" },
    { key: "2", label: "Oldest" },
  ];

  const handleItemClick = (label) => {
    setSelectedLabel(label);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div onClick={() => setIsOpen(!isOpen)} className="inline-flex justify-between items-center w-[120px] h-[48px] text-[#232323] text-sm bg-white border border-[#E9E9E9] font-medium py-3 px-3 rounded-xl cursor-pointer">
        <span className="overflow-hidden whitespace-nowrap ms-1 text-ellipsis">{selectedLabel}</span>
        <ChevronDown className="w-5 h-5" />
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-[120px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
            {items.map((item) => (
              <a
                key={item.key}
                href="#"
                className="text-[#232323] block px-4 py-2 text-sm hover:bg-[#FBEBEA]"
                role="menuitem"
                tabIndex="-1"
                id={`menu-item-${item.key}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleItemClick(item.label);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
