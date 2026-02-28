import React from 'react';
//React Icon
import { FiUsers } from "react-icons/fi";
import { PiMedal } from "react-icons/pi";

const About = () => {
    return (
        <div>
        <div>
            {/* About Section*/}
            <div id='about-us' className="about-us flex flex-col md:flex-row items-center md:h-screen md:pt-30 md:px-30">
                <div className="box-about-1 flex flex-col items-center w-screen md:w-1/2 h-fit md:h-full">
                    <div className="flex flex-col gap-5 pt-15 px-10 w-screen md:w-full text-primary-text dark:text-white">
                        <div className="flex flex-row gap-1">
                            <div className="h-2 w-3 mb-5 bg-green-500 mt-2 rounded-full"></div> 
                            <div className="h-2 w-12 mb-5 bg-green-500 mt-2 rounded-full"></div>
                        </div>
                        
                        <h2 className="font-semibold text-3xl md:text-4xl italic">About</h2>
                        <h1 className="font-bold text-4xl md:text-5xl"><span className="text-secondary-text">PM</span> BEM UNSRI?</h1>

                        <p className="text-justify font-medium text-sm">Pemberdayaan Masyarakat oleh “Badan Eksekutif Mahasiswa” (PM-BEM) merupakan program pendanaan untuk menjembatani kolaborasi dosen dalam pengembangan dan penerapan teknologi dan inovasi yang dihasilkan oleh perguruan tinggi dan inisiasi serta partisipasi 
                        mahasiswa untuk dapat memberikan manfaat bagi masyarakat. <br />
                        Kolaborasi dan sinergi antara dosen dan mahasiswa dalam melakukan pemberdayaan masyarakat dan peran partisipatif dari masyarakat diharapkan dapat memberikan dampak yang lebih terukur, nyata dan luas.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-5 p-10 w-screen md:w-full">
                        <div className="flex flex-row items-center mr-22 md:mr-0 py-2 pl-4 pr-15 gap-3 w-fit text-left border-2 border-secondary-text rounded-2xl transition-transform ease-in-out duration-500 hover:-rotate-5">
                            <FiUsers className='p-2 w-12 h-12 text-white bg-linear-to-r from-[#16A34A] to-[#22C55E] rounded-md' />
                            <h1 className="leading-6 font-bold italic text-2xl text-secondary-text">20+ <br /><span className="font-normal not-italic text-primary-text dark:text-white ">Members</span></h1>
                        </div>
                        <div className="flex flex-row items-center ml-22 md:ml-0 py-2 pr-4 pl-15 gap-3 w-fit text-right border-2 border-secondary-text rounded-2xl transition-transform ease-in-out duration-500 hover:rotate-5">
                            <h1 className="leading-6 font-bold italic text-2xl text-secondary-text">5 <br /><span className="font-normal not-italic text-primary-text dark:text-white">Outputs</span></h1>
                            <PiMedal className='p-2 w-12 h-12 text-white bg-linear-to-r from-[#16A34A] to-[#22C55E] rounded-md'/>
                        </div>
                    </div>
                </div>
                
                <div className="box-about-2 relative flex items-center justify-center w-screen md:w-1/2 h-fit md:h-full">
                    <img src="/assets/element-blurr.webp" alt="" loading="lazy" className="absolute top-1 right-14 w-40 animate-spin [animation-duration:40s] origin-center"/>
                    <img src="/assets/element-blurr.webp" alt="" loading="lazy" className=" absolute bottom-150 md:bottom-6 left-40 md:left-19 w-10 md:w-30 animate-spin [animation-duration:40s] [animation-direction:reverse] origin-center"/>
                    <img src="/assets/logo-pmbemunsri.webp" alt="" loading="lazy" title="Logo PM BEM Unsri" className="hidden md:block absolute py-6 w-70 md:w-sm bg-white/45 backdrop-blur-[15px] border border-white shadow-[1px_1px_15px_rgba(0,0,0,0.25)] dark:shadow-[1px_1px_15px_rgba(255,255,255,0.5)] rounded-2xl transition-transform ease-in-out duration-500 rotate-6 hover:rotate-0" />
                </div>
            </div>
        </div>
    </div>
    )
}

export default About;