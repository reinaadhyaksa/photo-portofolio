import { dataQuestions } from "../../data/data";
import { InputContact, QuestionsCard, SectionHeader } from "../CreateUi";
import { CTASection } from "../ui";

export default function ContactPage() {
    return (
        <>
            <SectionHeader title={"Get In"} subtitle={"Touch"} text={"We'd love to hear from you! Reach out to discuss your photography needs."} />

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/2" data-aos="fade-right">
                            <div className="bg-white p-8 rounded-xl shadow-xl">
                                <h2 className="text-2xl font-bold mb-6 font-playfair">Send Us a Message</h2>
                                <form id="contactForm">
                                    <InputContact 
                                        title={"Your Name"}
                                        text={"John doe"}
                                        type={"text"}
                                        name={"name"}
                                    />
                                    <InputContact 
                                        title={"Email Address"}
                                        text={"your@emai.com"}
                                        type={"email"}
                                        name={"email"}
                                    />
                                    <InputContact 
                                        title={"Phone Number"}
                                        text={"+62 812 3456 7890"}
                                        type={"tel"}
                                        name={"phone"}
                                    />
                                    <div className="mb-6">
                                        <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Interested In</label>
                                        <select id="service" name="service"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg form-input focus:outline-none focus:ring-1 focus:ring-amber-500 transition">
                                            <option value="">Select a service</option>
                                            <option value="wedding">Wedding Photography</option>
                                            <option value="portrait">Portrait Session</option>
                                            <option value="commercial">Commercial Photography</option>
                                            <option value="event">Event Coverage</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                                        <textarea id="message" name="message" rows="5"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg form-input focus:outline-none focus:ring-1 focus:ring-amber-500 transition"
                                            placeholder="Tell us about your project..." required></textarea>
                                    </div>
                                    <button type="submit"
                                        className="w-full bg-amber-600 hover:bg-amber-700 text-white px-6 py-4 rounded-lg font-medium transition duration-300">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="lg:w-1/2" data-aos="fade-left" data-aos-delay="200">
                            <div className="mb-12">
                                <span className="text-amber-600 font-medium uppercase tracking-wider">Contact Us</span>
                                <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 font-playfair">How to Reach Us</h2>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    Have questions about our services or want to book a session? We're here to help! Fill out the form or use the contact details below to get in touch with our team.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-xl shadow-md contact-card transition-all duration-300">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-bold mb-2">Call Us</h3>
                                            <p className="text-gray-600 mb-2">Available Monday to Friday, 9am to 6pm</p>
                                            <a href="tel:+6281234567890" className="text-amber-600 hover:text-amber-700 font-medium">+62 812 3456 7890</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-md contact-card transition-all duration-300">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-bold mb-2">Email Us</h3>
                                            <p className="text-gray-600 mb-2">We typically respond within 24 hours</p>
                                            <a href="mailto:hello@lenscraft.com" className="text-amber-600 hover:text-amber-700 font-medium">hello@lenscraft.com</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-md contact-card transition-all duration-300">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-bold mb-2">Visit Us</h3>
                                            <p className="text-gray-600 mb-2">By appointment only</p>
                                            <p className="text-gray-600">Jl. Photography No. 123<br />Jakarta Selatan, 12540<br />Indonesia</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12">
                                    <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                                    <div className="flex space-x-4">
                                        <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-amber-600 hover:text-white rounded-full flex items-center justify-center transition">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                                            </svg>
                                        </a>
                                        <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-amber-600 hover:text-white rounded-full flex items-center justify-center transition">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                                            </svg>
                                        </a>
                                        <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-amber-600 hover:text-white rounded-full flex items-center justify-center transition">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>

            <section className="py-0">
                <div className="container mx-auto px-6">
                    <div className="rounded-xl overflow-hidden shadow-xl" data-aos="fade-up">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.81956135000001!3d-6.1947419999999945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b462cb9e75a4999!2sJakarta%20Selatan!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <span className="text-amber-600 font-medium uppercase tracking-wider">FAQs</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-4 font-playfair">Frequently Asked Questions</h2>
                        <div className="w-20 h-1 bg-amber-500 mx-auto mt-6"></div>
                    </div>
                    <div className="max-w-3xl mx-auto">
                       {
                            dataQuestions.map((item, index) => {
                                return (
                                    <QuestionsCard 
                                        key={index}
                                        title={item.title}
                                        num={item.num}
                                        text={item.text}
                                    />
                                )
                            })
                       }
                    </div>
                </div>
            </section>

            <CTASection title={"Ready to Book Your Session?"} text={"Let's create beautiful memories together. Contact us today to discuss your photography needs!"} />
        </>
    )
}