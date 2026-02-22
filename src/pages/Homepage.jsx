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

const Homepage = () => {
    return (
        <div className="homepage flex items-center justify-center w-screen bg-black">
            <div className="container flex justify-center bg-red-500">
                <div className="hero md:relative flex flex-col items-center justify-center md:h-screen mx-10 md:mx-0 overflow-hidden">
                    <div className="box-hero-1 md:relative lg:block hidden bg-green-500">
                        <Swiper
                            spaceBetween={0}
                            effect={'fade'}
                            centeredSlides={true}
                            loop={true}
                            autoplay={{
                            delay: 2000,
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
                        <img src="/assets/logo-pmbemunsri.webp" alt="" className="w-20 md:w-32" />
                        <h1 className="text-center text-2xl md:text-4xl font-extrabold text-white leading-[40px] tracking-wide">
                            PROGRAM MAHASISWA BERDAMPAK <br />
                        <span className="md:text-3xl">
                            PEMBERDAYAAN MASYARAKAT OLEH <span>BADAN EKSEKUTIF MAHASISWA</span> <br />
                        </span>
                        <span className="md:text-3xl font-light italic">
                            UNIVERSITAS SRIWIJAYA 2025
                        </span>
                        </h1>
                    </div>

                    <div className="box-hero-3 md:absolute z-10 flex flex-col gap-1 px-9 py-1 rounded-full items-center justify-center md:mt-96 w-fit bg-white/45 backdrop-blur-[15px] border border-white shadow-[1px_1px_15px_rgba(0,0,0,0.25)] max-w-[90%]">
                        <div className="text-normal italic text-white">
                            <h2>Supported by :</h2>
                        </div>
                        
                        <div className="flex flex-row gap-2">
                            <img src="/assets/logo-kemendikti.webp" alt="" className="w-10" />
                            <img src="/assets/logo-mahasiswa-berdampak-circle.webp" alt="" className="w-10 " />
                            <img src="/assets/logo-mahasiswa-berdampak-box.webp" alt="" className="w-32" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;