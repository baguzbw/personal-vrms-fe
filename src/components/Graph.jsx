import { LineChart } from "@mui/x-charts/LineChart";
import DropdownButton from "./DropdownButton";

const dataTranslation = [{ value: 120 }, { value: 110 }, { value: 140 }, { value: 90 }, { value: 60 }, { value: 99 }, { value: 105 }, { value: 85 }, { value: 91 }, { value: 41 }, { value: 30 }, { value: 20 }];

const dataNonTranslation = [{ value: 180 }, { value: 200 }, { value: 310 }, { value: 100 }, { value: 150 }, { value: 89 }, { value: 70 }, { value: 90 }, { value: 190 }, { value: 132 }, { value: 122 }, { value: 156 }];

const dataVendor = [{ value: 190 }, { value: 100 }, { value: 85 }, { value: 90 }, { value: 90 }, { value: 150 }, { value: 410 }, { value: 310 }, { value: 320 }, { value: 190 }, { value: 120 }, { value: 210 }];

const getCurrentYear = () => new Date().getFullYear();

const Grafik = () => {
  const currentYear = getCurrentYear();
  const options = [
    { label: "YEAR" }, // Judul dropdown
    ...Array.from({ length: 12 }, (_, i) => ({ label: currentYear - i })), // Opsi 10 tahun sebelumnya
  ];

  return (
    <div className="flex justify-around flex-wrap m-8">
      <div className="bg-white rounded-xl w-[1120px] h-[550px] border border-[#E9E9E9]">
        <div className="flex justify-start ml-[40px] mr-[24px] mt-[30px] font-figtree">
          <p className="font-[16px] mt-[12px] mr-[24px]">Resource</p>
          <DropdownButton options={options} />
        </div>
        <LineChart
          series={[
            {
              data: dataVendor.map((data) => data.value),
              color: "#DC362E",
              label: "Vendor",
            },
            {
              data: dataTranslation.map((data) => data.value),
              color: "#065BCC",
              label: "Translation",
            },
            {
              data: dataNonTranslation.map((data) => data.value),
              color: "#15BF64",
              label: "Non Translation",
            },
          ]}
          width={1080}
          height={496}
          xAxis={[
            {
              scaleType: "point",
              data: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Grafik;
