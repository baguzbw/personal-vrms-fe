import { useState } from "react";
import { Hide, Show, User } from "react-iconly";
import Logo from "../../assets/StarSoftware.png";
import Button from "../../components/BaseButton";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[439px] p-8 bg-white shadow-md rounded-md items-center">
        <div className="flex flex-row place-content-center mb-[50px]">
          <img src={Logo} alt="star" />
        </div>
        <h1 className="text-[24px] font-medium mb-[24px] text-center">Login to Your Account</h1>
        <form>
          <div className="mb-6 relative">
            <label htmlFor="email" className="block mb-1 text-[14px]">
              Email:
            </label>
            <div className="relative">
              <input type="email" id="email" name="email" className="w-full px-4 py-4 rounded-[15px] text-[14px] border border-[#BBBBBB]" placeholder="Enter Your Email" />
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                <User set="two-tone" />
              </div>
            </div>
          </div>
          <div className="mb-6 relative">
            <label htmlFor="password" className="block mb-1 text-[14px]">
              Password:
            </label>
            <div className="relative">
              <input type={showPassword ? "text" : "password"} id="password" name="password" className="w-full px-4 py-4 rounded-[15px] text-[14px] border border-[#BBBBBB] font-figtree" placeholder="Enter Your Password" />
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer" onClick={togglePasswordVisibility}>
                {showPassword ? <Hide set="two-tone" /> : <Show set="two-tone" />}
              </div>
            </div>
          </div>
          <div className="mb-6 flex items-center">
            <input type="checkbox" id="remember" name="remember" className="mr-2" />
            <label htmlFor="remember" className="text-[14px]">
              Remember me
            </label>
          </div>
          <Button className="bg-[#DC362E] w-full h-[48px]" onClick>
            <span className="text-white">Login</span>
          </Button>
        </form>
      </div>
    </div>
  );
}
