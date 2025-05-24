import { dataService } from "../data/data";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';

export const SectionHeader = ({ title, subtitle, text }) => {
    return (
        <section className="relative h-screen overflow-hidden">
            <div className="absolute inset-0 bg-black/30 z-10"></div>
            <img
                className="absolute w-full h-full object-cover"
                src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="background"
            />
            <div className="relative z-20 h-full flex items-center">
                <div className="container mx-auto px-6 text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair" data-aos="fade-up">{title} <span
                        className="text-amber-400">{subtitle}</span></h1>
                    <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                       {text}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
                        <Link
                            to={"/gallery"}
                            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-medium transition duration-300">
                            Explore Portfolio
                        </Link>
                        <Link
                            to={"/contact"}
                            className="border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-medium transition duration-300">
                            Get a Quote
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const StatsCard = ({ delay, title, text }) => {
    return (
        <div className="p-6" data-aos="fade-up" data-aos-delay={delay}>
            <p className="text-4xl font-bold text-amber-600 mb-2 font-playfair">{title}</p>
            <p className="text-gray-600 uppercase text-sm tracking-wider">{text}</p>
        </div>
    );
};

export const ServiceCard = ({ rule, title, text, num }) => {
    return (
        <div className="bg-white p-8 rounded-xl shadow-md service-card transition-all duration-300" data-aos="flip-left">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d={rule} />
                </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 font-playfair">{title}</h3>
            <p className="text-gray-600 mb-6">{text}</p>
            <ul className="space-y-2 mb-6">
                {
                    dataService[num].text.map((item, index) => {
                        return (
                            <li className="flex items-center" key={index}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 mr-2" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd" />
                                </svg>
                                {item}
                            </li>
                        )
                    })
                }
            </ul>
            <Link className="text-amber-600 hover:text-amber-700 font-medium flex items-center">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd" />
                </svg>
            </Link>
        </div>
    )
};

export const TestimonialsCard = ({ source, name, pos, text, ls }) => {
    return (
        <div className="bg-white p-8 rounded-xl shadow-md" data-aos="fade-up">
            <div className="flex items-center mb-6">
                <div className="flex-shrink-0">
                    <img 
                        className="h-12 w-12 rounded-full" 
                        src={source}
                        alt={name} 
                    />
                </div>
                <div className="ml-4">
                    <h4 className="text-lg font-bold">{name}</h4>
                    <p className="text-gray-600">{pos}</p>
                </div>
            </div>
            <p className="text-gray-600 italic mb-6">
               "{text}"
            </p>
            <div className="flex">
                {ls()}
            </div>
        </div>
    )
}

export const BelieveCard = ({ logo, title, desc, num }) => {
    return (
        <div className="bg-white p-8 rounded-xl shadow-md text-center" data-aos="fade-up" data-aos-delay={num}>
            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={logo} />
                </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 font-playfair">{title}</h3>
            <p className="text-gray-600">
               {desc}
            </p>
        </div>
    );
};

export const ProfileCard = ({ img, name, pos, desc, num }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md text-center team-card transition-all duration-300" data-aos="fade-up" data-aos-delay={num}>
            <img 
                src={img}
                alt={name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" 
            />
            <h3 className="text-xl font-bold mb-2 font-playfair">{name}</h3>
            <p className="text-amber-600 mb-4">{pos}</p>
            <p className="text-gray-600 text-sm mb-4">
                {desc}
            </p>
            <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-amber-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                    </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                </a>
            </div>
        </div>
    )
};

export const TimelineCard = ({ num, title, year, desc }) => {
    return (
        <div className="relative pl-8 pb-12 timeline-item" data-aos="fade-up" data-aos-delay={num}>
            <div className="absolute left-0 top-0 w-4 h-4 bg-amber-500 rounded-full z-10"></div>
            <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold font-playfair">{title}</h3>
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">{year}</span>
                </div>
                <p className="text-gray-600">
                    {desc}
                </p>
            </div>
        </div>
    )
};

export const InputContact = ({ title, text, type, name }) => {
    return (
        <div className="mb-6">
            <label htmlFor={name} className="block text-gray-700 font-medium mb-2">{title}</label>
            <input type={type} id={name} name={name}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg form-input focus:outline-none focus:ring-1 focus:ring-amber-500 transition"
                placeholder={text} required />
        </div>
    )
};

export const QuestionsCard = ({ title, text, num }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleFAQ = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="mb-6 bg-white p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay={num} >
            <button
                className="flex justify-between items-center w-full focus:outline-none"
                onClick={toggleFAQ}
            >
                <h3 className="text-lg font-bold text-left">
                    {title}
                </h3>
                <svg
                    className={`w-5 h-5 text-amber-600 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                        }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="mt-4">
                    <p className="text-gray-600">
                        {text}
                    </p>
                </div>
            )}
        </div>
    );
};

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [pathname]);

    return null;
};