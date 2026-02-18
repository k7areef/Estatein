import React from "react";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderContollers from "./components/SliderContollers";

/**
 * @typedef {Object} SliderCardsProps
 * @prop {Array} list
 * @prop {string} name
 * @prop {React.ReactNode} CardComponent
 */

/**
 * @param {SliderCardsProps} props
 */

function SliderCards({ list, CardComponent, name }) {

    const [activeIndex, setActiveIndex] = React.useState(0);
    const nameEnhanced = name.toLowerCase();

    return (
        <div className={`swiper-slider-${nameEnhanced}`}>
            <Swiper
                modules={[Navigation]}
                spaceBetween={15}
                breakpoints={{
                    0: {
                        slidesPerView: 1
                    },
                    640: {
                        slidesPerView: 2
                    },
                    1280: {
                        slidesPerView: 3
                    }
                }}
                navigation={{
                    nextEl: `.${nameEnhanced}-swiper-button-next`,
                    prevEl: `.${nameEnhanced}-swiper-button-prev`,
                }}
                pagination={{ clickable: true }}
                onSwiper={swiper => setActiveIndex(swiper.activeIndex)}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
                {
                    list.map((item, index) => (<SwiperSlide key={item.id || index} className="h-auto!">
                        {CardComponent(item)}
                    </SwiperSlide>))
                }
            </Swiper>
            <SliderContollers
                activeIndex={activeIndex}
                listCount={list.length}
                name={nameEnhanced}
            />
        </div>
    )
}

export default SliderCards;