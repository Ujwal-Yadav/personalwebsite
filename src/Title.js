import React from "react";
import HeaderSvg from "../src/assets/header-illustration.svg";
import CenterSvg from "../src/assets/center-illustration.svg";

export const Title = () => {
  return (
    <>
      <img className="header-svg w-full absolute" src={HeaderSvg} />
      <img
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        className="center-svg absolute flex justify-center items-center"
        src={CenterSvg}
        alt="Feature illustration"
        data-aos="zoom-out-up"
        data-aos-duration="800"
      />
      <div className="absolute inset-x-0 bottom-0 lg:w-1/2 w-full mx-auto p-5 z-20">
        <div>
          <div className="flex mt-4 justify-around items-center sm:mt-0">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ujwal-yadav"
              className="transition ease-in-out duration-200 hover:-translate-y-3"
            >
              <i className=" text-3xl text-gray-600 font-normal fab fa-linkedin-in"></i>
            </a>
            <a target="_blank" href="https://github.com/ujwal-yadav">
              <i className="text-3xl text-gray-600 font-normal fab fa-github transition ease-in-out duration-200 hover:-translate-y-3"></i>
            </a>
            <a
              target="_blank"
              href="mailto:ujwalofficial99@gmail.com"
              className="transition ease-in-out duration-200 hover:-translate-y-3"
            >
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  data-name="Layer 1"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="rgb(50, 57, 67)"
                    d="M16.58,19.1068l-12.69-8.0757A3,3,0,0,1,7.1109,5.97l9.31,5.9243L24.78,6.0428A3,3,0,0,1,28.22,10.9579Z"
                  />
                  <path
                    fill="rgb(75 85 99)"
                    d="M25.5,5.5h4a0,0,0,0,1,0,0v18a3,3,0,0,1-3,3h0a3,3,0,0,1-3-3V7.5a2,2,0,0,1,2-2Z"
                    transform="rotate(180 26.5 16)"
                  />
                  <path
                    fill="rgb(45, 55, 70)"
                    d="M29.4562,8.0656c-.0088-.06-.0081-.1213-.0206-.1812-.0192-.0918-.0549-.1766-.0823-.2652a2.9312,2.9312,0,0,0-.0958-.2993c-.02-.0475-.0508-.0892-.0735-.1354A2.9838,2.9838,0,0,0,28.9686,6.8c-.04-.0581-.09-.1076-.1342-.1626a3.0282,3.0282,0,0,0-.2455-.2849c-.0665-.0647-.1423-.1188-.2146-.1771a3.02,3.02,0,0,0-.24-.1857c-.0793-.0518-.1661-.0917-.25-.1359-.0884-.0461-.175-.0963-.267-.1331-.0889-.0358-.1837-.0586-.2766-.0859s-.1853-.06-.2807-.0777a3.0543,3.0543,0,0,0-.357-.036c-.0759-.0053-.1511-.0186-.2273-.018a2.9778,2.9778,0,0,0-.4219.0425c-.0563.0084-.113.0077-.1689.0193a33.211,33.211,0,0,0-.5645.178c-.0515.022-.0966.0547-.1465.0795A2.901,2.901,0,0,0,23.5,8.5v5.762l4.72-3.3043a2.8878,2.8878,0,0,0,1.2359-2.8923Z"
                  />
                  <path
                    fill="rgb(75 85 99)"
                    d="M5.5,5.5h0a3,3,0,0,1,3,3v18a0,0,0,0,1,0,0h-4a2,2,0,0,1-2-2V8.5a3,3,0,0,1,3-3Z"
                  />
                  <path
                    fill="rgb(75 85 99)"
                    d="M2.5439,8.0656c.0088-.06.0081-.1213.0206-.1812.0192-.0918.0549-.1766.0823-.2652A2.9312,2.9312,0,0,1,2.7426,7.32c.02-.0475.0508-.0892.0736-.1354A2.9719,2.9719,0,0,1,3.0316,6.8c.04-.0581.09-.1076.1342-.1626a3.0272,3.0272,0,0,1,.2454-.2849c.0665-.0647.1423-.1188.2147-.1771a3.0005,3.0005,0,0,1,.24-.1857c.0793-.0518.1661-.0917.25-.1359A2.9747,2.9747,0,0,1,4.3829,5.72c.089-.0358.1838-.0586.2766-.0859s.1853-.06.2807-.0777a3.0565,3.0565,0,0,1,.357-.036c.076-.0053.1511-.0186.2273-.018a2.9763,2.9763,0,0,1,.4219.0425c.0563.0084.113.0077.169.0193a2.9056,2.9056,0,0,1,.286.0888,2.9157,2.9157,0,0,1,.2785.0892c.0514.022.0965.0547.1465.0795a2.9745,2.9745,0,0,1,.3742.21A2.9943,2.9943,0,0,1,8.5,8.5v5.762L3.78,10.9579A2.8891,2.8891,0,0,1,2.5439,8.0656Z"
                  />
                </svg>
              </i>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/ujwalyadav_/"
              className="transition ease-in-out duration-200 hover:-translate-y-3"
            >
              <i className="text-3xl text-gray-600 font-normal fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center h-screen text-gray-100 backdrop-invert bg-slate-800/50">
        <div className="p-5 text-center z-10">
          <p
            className="font-medium text-2xl text-gray-400"
            data-aos="fade-zoom-in"
            data-aos-duration="500"
          >
            Hello, I am
          </p>
          <h1
            className="name my-5 my-8 lg:text-8xl text-5xl"
            data-aos="zoom-out-up"
            data-aos-duration="800"
          >
            Ujwal Kumar Yadav
          </h1>

          <button
            className="cursor-text rounded-full font-semibold lg:text-3xl text-white rounded-full lg:px-4 lg:py-1 px-2 py-1 bg-gradient-to-r from-rose-600/90 via-rose-500/70 to-red-500/30"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Software Developer
          </button>
        </div>
      </div>
    </>
  );
};
