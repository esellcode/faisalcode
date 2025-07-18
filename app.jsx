import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800 flex flex-col items-center justify-center px-4 font-sans">
      {/* Logo Salam Travel */}
      <div className="relative mb-8">
        <img
          src="https://via.placeholder.com/200x200?text=Salam+Travel"
          alt="Logo Salam Travel"
          className="w-32 h-32 rounded-full shadow-md object-cover mx-auto"
        />
      </div>

      {/* Nama dan Deskripsi */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-900 mb-4 tracking-tight">
        Nur Muhammad Faisal
      </h1>
      <p className="text-lg md:text-xl text-indigo-700 mb-8">
        Agen Terpercaya di <span className="font-semibold">Salam Travel Indonesia</span>
      </p>

      <p className="text-gray-600 mb-10 max-w-md mx-auto leading-relaxed">
        Siap membantu Anda dalam merencanakan perjalanan Umrah dengan penuh keikhlasan dan profesionalisme.
      </p>

      {/* Buttons / CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/087868045701"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-green-500 text-white font-medium rounded-lg shadow-md hover:bg-green-600 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
        >
          Hubungi via WhatsApp
        </a>

        {/* Instagram Button */}
        <a
          href="https://www.instagram.com/umrahbarokah.id"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-pink-500 text-white font-medium rounded-lg shadow-md hover:bg-pink-600 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
        >
          Lihat di Instagram
        </a>

        {/* Salam Travel Website Button */}
        <a
          href="https://salamtravel.id"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
        >
          Kunjungi Salam Travel
        </a>
      </div>
    </div>
  );
}
