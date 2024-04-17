import { LineChart } from "@mui/x-charts/LineChart";
import DropdownButton from "../components/DropdownButton";

const dataTranslation = [
  { name: "January", value: 20 },
  { name: "February", value: 10 },
  { name: "March", value: 40 },
  { name: "April", value: 30 },
  { name: "May", value: 60 },
  { name: "June", value: 50 },
  { name: "July", value: 70 },
  { name: "August", value: 80 },
  { name: "September", value: 90 },
  { name: "October", value: 40 },
  { name: "November", value: 90 },
  { name: "December", value: 80 },
];

const dataNonTranslation = [
  { name: "January", value: 10 },
  { name: "February", value: 20 },
  { name: "March", value: 30 },
  { name: "April", value: 40 },
  { name: "May", value: 50 },
  { name: "June", value: 60 },
  { name: "July", value: 70 },
  { name: "August", value: 80 },
  { name: "September", value: 90 },
  { name: "October", value: 100 },
  { name: "November", value: 110 },
  { name: "December", value: 120 },
];

const dataVendor = [
  { name: "January", value: 90 },
  { name: "February", value: 90 },
  { name: "March", value: 80 },
  { name: "April", value: 70 },
  { name: "May", value: 60 },
  { name: "June", value: 50 },
  { name: "July", value: 40 },
  { name: "August", value: 30 },
  { name: "September", value: 20 },
  { name: "October", value: 10 },
  { name: "November", value: 20 },
  { name: "December", value: 10 },
];

const adjustedDataTranslation = dataTranslation.map((data, index) => ({
  ...data,
  index: index + 1, // Mulai dari 1
}));

const adjustedDataNonTranslation = dataNonTranslation.map((data, index) => ({
  ...data,
  index: index + 1, // Mulai dari 1
}));

const adjustedDataVendor = dataVendor.map((data, index) => ({
  ...data,
  index: index + 1, // Mulai dari 1
}));

const Grafik = () => (
  <div className="flex justify-around flex-wrap m-8">
    <div className="bg-white rounded-xl w-[1120px] h-[550px] border border-[#E9E9E9]">
    <div className="flex justify-start ml-[40px] mt-[30px]">
      <p className="font-[16px] my-[12px] mr-[24px]">Resource</p>
      <DropdownButton />
    </div>
      <LineChart
        series={[
          {
            data: adjustedDataTranslation.map((data) => data.value),
            name: "Translation",
            color: "#065BCC"
          },
          {
            data: adjustedDataNonTranslation.map((data) => data.value),
            name: "Non Translation",
            color: "#15BF64"
          },
          {
            data: adjustedDataVendor.map((data) => data.value),
            name: "Vendor",
            color: "#DC362E"
          },
        ]}
        width={1080}
        height={496}
      />
    </div>
  </div>
);

export default Grafik;