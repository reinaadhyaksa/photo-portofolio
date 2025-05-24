import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader, ServiceCard, StatsCard, TestimonialsCard } from './CreateUi';
import { dataService, dataTestimonials } from '../data/data';

function animation() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out'
        });
    }, []);
}

export const HeroSection = () => {
    animation();

    return (
        <SectionHeader title={"Capture Your "} subtitle={"Perfect Moments"} text={"Professional photography services for weddings, portraits, and commercial projects with artistic touch"} />
    );
};

export const StatsSection = () => {
    animation();

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <StatsCard delay={"0"} title={"850+"} text={"Projects Completed"} />
                    <StatsCard delay={"100"} title={"120+"} text={"Happy Clients"} />
                    <StatsCard delay={"200"} title={"15+"} text={"Awards Won"} />
                    <StatsCard delay={"300"} title={"7+"} text={"Years Experience"} />
                </div>
            </div>
        </section>
    );
};

export const ServiceSection = () => {
    animation();

    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <span className="text-amber-600 font-medium uppercase tracking-wider">Our Services</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-4 font-playfair">What We Offer</h2>
                    <div className="w-20 h-1 bg-amber-500 mx-auto mt-6"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                   {
                        dataService.map((item, index) => {
                            return (
                                <ServiceCard 
                                    rule={item.rule}
                                    title={item.title}
                                    text={item.descriptions}
                                    num={item.id}
                                    key={index}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export const TestimonialsSection = () => {
    const StarList = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <svg 
                    key={i}
                    className="h-5 w-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            );
        };
        return stars;
    };
    animation();

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <span className="text-amber-600 font-medium uppercase tracking-wider">Testimonials</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-4 font-playfair">What Clients Say</h2>
                    <div className="w-20 h-1 bg-amber-500 mx-auto mt-6"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        dataTestimonials.map((item, index) => {
                            return (
                                <TestimonialsCard 
                                    source={item.source}
                                    name={item.name}
                                    pos={item.pos}
                                    text={item.text}
                                    key={index}
                                    ls={StarList}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export const CTASection = ({ title, text }) => {
    animation();

    return (
        <section className="py-20 bg-amber-600 text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair" data-aos="fade-up">{title}</h2>
                <p className="text-xl mb-10 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                    {text}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
                    <Link
                        to={"/contact"}
                        className="w-full sm:w-auto bg-white hover:bg-gray-100 text-amber-600 px-4 sm:px-8 py-4 rounded-full font-medium transition duration-300 text-sm sm-text-base">
                        Get in Touch
                    </Link>
                    <Link
                        to={"/contact"}
                        className="w-full sm:w-auto border-2 border-white hover:bg-white hover:text-amber-600 px-4 sm:px-8 py-3 rounded-full font-medium transition duration-300 text-sm sm:text:base">
                        Call Now
                    </Link>
                </div>
            </div>
        </section>
    );
};

export const NavbarMobile = () => {
    return (
        <div className="flex flex-col md:hidden absolute top-[50px] left-0 w-full bg-white px-6 py-4 space-y-4 shadow-md z-40">            
            <Link to={"/"} className="hover:text-amber-600 font-medium">Home</Link>
            <Link to={"/about"} className="hover:text-amber-600 transition">About</Link>
            <Link to={"gallery"} className="hover:text-amber-600 transition">Gallery</Link>
            <Link to={"/contact"} className="hover:text-amber-600 transition">Contact</Link>
            <Link
                to={"/contact"}
                className="text-center ml-4 bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full font-medium transition">
                Book Session
            </Link>
        </div>
    )
};