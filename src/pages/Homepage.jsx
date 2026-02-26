import React from 'react';
import OutputSection from '../components/OutputSection';

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
        <div className="homepage flex items-center justify-center w-full dark:bg-primary-dark transition-colors duration-300">
            <div className="container flex flex-col items-center w-full pt-32 md:pt-0 overflow-hidden">
                {/* Hero Section */}
                <div id='beranda' className="hero md:relative flex flex-col items-center justify-center md:h-screen mx-5 md:mx-0 overflow-hidden">
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
                            className="mySwiper w-screen h-screen"
                        >
                        <SwiperSlide className="relative">
                            <img src="/assets/slider1-hero.webp" alt="" loading="lazy" className="md:absolute inset-0 w-screen h-screen" />
                            <div className="absolute inset-0"></div>
                        </SwiperSlide>
                        <SwiperSlide className="relative">
                            <img src="/assets/slider2-hero.webp" alt="" loading="lazy" className="md:absolute inset-0 w-screen h-screen object-cover" />
                            <div className="absolute inset-0"></div>
                        </SwiperSlide>
                        <SwiperSlide className="relative">
                            <img src="/assets/slider3-hero.webp" alt="" loading="lazy" className="w-screen h-screen object-cover" />
                            <div className="absolute inset-0"></div>
                        </SwiperSlide>
                    </Swiper>
                    </div>

                    <div className="box-hero-2 md:absolute flex flex-col items-center justify-center z-10 mb-10 w-fit">
                        <img src="/assets/logo-pmbemunsri.webp" alt="" loading="lazy" className="w-full md:w-32 transition-transform duration-500 hover:scale-105" />
                        <h1 className="text-center md:text-4xl text-2xl font-extrabold text-primary-text dark:text-white md:text-white leading-10 tracking-wide">
                            PROGRAM MAHASISWA BERDAMPAK <br />
                        <span className="md:text-3xl text-xl">
                            PEMBERDAYAAN MASYARAKAT OLEH <span className="italic">BADAN EKSEKUTIF MAHASISWA</span> <br />
                        </span>
                        <span className="md:text-3xl text-xl font-light italic">
                            UNIVERSITAS SRIWIJAYA 2025
                        </span>
                        </h1>
                    </div>

                    <div className="box-hero-3 md:absolute flex flex-col mb-5 gap-1 px-9 py-1 z-10 rounded-full items-center justify-center md:mt-96 w-fit bg-white/45 backdrop-blur-[15px] border border-white shadow-[1px_1px_15px_rgba(0,0,0,0.25)] transition-transform duration-500 hover:scale-105">
                        <div className="text-normal italic md:text-white text-primary-text">
                            <h2>Supported by :</h2>
                        </div>
                        
                        <div className="flex flex-row gap-2">
                            <img src="/assets/logo-kemendikti.webp" alt="" loading="lazy" className="w-10" />
                            <img src="/assets/logo-mahasiswa-berdampak-circle.webp" alt="" loading="lazy" className="w-10 " />
                            <img src="/assets/logo-mahasiswa-berdampak-box.webp" alt="" loading="lazy" className="w-32" />
                        </div>
                    </div>
                </div>

                {/* About Section*/}
                <div id='tentang-kami' className="about-us flex flex-col md:flex-row items-center w-screen h-fit md:h-screen md:pt-28 px-30">
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

                {/* Fokus Tujuan Section */}
                <div id='tentang-kami' className="fokus-tujuan flex justify-center md:px-30 md:pt-28 w-screen h-screen">
                    <div className="box-fokus-tujuan-1 relative flex flex-col items-center w-screen h-screen">
                            <div className="hidden md:block absolute -right-7 -top-7 w-fit">
                            <img src="/assets/element-blurr.webp" alt="" loading="lazy" className="w-sm animate-spin [animation-duration:90s] origin-center" />
                        </div>
                        <div className="absolute bottom-60 left-0 md:-left-20 md:bottom-5 w-fit">
                            <img src="/assets/element-blurr.webp" alt="" loading="lazy" className="w-lg animate-spin [animation-duration:110s] [animation-direction:reverse] origin-center" />
                        </div>
                    </div>
                    <div className="box-fokus-tujuan-2 absolute flex flex-col items-center pt-10 md:pt-0 px-10 gap-7 md:w-7xl">
                        <div className="transition-transform duration-500 hover:scale-103">
                            <div className="flex justify-center gap-1">
                                <div className="h-1.5 w-7 mb-3 bg-green-500 mt-2 rounded-full"></div>
                                <div className="h-1.5 w-2 mb-3 bg-green-500 mt-2 rounded-full"></div> 
                            </div>
                            <h1 className="font-black text-secondary-text text-4xl md:text-5xl">FOCUS <span className="text-primary-text dark:text-white">& GOALS</span></h1>
                        </div>
                        <div className="w-full p-7 bg-white/45 backdrop-blur-[15px] border border-white shadow-[1px_1px_15px_rgba(0,0,0,0.25)] dark:shadow-[1px_1px_15px_rgba(255,255,255,0.5)] rounded-2xl text-primary-text dark:text-white transition-transform duration-500 hover:scale-105">
                            <h1 className="mb-3 text-3xl font-extrabold text-center">FOCUS</h1>
                            <p className="text-center">
                            PM-BEM 2025 memprioritaskan pilihan permasalahan yang diangkat pada pangan, energi, dan kesehatan (didasarkan pada 8 bidang fokus Rencana Induk Riset Nasional tahun 2017-2045) atau swasembada pangan,
                            ekonomi kreatif, ekonomi hijau, ekonomi biru, dan kesehatan</p>
                        </div>
                        <div className="w-full p-7 bg-white/45 backdrop-blur-[15px] border border-white shadow-[1px_1px_15px_rgba(0,0,0,0.25)] dark:shadow-[1px_1px_15px_rgba(255,255,255,0.5)] rounded-2xl text-primary-text dark:text-white transition-transform duration-500 hover:scale-105">
                            <h1 className="mb-3 text-3xl font-extrabold text-center">GOALS  </h1>
                            <p className="text-center">
                                1. Bentuk nyata tanggung jawab sosial insan perguruan tinggi <br />
                                2. Mendorong dosen dan mahasiswa untuk menerapkan ilmu dan keahlian secara langsung <br />
                                3. Menumbuhkan jiwa kepemimpinan transformatif dan kepekaan sosial dalam diri mahasiswa <br />
                                4. Memfasilitasi organisasi mahasiswa dalam merancang dan melaksanakan inisiatif sosial <br />
                                5. Membangun kolaborasi strategis antara dosen, organisasi mahasiswa dengan masyarakat, dan institusi pendidikan <br />
                                6. Meningkatkan kepedulian mahasiswa terhadap masyarakat. <br />
                                7. Wahana pembelajaran lintas disiplin dan lintas budaya 
                            </p>
                        </div>
                    </div>
                </div>

                {/* Lokasi Pengabdian */}
                <div className="lokasi-pengabdian w-screen h-fit md:h-screen pt-36 md:pt-28 px-10 md:px-30">
                    <div className="box-1-lokasi flex flex-col justify-center items-center w-full h-fit">
                        <div className="flex justify-center gap-1 transition-transform duration-500 hover:scale-103">
                            <div className="h-1.5 w-2 mb-3 bg-green-500 mt-2 rounded-full"></div>
                            <div className="h-1.5 w-7 mb-3 bg-green-500 mt-2 rounded-full"></div> 
                        </div>
                        <h1 className="mb-5 text-center font-black text-primary-text dark:text-white text-4xl md:text-5xl transition-transform duration-500 hover:scale-103">LOCATION <span className="text-secondary-text">SERVICE</span></h1>
                        <p className="mb-3 text-center text-sm md:text-xl text-primary-text dark:text-white transition-transform duration-500 hover:scale-103">Informasi mengenai lokasi pelaksanaan kegiatan pengabdian masyarakat sebagai <br /> bentuk kontribusi nyata kami di wilayah sasaran.</p>
                        <div className="h-1.5 w-3 mb-3 bg-[#D4E94E] mt-2 rounded-full"></div>
                    </div>
                    <div className="box-2-lokasi flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 md:px-10 w-full h-fit">
                        <div className="md:w-1/2 w-full h-full transition-transform duration-500 hover:scale-105">
                            <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31841.324681628743!2d103.29399835076613!3d-3.9863356431876764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e37684c922195c3%3A0x4304aef944373e32!2sPadjarbulan%2C%20Talang%20Padang%20Tinggi%2C%20Kec.%20Pajar%20Bulan%2C%20Kabupaten%20Lahat%2C%20Sumatera%20Selatan!5e0!3m2!1sid!2sid!4v1772085649173!5m2!1sid!2sid" 
                        
                            style={{ border: 0 }} 
                            allowFullScreen={true}
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-50 md:h-90 rounded-2xl dark:invert-[0.9] shadow-[1px_1px_15px_rgba(0,0,0,0.25)] transition-all duration-300">
                            </iframe>
                        </div>
                        <div className="md:p-4 md:w-1/2 h-full bg-white/45 backdrop-blur-[15px] border border-white shadow-[1px_1px_15px_rgba(0,0,0,0.25)] dark:shadow-[1px_1px_15px_rgba(255,255,255,0.5)] rounded-2xl text-primary-text dark:text-white transition-transform duration-500 hover:scale-105">
                                <table className="w-full border border-gray-200 dark:border-gray-700">
                                    <tbody>
                                    <tr>
                                        <td className="p-4 font-extrabold text-md md:text-lg border-hidden dark:text-white">
                                            Batas Wilayah :
                                        </td>
                                        <td className="px-4 py-2 border-hidden dark:text-white">

                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-8 py-2 text-sm md:text-lg border-hidden dark:text-white">
                                            UTARA <br />
                                            Kecamatan Jarai
                                            </td>
                                        <td className="px-4 py-2 text-sm md:text-lg border-hidden dark:text-white">
                                            SELATAN <br />
                                            Kota Pagaralam
                                            </td>
                                    </tr>

                                    <tr>
                                        <td className="px-8 py-2 text-sm md:text-lg border-hidden dark:text-white">
                                            TIMUR <br />
                                            Kecamatan Sukamerindu
                                        </td>
                                        <td className="px-4 py-2 text-sm md:text-lg border-hidden dark:text-white">
                                            BARAT <br />
                                            Kecamatan Jarai
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-extrabold text-md md:text-lg border-hidden dark:text-white">
                                            Luas Desa :
                                        </td>
                                        <td className="px-4 py-2 text-sm md:text-lg border-hidden dark:text-white">
                                            3,37 km²
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-extrabold text-md md:text-lg border-hidden dark:text-white">
                                            Jumlah Penduduk :
                                        </td>
                                        <td className="px-4 py-2 text-sm md:text-lg border-hidden dark:text-white">
                                            816 Jiwa(Th. 2023)
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <img src="/assets/element-blurr.webp" alt="" loading="lazy" className="absolute left-15 mt-100 w-20 animate-spin [animation-duration:30s] origin-center" />
                    </div>
                </div>
                        
                {/* Luaran */}
                <div className="luaran w-screen h-fit md:h-fit pt-10 px-10 md:px-30">
                    <OutputSection />
                </div>
            </div>
        </div>
    );
};

export default Homepage;