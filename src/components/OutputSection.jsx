import React, { useState } from 'react';
import { outputData } from './OutputData';

const OutputSection = () => {
const [activeTab, setActiveTab] = useState('artikel');

return (
    <div className="max-full mx-auto p-10">
        {/* Header Output */}
        <div className="flex flex-col justify-start">
            <div className="flex justify-left gap-1 w-fit transition-transform duration-500 hover:scale-103">
                <div className="h-1.5 w-2 mb-3 bg-green-500 mt-2 rounded-full"></div>
                <div className="h-1.5 w-7 mb-3 bg-green-500 mt-2 rounded-full"></div> 
            </div>
            <h1 className="mb-3 w-fit font-black text-primary-text dark:text-white text-4xl md:text-5xl transition-transform duration-500 hover:scale-103">OUTPUTS</h1>
            <p className="mb-5 w-fit text-sm md:text-xl text-primary-text dark:text-white transition-transform duration-500 hover:scale-103">Capaian dan hasil nyata dari rangkaian kegiatan pengabdian masyarakat berupa Program, Artikel, dan Poster <br />
             yang memberikan manfaat langsung serta perubahan positif bagi masyarakat.</p>
        </div>
        {/* Navigasi Kategori */}
        <div className="flex justify-center mb-5 md:mb-12 ">
            <div className="flex p-1.5 bg-white/45 backdrop-blur-[15px] border border-white shadow-[1px_1px_15px_rgba(0,0,0,0.25)] dark:shadow-[1px_1px_15px_rgba(255,255,255,0.5)] rounded-2xl">
                {['artikel', 'program', 'poster'].map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 md:px-8 py-2 rounded-lg text-xs md:text-sm font-black uppercase transition-all duration-200 ${
                    activeTab === tab 
                        ? "bg-[#D4E94E] text-primary-text shadow-md" 
                        : "text-gray-400 hover:text-primary-text dark:hover:text-gray-300"
                    }`}
                >
                    {tab}
                </button>
                ))}
            </div>
        </div>

        {/* Grid 5 Kolom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          
          {(activeTab === 'artikel' || activeTab === 'program') && outputData[activeTab].map((item) => (
            <div 
                key={item.id} 
                className="flex flex-col bg-white/45 backdrop-blur-[15px] border border-white shadow-[1px_1px_15px_rgba(0,0,0,0.25)] dark:shadow-[1px_1px_15px_rgba(255,255,255,0.4)] rounded-2xl transition-all duration-300 overflow-hidden hover:scale-103"
            >
                {/* Card Header */}
                <div className="px-4 py-2 border-b border-gray-300 dark:border-white/30">
                    <span className="text-[10px] font-bold text-secondary-text dark:text-[#D4E94E] uppercase tracking-wider">
                        {item.category || item.status || "Info"}
                    </span>
                </div>

                {/* Card Body */}
                <div className="p-4 grow">
                    <h5 className="text-sm font-bold text-primary-text dark:text-white mb-2 line-clamp-2">
                    {item.title}
                    </h5>
                    <p className="text-xs text-gray-500 dark:text-gray-300 line-clamp-3 leading-relaxed">
                    {item.desc}
                    </p>
                </div>

              {/* Card Footer */}
              <div className="px-4 py-3">
                <a href={item.url}
                target="_blank"      
                rel="noreferrer"     
                className="text-[11px] font-black text-slate-900 dark:text-[#D4E94E] hover:underline flex items-center gap-1">
                  VIEW DETAILS ↗
                </a>
              </div>
            </div>
          ))}

          {/* Style Card Poster */}
          {activeTab === 'poster' && outputData.poster.map((item) => (
            <div key={item.id} className="group relative aspect-3/4 rounded-lg overflow-hidden border border-gray-100 dark:border-white/5 shadow-sm dark:shadow-none">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-[#D4E94E] text-[10px] font-bold uppercase tracking-widest">{item.title}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    
  );
};

export default OutputSection;