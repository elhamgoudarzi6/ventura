"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Image from 'next/image';

const Partner = () => {
    const logos = [
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
        "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
        "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg",
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
        "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
        "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg",
    ];

    return (
        <section className="container mx-auto mt-20 px-10 md:px-0 text-center my-10">
            <Swiper
                spaceBetween={20}
                loop={true}
                speed={6000}
                freeMode={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, FreeMode]}
                breakpoints={{
                    320: { slidesPerView: 2 },
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 5 },
                    1280: { slidesPerView: 6 },
                }}
            >
                {logos.map((item, index) => (
                    <SwiperSlide key={index} className="p-1">
                        <div className="flex items-center justify-center cursor-pointer">
                            <Image
                                src={item}
                                alt={`Partner ${index + 1}`}
                                layout="fill"
                                objectFit="cover"
                                className="max-h-10 object-contain"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Partner;



