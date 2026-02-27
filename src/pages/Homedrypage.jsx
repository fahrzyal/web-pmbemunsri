import React, { useEffect } from 'react';

const Homedry = () => {
useEffect(() => {
    window.scrollTo(0, 0);
}, []);

const data = {
    title: "Inovasi Home Dry Coffee: Solusi Strategis Petani Kopi Lahat Hadapi Cuaca Buruk",
    category: "Berita Utama",
    date: "18 Februari 2026",
    author: "PM BEM UNSRI",
    mainImage: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=2070",
    content: [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070",
        text: "Home Dry Coffee muncul sebagai jawaban atas keresahan menahun para petani kopi di Kabupaten Lahat. Sistem pengeringan mandiri ini dirancang menggunakan teknologi sirkulasi udara panas yang efisien, memungkinkan biji kopi mencapai kadar air standar (12%) dalam waktu yang jauh lebih singkat dibandingkan metode jemur konvensional. Terutama saat musim penghujan tiba, alat ini menjadi penyelamat kualitas pasca-panen."
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1501747315-124a0eaca060?q=80&w=1974",
        text: "Pendekatan yang dilakukan BEM UNSRI tidak hanya sebatas pemberian alat, tetapi juga pemberdayaan berkelanjutan. Melalui workshop intensif, para petani diajarkan cara melakukan perawatan berkala pada unit pengering. Inovasi ini diprediksi mampu menekan angka kerugian petani hingga 40% akibat jamur dan pembusukan biji kopi yang sering terjadi karena proses pengeringan yang tidak sempurna."
    }
    ]
};

return (
    <article className="w-full min-h-screen dark:bg-primary-dark transition-colors duration-500 pb-20 px-10 md:px-35">

        {/* Header Artikel (Center) */}
        <header className="relative w-full mx-auto px-4 pt-32 md:pt-40 text-center">
            <span className="px-4 py-1.5 bg-[#D4E94E] text-primary-text text-[10px] font-black uppercase tracking-[0.2em] rounded-md mb-6 inline-block">
            {data.category}
            </span>
            <h1 className="text-3xl md:text-6xl font-black text-primary-text dark:text-white leading-[1.1] uppercase mb-8">
            {data.title}
            </h1>

            <div className="absolute bottom-70 left-0 md:left-20 md:bottom-0 w-fit">
                <img src="/assets/element-blurr.webp" alt="" loading="lazy" className="w-10 md:w-30 animate-spin [animation-duration:110s] [animation-direction:reverse] origin-center" />
            </div>
            <div className="absolute bottom-10 left-60 md:left-285 md:top-30 w-fit">
                <img src="/assets/element-blurr.webp" alt="" loading="lazy" className="w-20 animate-spin [animation-duration:110s] [animation-direction] origin-center" />
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 py-6 border-y border-gray-100 dark:border-slate-800 text-xs font-bold uppercase tracking-widest text-gray-500">
                <p>By <span className="text-primary-text dark:text-white">{data.author}</span></p>
                <p className="hidden md:block">•</p>
                <p>{data.date}</p>
            </div>
        </header>

        {/* Main Feature Image */}
        <div className="w-full mx-auto px-4 md:mt-12 mb-10 md:mb-20 transition-all duration-500 hover:scale-103">
            <div className="w-full aspect-video md:aspect-21/9 rounded-2xl overflow-hidden shadow-2xl border border-white dark:border-slate-800">
                <img src={data.mainImage} alt="Main" className="w-full h-full object-cover" />
            </div>
        </div>

        {/* Konten Berita (Grid 60/40) */}
        <main className="w-full mx-auto px-4 space-y-10 md:space-y-24">
            {data.content.map((item, index) => (
            <div 
                key={item.id} 
                className={`flex flex-col gap-10 md:items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
            >
                {/* Bagian Penjelasan (60%) */}
                <div className="w-full md:w-[60%]">
                    <p className="text-lg md:text-xl text-justify leading-relaxed text-slate-700 dark:text-slate-300 first-letter:text-5xl first-letter:font-black first-letter:text-[#D4E94E] first-letter:mr-3 first-letter:float-left">
                        {item.text}
                    </p>
                </div>

                {/* Bagian Gambar (40%) */}
                <div className="w-full md:w-[40%] transition-all duration-500 hover:scale-103">
                    <div className="relative group">
                        <div className="absolute -inset-2 bg-white/45 backdrop-blur-[15px] border border-white shadow-[1px_1px_15px_rgba(0,0,0,0.25)] dark:shadow-[1px_1px_15px_rgba(255,255,255,0.5)] rounded-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
                        <div className="relative overflow-hidden rounded-xl border border-white dark:border-slate-800 shadow-xl bg-slate-100 dark:bg-slate-900 aspect-square md:aspect-auto">
                        <img 
                            src={item.image} 
                            alt={`Update ${index + 1}`} 
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        </div>
                    </div>
                </div>
            </div>
            ))}

            {/* Closing Paragraph (Opsional) */}
            <div className="md:p-12 text-center bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-white dark:border-slate-800 ">
                <h4 className="text-xl font-black text-slate-900 dark:text-white mb-4 uppercase italic">OUR WISH</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic max-w-2xl mx-auto">
                    "Kami berharap teknologi tepat guna seperti Home Dry Coffee ini dapat direplikasi di desa-desa lain di seluruh Sumatera Selatan sebagai wujud nyata pengabdian mahasiswa kepada masyarakat."
                </p>
            </div>

            {/* Footer Navigation */}
            <div className="flex justify-center ">
                <button 
                    onClick={() => window.history.back()}
                    className="group flex items-center gap-3 p-5 font-medium text-sm rounded-full bg-linear-to-r from-[#22C55E] to-[#4ADE80] hover:from-[#16A34A] hover:to-[#22C55E] text-white transition-all duration-500 hover:scale-105 uppercase"
                >
                    <span className="group-hover:-translate-x-2 transition-transform duration-300">←</span> 
                    Back to Home
                </button>
            </div>
        </main>
    </article>
);
};

export default Homedry;