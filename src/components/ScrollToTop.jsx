import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // useLocation mendeteksi setiap kali URL berubah
  const { pathname } = useLocation();

  useEffect(() => {
    // Menjalankan scroll ke atas dengan efek halus (smooth)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", 
    });
  }, [pathname]); // Kode ini berjalan ulang setiap pathname berubah

  return null;
};

export default ScrollToTop;