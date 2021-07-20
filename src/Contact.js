import React from 'react';

export const Contact = () => {
    return (
        <div>
            <div className="contact">
                <div className="w-full py-10 mx-auto flex text-center items-center justify-center ">
                    <div className="bg-none px-30 pt-1 pb-1 pl-3 pr-3 rounded-tl-xl rounded-br-xl  opacity-75 ">

                        <div className="flex my-2 ">

                            <div
                                className="transition duration-300 ease-in-out  hover: transform hover:-translate-y-1 hover:scale-110">
                                <a target="_blank" href="https://www.linkedin.com/in/ujwal-kumar-yadav-0671691b9">
                                    <i
                                        className="ld flex items-center justify-center rounded-full h-16 w-16 fab fill-current text-white pt-4 mr-0  text-3xl fa-linkedin-in"></i></a>
                            </div>

                            <div
                                className="transition duration-300 ease-in-out  hover: transform hover:-translate-y-1 hover:scale-110">
                                <a target="_blank" href="https://www.instagram.com/ujwalyadav_/">
                                    <i
                                        className="ig flex items-center justify-center  rounded-full h-16 w-16 fab fill-current text-white pt-4 mr-0  text-3xl fa-instagram"></i></a>
                            </div>

                            <div
                                className="transition duration-300 ease-in-out  hover: transform hover:-translate-y-1 hover:scale-110">
                                <a target="_blank" href="https://github.com/Ujwal-Yadav">
                                    <i
                                        className="gh flex items-center justify-center  rounded-full h-16 w-16 fab fill-current text-white pt-4 mr-0   text-3xl fa-github"></i></a>
                            </div>

                            <div
                                className="transition duration-300 ease-in-out  hover: transform hover:-translate-y-1 hover:scale-110">
                                <a target="_blank" href="https://www.facebook.com/ujwalkumar.yadav.58">
                                    <i
                                        className="fb flex items-center justify-center  rounded-full h-16 w-16  fab fill-current text-white  pt-4  mr-0 text-3xl fa-facebook-f"></i></a>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
