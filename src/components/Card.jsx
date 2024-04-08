import { Card } from "antd";
import { TwoUsers } from "react-iconly";

const data = {
  totalVendors: 300,
  totalTranslations: 150,
  totalNonTranslations: 75,
};

const backgroundColors = {
  totalVendors: "bg-[#FBEBEA]",
  totalTranslations: "bg-[#E6EFFA]",
  totalNonTranslations: "bg-[#E8F9F0]",
};

const iconColors = {
  totalVendors: "#DC362E",
  totalTranslations: "#065BCC",
  totalNonTranslations: "#15BF64",
};

const MiniCards = () => (
  <div className="flex justify-around flex-wrap">
    {Object.entries(data).map(([key, value]) => (
      <Card key={key} className="flex flex-col items-center justify-center w-80 h-40 font-figtree mx-8 ">
        <div className="flex items-center justify-end w-full px-4">
          <div className={`flex items-center justify-center w-20 h-20 rounded-full ${backgroundColors[key]} mr-6`}>
            <span style={{ color: iconColors[key] }}>
              <TwoUsers size={32} set="bulk" />
            </span>
          </div>
          <div>
            <p className="text-2xl mb-1 text-[#232323] font-bold">{value}</p>
            <p className="text-[13px] text-[#9A9A9A]">
              {key
                .replace("total", "Total ")
                .replace(/([A-Z])/g, " $1")
                .trim()}
            </p>
            <p className="text-[13px] text-[#9A9A9A]">This Month</p>
          </div>
        </div>
      </Card>
    ))}
  </div>
);

export default MiniCards;
