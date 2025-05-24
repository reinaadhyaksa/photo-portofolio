import { databelieve, dataProfile, dataTimeline } from "../../data/data";
import { BelieveCard, ProfileCard, SectionHeader, TimelineCard } from "../CreateUi"
import { CTASection } from "../ui";

export default function AboutPages() {
    return (
        <>
            <SectionHeader title={"Our"} subtitle={"Story"} text={"Capturing life's precious moments with passion and creativity since 2016"} />

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2" data-aos="fade-right">
                            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Our Team"
                                className="rounded-xl shadow-xl w-full" />
                        </div>
                        <div className="lg:w-1/2" data-aos="fade-left" data-aos-delay="200">
                            <span className="text-amber-600 font-medium uppercase tracking-wider">About Us</span>
                            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 font-playfair">Who We Are</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                LensCraft is a team of passionate photographers dedicated to capturing your most precious moments with artistic vision and technical excellence. Founded in 2016, we've grown from a small studio to one of the most trusted names in professional photography.
                            </p>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Our approach combines traditional photography techniques with modern creativity to deliver images that tell your unique story. We believe every moment is worth preserving, and we're honored to be part of your journey.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    <div>
                                        <h4 className="font-bold">Quality Guarantee</h4>
                                        <p className="text-gray-600 text-sm">Premium results</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div>
                                        <h4 className="font-bold">Fast Delivery</h4>
                                        <p className="text-gray-600 text-sm">Within 7 days</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <span className="text-amber-600 font-medium uppercase tracking-wider">Our Values</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-4 font-playfair">What We Believe In</h2>
                        <div className="w-20 h-1 bg-amber-500 mx-auto mt-6"></div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-10">
                       {
                            databelieve.map((item, index) => {
                                return (
                                    <BelieveCard 
                                        num={item.num}
                                        logo={item.logo}
                                        title={item.title}
                                        desc={item.desc}
                                        key={index}
                                    />
                                )
                            })
                       }
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <span className="text-amber-600 font-medium uppercase tracking-wider">Our Team</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-4 font-playfair">Meet The Photographers</h2>
                        <div className="w-20 h-1 bg-amber-500 mx-auto mt-6"></div>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                       {
                            dataProfile.map((item, index) => {
                                return (
                                    <ProfileCard 
                                        img={item.img}
                                        name={item.name}
                                        num={item.num}
                                        pos={item.pos}
                                        desc={item.desc}
                                        key={index}
                                    />
                                )
                            })
                       }
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <span className="text-amber-600 font-medium uppercase tracking-wider">Our Journey</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-4 font-playfair">Milestones & Achievements</h2>
                        <div className="w-20 h-1 bg-amber-500 mx-auto mt-6"></div>
                    </div>
                    <div className="max-w-3xl mx-auto">
                       {
                            dataTimeline.map((item, index) => {
                                return (
                                    <TimelineCard 
                                        num={item.num}
                                        title={item.title}
                                        year={item.year}
                                        desc={item.desc}
                                        key={index}
                                    />
                                )
                            })
                       }
                    </div>
                </div>
            </section>

            <CTASection title={"Ready to Work With Us?"} text={"Let's create beautiful memories together. Book your session today!"} />
        </>
    );
};