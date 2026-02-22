import React from 'react';
// React Icons
import { FiMenu, FiHome, FiUsers } from "react-icons/fi";
import { PiMedal, PiRocket } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
    // TODO: handle click for mobile menu
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    let menuActiveClass = isMenuOpen ? "-left-10" : "-left-full";

    return (
    <>
        <div className="navbar fixed w-full flex justify-center  z-50 transition-all">
            <div className="container bg-white/45 backdrop-blur-[15px] border border-white shadow-[1px_1px_15px_rgba(0,0,0,0.25)] max-w-[90%] my-4 p-2 rounded-[20px]">
                <div className="navbar-box flex items-center justify-between px-5 text-primary">
                    <div className="logo flex items-center gap-3">
                        <img src="public/assets/logo-pmbemunsri.webp" alt="Logo PM BEM 2025" className="w-16 h-16"/>
                        <h1 className="text-[18px] font-bold leading-5">PM BEM 2025 <br /> 
                            <span className="hidden lg:block font-normal">Universitas Sriwijaya</span>
                        </h1>
                    </div> 
                    <ul className={`
                        flex
                        lg:gap-14 gap-8
                        md:static
                        md:flex-row
                        md:w-auto
                        md:h-full
                        md:p-0
                        md:transision-none
                        fixed
                        translate-y-60
                        md:translate-y-0
                        flex-col 
                        p-8
                        ${menuActiveClass}
                        rounded-r-[20px] 
                        md:text-primary text-white 
                        md:bg-transparent bg-[#4ADE80]
                        shadow-[1px_1px_15px_rgba(0,0,0,0.25)] 
                        md:shadow-none 
                        transition-all
                        `}>
                        <li className="flex items-center gap-3">
                            <FiHome className="text-2xl md:hidden block"/>
                            <a href="#" className="font-medium hover:text-secondary hover:font-semibold transition-transform duration-300">Beranda</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <PiMedal className="text-2xl md:hidden block"/>
                            <a href="#" className="font-medium hover:text-secondary hover:font-semibold transition-transform duration-300">Tentang Kami</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <FiUsers className="text-2xl md:hidden block"/>
                            <a href="#" className="font-medium hover:text-secondary hover:font-semibold transition-transform duration-300">Profile</a>
                        </li>
                         <li className="flex items-center gap-3">
                            <PiRocket className="text-2xl md:hidden block"/>
                            <a href="#" className="flex items-center gap-1 font-medium hover:text-secondary hover:font-semibold transition-transform duration-300">Program Kerja
                                <IoIosArrowDown className="text-xl" />
                            </a>
                        </li>
                    </ul>
                    <div className="galeri flex items-center gap-2">
                        <a href="#" className="px-6 py-3 rounded-[25px] bg-gradient-to-r from-[#22C55E] to-[#4ADE80] hover:from-[#16A34A] hover:to-[#22C55E] text-white transition-all duration-300">Galeri</a>
                        <div className="block md:hidden" onClick={handleClick}>
                            <FiMenu className="text-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default Navbar;