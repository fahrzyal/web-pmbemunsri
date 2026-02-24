import React from 'react';
// React Icons
import { FiMenu, FiHome, FiUsers } from "react-icons/fi";
import { PiMedal, PiRocket, PiRocketLaunch } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineRecycling } from "react-icons/md";
import { GiCoffeeBeans } from "react-icons/gi";

const Navbar = () => {
    // TODO: handle click for mobile menu
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    let menuActiveClass = isMenuOpen ? "-left-10" : "-left-full";

    // TODO: handle click for dropdown menu
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

    const dropDownClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    let dropDownActive = isDropdownOpen ? "flex" : "hidden";

    return (
    <>
        <div className="navbar fixed flex w-full justify-center z-50 transition-all">
            <div className="container bg-white/45 backdrop-blur-[15px] border border-white shadow-[1px_1px_15px_rgba(0,0,0,0.25)] max-w-[85%] my-4 p-2 rounded-[20px]">
                <div className="navbar-box flex items-center justify-between px-5 text-primary">
                    <div className="logo flex items-center gap-3">
                        <img src="public/assets/logo-pmbemunsri.webp" alt="Logo PM BEM 2025" className="w-16 h-16"/>
                        <h1 className="text-[18px] font-bold leading-5">PM BEM 2025 <br /> 
                            <span className="hidden lg:block font-normal">Universitas Sriwijaya</span>
                        </h1>
                    </div> 
                    <ul className={`
                        fixed md:static 
                        flex md:flex-row  flex-col
                        p-8 md:p-0
                        lg:gap-14 gap-8
                        ${menuActiveClass}
                        md:w-auto md:h-full
                        md:transision-none
                        translate-y-60 md:translate-y-0
                        rounded-r-[20px] 
                        bg-[#22C55E] md:bg-transparent
                        text-white md:text-primary
                        shadow-[1px_1px_15px_rgba(0,0,0,0.25)] md:shadow-none 
                        transition-all
                        `}>
                        <li className="flex items-center gap-3">
                            <FiHome className="text-2xl md:hidden block"/>
                            <a href="#beranda"
                            // onClick={() => setActiveMenu("beranda")}
                            className='font-medium hover:text-secondary hover:font-semibold transition-transform duration-300'>Beranda</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <PiMedal className="text-2xl md:hidden block"/>
                            <a href="#tentang-kami" className="font-medium hover:text-secondary hover:font-semibold transition-transform duration-300">Tentang Kami</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <FiUsers className="text-2xl md:hidden block"/>
                            <a href="#visi-misi" className="font-medium hover:text-secondary hover:font-semibold transition-transform duration-300">Profile</a>
                        </li>
                        <li className="relative flex flex-col md:flex-row items-center gap-3">
                            <div className="flex flex-row gap-3 w-full">
                            <PiRocket className="text-2xl md:hidden block"/>
                            <button onClick={dropDownClick} className="flex items-center gap-1 font-medium hover:text-secondary hover:font-semibold transition-transform duration-300">
                                Program Kerja 
                                <IoIosArrowDown className={`
                                    transition-transform duration-300 
                                    ${isDropdownOpen ? "rotate-180" : ""}
                                    `} />
                            </button>
                            </div>

                            {/* Dropdown Program Kerja Menu */}
                            <ul className={`
                                md:absolute flex flex-col
                                md:flex 
                                gap-3 md:p-5
                                ${dropDownActive}
                                left-5
                                md:mt-44 w-max 
                                rounded-xl
                                md:bg-[#22C55E] text-white
                                md:shadow-lg
                                transition-all duration-300
                                ${
                                isDropdownOpen
                                    ? "opacity-100 scale-100 translate-y-0"
                                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                                }
                            `}>
                                <li className="flex flex-row items-center gap-2 font-normal text-base">
                                    <GiCoffeeBeans />
                                    <a href="">Home Dry Coffee</a>
                                </li>
                                <li className="flex flex-row gap-2 font-normal text-base">
                                    <MdOutlineRecycling className="mt-1"/>
                                    <a href="">Pengolahan Limbah <br />Kopi</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="galeri flex items-center gap-2">
                        <a href="#" className="px-6 py-3 rounded-[25px] bg-linear-to-r from-[#22C55E] to-[#4ADE80] hover:from-[#16A34A] hover:to-[#22C55E] text-white transition-all duration-300">Galeri</a>
                    </div>
                    <div className="block md:hidden" onClick={handleClick}>
                        <FiMenu className="text-2xl" />
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default Navbar;