import { useState } from "react";
import { SectionHeader } from "../CreateUi";
import { galleryItems } from "../../data/data";
import { CTASection } from "../ui";

export function GalleryPages() {
    const [filter, setFilter] = useState("all");

    const filteredItems =
        filter === "all"
            ? galleryItems
            : galleryItems.filter((item) => item.category === filter);

    return (
        <>
            <SectionHeader
                title={"Our"}
                subtitle={"Gallery"}
                text={"Explore our collection of stunning photographs from various projects"}
            />

            <section className="py-8 bg-white shadow-sm">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-4">
                        {["all", "wedding", "portrait", "commercial", "events"].map((type) => (
                            <button
                                key={type}
                                className={`filter-btn px-6 py-2 rounded-full border border-gray-300 hover:bg-amber-600 hover:text-white hover:border-amber-600 transition ${filter === type ? "bg-amber-600 text-white border-amber-600" : ""
                                    }`}
                                onClick={() => setFilter(type)}
                            >
                                {type === "all" ? "All Works" : type.charAt(0).toUpperCase() + type.slice(1) + "s"}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredItems.map((item, idx) => (
                            <div key={idx} className={`gallery-item ${item.category}`} data-aos="fade-up">
                                <div className="overflow-hidden rounded-xl shadow-lg h-[400px]">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-64 object-cover transition duration-500 hover:scale-110"
                                    />
                                    <div className="p-6 bg-white">
                                        <h3 className="text-xl font-bold mb-2 font-playfair">{item.title}</h3>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
                    
            <CTASection title={"Like What You See?"} text={"Let's create beautiful memories together. Book your session today!"} />
        </>
    );
}