import React from 'react';

const Navbar = () => {
    return (
    <>
        <div className="navbar fixed w-full flex justify-center transition-all">
            <div className="container bg-white/45 backdrop-blur-[15px] border border-white shadow-[1px_1px_15px_rgba(0,0,0,0.25)] max-w-[90%] my-4 p-2 rounded-[20px]">
                <div className="navbar-box flex items-center justify-between px-5 text-primary">
                    <div className="logo flex items-center gap-3">
                        <img src="public/assets/logo-pmbemunsri.webp" alt="Logo PM BEM 2025" className="w-16 h-16"/>
                        <h1 className="text-[18px] font-bold leading-5">PM BEM 2025 <br /> 
                            <span className="font-normal">Universitas Sriwijaya</span>
                        </h1>
                    </div>
                    <ul className="flex lg:gap-12 md:static gap-5 fixed left-0 top-120 -translate-y-1/2 flex-col px-12 py-10 rounded shadow-lg shadow shadow-slate-300 bg-secondary">
                        <li>
                            <a href="#" className="font-medium hover:text-secondary hover:font-semibold transition-transform duration-300">Beranda</a>
                        </li>
                         <li>
                            <a href="#" className="font-medium hover:text-secondary hover:font-semibold transition-transform duration-300">Tentang Kami</a>
                        </li>
                         <li>
                            <a href="#" className="font-medium hover:text-secondary hover:font-semibold transition-transform duration-300">Profile</a>
                        </li>
                         <li>
                            <a href="#" className="font-medium hover:text-secondary hover:font-semibold transition-transform duration-300">Program Kerja</a>
                        </li>
                    </ul>
                    <div className="galeri">
                        <a href="#" className="px-6 py-3 rounded-[25px] bg-gradient-to-r from-[#22C55E] to-[#4ADE80] hover:from-[#16A34A] hover:to-[#22C55E] text-white transition-all duration-300">Galeri</a>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default Navbar;