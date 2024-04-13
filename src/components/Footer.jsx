export default function Footer() {
  return (
    <div className="mb-8">
      <hr className="border-t border-[#E9E9E9] mx-[30px]" />
      <div className="flex flex-row">
        <div
          style={{
            textAlign: "left",
            marginTop: "20px",
            paddingInline: "30px",
            marginInlineEnd: "auto",
          }}
          className="text-[#9A9A9A] text-[12px]"
        >
          {new Date().getFullYear()} © VRMS Dashboard
        </div>
        <div
          style={{
            textAlign: "right",
            marginTop: "20px",
            paddingInline: "30px",
          }}
          className="text-[#9A9A9A] flex flex-row"
        >
          <div className="mr-[20px] text-[12px]">About</div>
          <div className="mr-[20px] text-[12px]">Terms & Condition</div>
          <div className="mr-[20px] text-[12px]">Privacy Policy</div>
        </div>
      </div>
    </div>
  );
}
