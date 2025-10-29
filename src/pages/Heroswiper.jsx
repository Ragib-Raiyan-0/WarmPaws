import React, { useRef  } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import toysData from '../data/services.json';

const Homeswiper = () => {
  const swiperRef = useRef(null);
  const featuredToys = toysData.slice(0, 3);

  return (
    <section className="relative mb-16">
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={0}
        centeredSlides={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="h-64 md:h-96 lg:h-[500px] rounded-box overflow-hidden"
      >
        {featuredToys.map((pet) => (
          <SwiperSlide key={pet.id}>
            <div className="relative w-full h-full">
              <img
                src={pet.image}
                alt={pet.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                <div className="text-white p-6 md:p-8 lg:p-12 w-full">
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 text-primary">
                    {pet.name}
                  </h2>
                  
                  <div className="flex items-center gap-4 text-sm md:text-base">
                    <span className="badge badge-primary">${pet.price}</span>
                    <span className="flex items-center gap-1">
                      Rating: {pet.rating} / 5
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <button className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-base-100/70 dark:bg-base-900/70 text-base-content p-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 backdrop-blur-sm">
        ❮
      </button>

      <button className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-base-100/70 dark:bg-base-900/70 text-base-content p-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 backdrop-blur-sm">
        ❯
      </button>
    </section>
  );
};

export default Homeswiper;