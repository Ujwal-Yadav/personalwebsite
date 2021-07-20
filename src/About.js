import React from 'react'
import Dp from './Images/dp.jpg';

export const About = () => {
    return (
        <div className="about ">
            <section className="text-gray-600 body-font ">
                <div className=" container px-5 py-24 mx-auto flex flex-col ">
                    <div className=" flex flex-col sm:flex-row mt-10 ">
                        <div className="sm:w-1/3 text-center sm:pr-8  pt-20 ">
                            <div className="w-40 h-40 rounded-full inline-flex items-center justify-center ">
                                <img className=" object w-40 h-40 ... rounded-full inline-flex inline-flex items-center justify-center" src={Dp} alt="Display Picture" />
                            </div>

                            <div className=" flex flex-col items-center text-center justify-center ">
                                <h2 className=" font-medium title-font mt-4 text-white text-lg ">Ujwal Kumar Yadav</h2>
                                <div className=" w-12 h-1 bg-indigo-500 rounded mt-2 mb-4">
                                </div>
                                <p className="text-base text-gray-400 tracking-wider">Software Engineer</p>
                            </div>
                        </div>

                        <div className="sm:w-2/3 sm:pl-12 sm:pr-20 sm:py-20 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 ml-2 mr-5 sm:mt-0 text-center sm:text-left font-medium">
                            <div className="text-about">
                                <p className="backdrop-filter backdrop-contrast-12 leading-relaxed text-lg pl-2 mb-4 text-white tracking-widest   ">I am
                                    Ujwal, A software engineering student based out of
                                    Cuttack, India.I am pursuing my Bachelor's of Technology in Computer Science & Engineering from
                                    DRIEMS, Cuttack.<br />
                                    I have a predilection for design and enjoy working on projects where
                                    approaching design and development as co-dependent processes can lead to smarter solutions
                                    and a better overall product experience for fellow humans. If you have an exciting project
                                    in mind, or just wanna chat, get in touch with me here.</p>
                            </div>
                        </div>

                        <a className="text-indigo-500 inline-flex items-center"></a>

                    </div>
                </div>
            </section>
        </div>
    )
}
