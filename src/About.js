import React from "react";
import Dp from "../src/assets/dp.png";

export const About = () => {
  return (
    <div className="text-gray-100 lg:text-3xl text-xl flex justify-center items-center backdrop-invert bg-slate-800/50">
      <div className="flex justify-center items-center pt-16">
        <div
          className="lg:w-3/6 m-4 lg:p-8 p-4 bg-slate-800/40 shadow-lg rounded-xl my-20"
          data-aos="zoom-in-up"
          data-aos-duration="800"
        >
          <div className="flex justify-center md:justify-end">
            <img
              src={Dp}
              className="rounded-full bg-white p-0.5 shadow-lg lg:w-52 w-32 -mt-20 lg:-mt-28"
            />
          </div>
          <div>
            <p className="my-5 text-white lg:text-2xl lg:text-left text-base text-center font-medium tracking-wide">
              I am Ujwal, A software developer based out of Odisha, India. I
              have completed my Bachelor's of Technology in Computer Science &
              Engineering from Dhaneswar Rath Institute of Engineering and
              Management Studies, Odisha.
              <br />I have a predilection for design and enjoy working on
              projects where approaching design and development as co-dependent
              processes can lead to smarter solutions and a better overall
              product experience for fellow humans. <br />
              If you have an exciting project in mind, or just wanna chat, get
              in touch with me.
            </p>
          </div>
          <div className="flex justify-end mt-10">
            <h2 className="text-blue-500 text-xl font-semibold">
              Ujwal Kumar Yadav
            </h2>
          </div>
          <div className="flex justify-end mb-4">
            <a href="#" className="text-sm font-semibold text-gray-500">
              Software Developer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
