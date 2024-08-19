import { useAuth0 } from "@auth0/auth0-react";
import man from "../../assets/man.png";

const Auth = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="w-full h-screen max-h-screen p-4 flex items-center justify-center bg-[#EEF8F7]">
      <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-start w-full h-full max-w-[1440px]">
        <div className="h-[25rem] md:h-full">
          <img src={man} alt="hero-img" className="h-full" />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-[36px] text-[#438883] leading-[38px] mb-[1rem]">
            Track Your Expenses <br />
            Track Your Life
          </h1>
          <button
            className="bg-[#3E7C78] text-white w-[356px] h-[67px] rounded-full font-semibold text-[18px] shadow-2xl"
            onClick={() => loginWithRedirect()}
          >
            Get Started
          </button>
          <small className="text-[14px] text-[#444444] font-medium mt-[.5rem]">
            Do Not Have An Account? 
            <span
              onClick={() => loginWithRedirect()}
              className="text-[#438883] cursor-pointer"
            >
            . Sign Up
            </span>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Auth;
