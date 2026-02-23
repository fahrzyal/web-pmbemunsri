import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

// React Icons
import { FiMenu, FiHome, FiUsers } from "react-icons/fi";
import { PiMedal } from "react-icons/pi";

const Homepage = () => {
    return (
        <div className="homepage flex items-center justify-center w-full">
            <div className="container flex flex-col items-center w-full pt-32 md:pt-0 overflow-hidden">
                {/* Hero Section */}
                <div id="beranda" className="hero md:relative flex flex-col items-center justify-center md:h-screen mx-5 md:mx-0 overflow-hidden">
                    <div className="box-hero-1 md:relative lg:block hidden">
                        <Swiper
                            spaceBetween={0}
                            effect={'fade'}
                            centeredSlides={true}
                            loop={true}
                            autoplay={{
                            delay: 2300,
                            disableOnInteraction: false,
                            }}
                            pagination={{
                            clickable: true,
                            }}
                            navigation={false}
                            modules={[Autoplay, Pagination, Navigation, EffectFade]}
                            className="mySwiper w-screen"
                        >
                        <SwiperSlide className="relative">
                            <img src="/assets/slider1-hero.webp" alt="" className="md:absolute inset-0 w-screen h-screen" />
                            <div className="absolute inset-0 bg-black/30"></div>
                        </SwiperSlide>
                        <SwiperSlide className="relative">
                            <img src="/assets/slider2-hero.webp" alt="" className="md:absolute inset-0 w-screen h-screen object-cover" />
                            <div className="absolute inset-0 bg-black/30"></div>
                        </SwiperSlide>
                        <SwiperSlide className="relative">
                            <img src="/assets/slider3-hero.webp" alt="" className="w-screen h-screen object-cover" />
                            <div className="absolute inset-0 bg-black/30"></div>
                        </SwiperSlide>
                    </Swiper>
                    </div>

                    <div className="box-hero-2 md:absolute flex flex-col items-center justify-center z-10 mb-10 w-fit">
                        <img src="/assets/logo-pmbemunsri.webp" alt="" className="w-full md:w-32" />
                        <h1 className="text-center md:text-4xl text-2xl font-extrabold md:text-white text-primary leading-10 tracking-wide">
                            PROGRAM MAHASISWA BERDAMPAK <br />
                        <span className="md:text-3xl text-xl">
                            PEMBERDAYAAN MASYARAKAT OLEH <span className="italic">BADAN EKSEKUTIF MAHASISWA</span> <br />
                        </span>
                        <span className="md:text-3xl text-xl font-light italic">
                            UNIVERSITAS SRIWIJAYA 2025
                        </span>
                        </h1>
                    </div>

                    <div className="box-hero-3 md:absolute flex flex-col mb-5 gap-1 px-9 py-1 z-10 rounded-full items-center justify-center md:mt-96 w-fit bg-white/45 backdrop-blur-[15px] border border-white shadow-[1px_1px_15px_rgba(0,0,0,0.25)] max-w-[90%]">
                        <div className="text-normal italic md:text-white text-primary">
                            <h2>Supported by :</h2>
                        </div>
                        
                        <div className="flex flex-row gap-2">
                            <img src="/assets/logo-kemendikti.webp" alt="" className="w-10" />
                            <img src="/assets/logo-mahasiswa-berdampak-circle.webp" alt="" className="w-10 " />
                            <img src="/assets/logo-mahasiswa-berdampak-box.webp" alt="" className="w-32" />
                        </div>
                    </div>
                </div>

                {/* About Section*/}
                <div id="tentang-kami" className="about-us flex flex-col md:flex-row items-center w-screen h-screen md:pt-28 px-30">
                    <div className="box-about-1 flex flex-col items-center w-full md:w-1/2">
                        <div className="flex flex-col gap-5 pt-15 px-10 w-screen md:w-full text-primary">
                            <div className="flex flex-row gap-1">
                                <div className="h-2 w-3 mb-5 bg-green-500 mt-2 rounded-full"></div> 
                                <div className="h-2 w-12 mb-5 bg-green-500 mt-2 rounded-full"></div>
                            </div>
                            
                            <h2 className="font-semibold text-3xl md:text-4xl italic">About</h2>
                            <h1 className="font-bold text-4xl md:text-5xl"><span className="text-secondary">PM</span> BEM UNSRI?</h1>

                            <p className="text-justify font-medium text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam nobis quam labore eaque quaerat error dicta molestias minima! 
                                Nemo perspiciatis sed, esse tempora quas atque nisi repellendus iure dignissimos tempore nulla ab, modi asperiores iusto officiis, maiores omnis voluptatibus. 
                                Suscipit nesciunt maxime inventore quam d   eserunt atque? Porro perferendis beatae voluptatum?
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row justify-center items-center gap-5 p-10 w-screen md:w-full">
                            <div className="flex flex-row items-center py-2 pl-4 pr-15 gap-3 w-fit text-left border-2 border-secondary rounded-2xl">
                                <FiUsers className='p-2 w-12 h-12 text-white bg-linear-to-r from-[#16A34A] to-[#22C55E] rounded-md' />
                                <h1 className="leading-7 font-bold italic text-2xl text-secondary">20+ <br /><span className="font-normal not-italic text-primary">Members</span></h1>
                            </div>
                            <div className="flex flex-row items-center py-2 pr-4 pl-15 gap-3 w-fit text-right border-2 border-secondary rounded-2xl">
                                <h1 className="leading-7 font-bold italic text-2xl text-secondary">2 <br /><span className="font-normal not-italic text-primary">Programs</span></h1>
                                <PiMedal className='p-2 w-12 h-12 text-white bg-linear-to-r from-[#16A34A] to-[#22C55E] rounded-md'/>
                            </div>
                        </div>  
                    </div>

                    <div className="box-about-2 flex items-center justify-center w-screen md:w-1/2">
                        <img src="/assets/about.webp" alt="" className="w-sm md:w-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;