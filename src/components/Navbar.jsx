import { Link } from "react-router-dom";
import { NavbarMobile } from "./ui";
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
      <>
            <nav className="w-full bg-white bg-opacity-90 shadow-sm z-50" data-aos="fade-down">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <Link
                            to={"/"}
                            className="text-2xl font-bold text-gray-800 font-playfair flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            LensCraft
                        </Link>
                        <div className="hidden md:flex space-x-8 items-center">
                            <Link to={"/"} className="hover:text-amber-600 font-medium">Home</Link>
                            <Link to={"/about"} className="hover:text-amber-600 transition">About</Link>
                            <Link to={"gallery"} className="hover:text-amber-600 transition">Gallery</Link>
                            <Link to={"/contact"} className="hover:text-amber-600 transition">Contact</Link>
                            <Link
                                to={"/contact"}
                                className="ml-4 bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full font-medium transition">
                                Book Session
                            </Link>
                        </div>
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden focus:outline-none"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {
                menuOpen && (
                    <NavbarMobile />
                )
            }
      </>
    )
}