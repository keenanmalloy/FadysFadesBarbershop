import Link from "next/link";
import React from "react";

export const Modal = ({setShowModal}) => {
  return (
    <div className="bg-[#15182B] fixed inset-0 z-50 overflow-hidden text-white font-Dela text-lg h-[100vh] w-[100vw] flex justify-center">
      <ul className="flex flex-col items-center justify-center space-y-20">
        <button onClick={() => setShowModal(false)}>
        <Link href="#home" className="hover:text-[#f2ae1b]">
          <li>Home</li>
        </Link>
        </button>
        <button onClick={() => setShowModal(false)}>
        <Link href="#about" className="hover:text-[#f2ae1b]">
          <li>About</li>
        </Link>
        </button>
        <button onClick={() => setShowModal(false)}>
        <Link href="#services" className="hover:text-[#f2ae1b]">
          <li>Services</li>
        </Link>
        </button>
        <button onClick={() => setShowModal(false)}>
        <Link href="#barbers" className="hover:text-[#f2ae1b]">
          <li>Barbers</li>
        </Link>
        </button>
        <button onClick={() => setShowModal(false)}>
        <Link href="#reviews" className="hover:text-[#f2ae1b]">
          <li>Reviews</li>
        </Link>
        </button>
        <button onClick={() => setShowModal(false)}>
                  <Link href="#contact" className="hover:text-[#f2ae1b]">
                    <li>Contact</li>
                  </Link>
                </button>
        <li className="border-[#f2ae1b] border-solid border-2 text-[#f2ae1b] px-5 py-3 hover:bg-[#f2ae1b] hover:text-black font-Dela text-xs">
          <button onClick={() => setShowModal(false)}>
            <Link href="#book">Book Now</Link>
          </button>
        </li>
      </ul>
    </div>
  );
};
