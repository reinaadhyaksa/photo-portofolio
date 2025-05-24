import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-6 font-playfair">LensCraft</h3>
                        <p className="text-gray-400">Capturing life's precious moments with artistic vision and technical excellence.</p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link to={"/"} className="text-gray-400 hover:text-white transition">Home</Link>
                            </li>
                            <li>
                                <Link to={"/about"} className="text-gray-400 hover:text-white transition">About</Link>
                            </li>
                            <li>
                                <Link to={"/gallery"} className="text-gray-400 hover:text-white transition">Gallery</Link>
                            </li>
                            <li>
                                <Link to={"/contact"} className="text-gray-400 hover:text-white transition">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6">Services</h4>
                        <ul className="space-y-3">
                            <li><a href="/gallery" className="text-gray-400 hover:text-white transition">Wedding Photography</a></li>
                            <li><a href="/gallery" className="text-gray-400 hover:text-white transition">Portrait Sessions</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Commercial Photography</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Event Coverage</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6">Contact</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                +62 812 3456 7890
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                hello@lenscraft.com
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Jakarta, Indonesia
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>© 2023 LensCraft Photography. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}