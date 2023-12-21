import { useEffect, useRef } from "react";
import { TESTIMONI } from "../constants";
import testimoni1 from "../assets/testimoni-1.jpeg";
import { register, type SwiperContainer } from "swiper/element/bundle";

const Testimoni = () => {
  const swiperRef = useRef<SwiperContainer>(null);

  useEffect(() => {
    register();
    const swiperContainer = swiperRef.current;
    const swiperParams = {
      navigation: true,
      pagination: true,
      loop: true,
      slidesPerView: 1,
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
      injectStyles: [
        `
        .swiper-button-next,
        .swiper-button-prev {
          background-color: #d5ac42;
          border-radius: 100%;
          color: white;
          width: 25px;  
          height: 25px; 
          padding: 10px; 
        }

        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: #d5ac42;
        }

        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            width: 20px;
            height: 20px;
            padding: 8px; 
        }
      `,
      ],
    };

    Object.assign(swiperContainer!, swiperParams);
    swiperContainer?.initialize();
  }, []);

  return (
    <section
      id="testimoni"
      className="max-container flex w-full flex-col gap-10 px-5 py-16 lg:gap-16 lg:px-10"
    >
      <div className="flex flex-col items-center justify-center gap-3 text-center">
        <h1 className="text-3xl font-semibold leading-[110%] mobile-md:text-4xl lg:text-5xl">
          Pendapat Mereka tentang <span className="text-accent-base">Reglow</span>
        </h1>
        <p className="max-w-2xl font-montserrat leading-[140%] lg:text-lg">
          Pelanggan Sejati, Cerita Nyata
        </p>
      </div>
      <swiper-container ref={swiperRef} init="false" class="h-[500px] w-full bg-transparent">
        {TESTIMONI.map(({ img, alt }) => (
          <swiper-slide class="flex items-center justify-center pb-10">
            <img src={img} alt={alt} className="h-full w-fit object-contain" />
          </swiper-slide>
        ))}
      </swiper-container>
    </section>
  );
};

export default Testimoni;
