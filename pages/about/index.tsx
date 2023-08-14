"use client";
import React from "react";
import Navbar from "../../components/ui/Navbar";
import Footer from "../../components/ui/Footer";
import Image from "next/image";
import Splatters from "../../public/Splatters1.png";
import Testimonial from "../../public/cap.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const index = () => {
  return (
    <>
      <Navbar />
      <section className="w-full px-4 h-fit mt-20 bg-white text-black">
        <div className="w-full flex flex-col items-center justify-center gap-2 h-fit">
          <h1 className="text-title text-3xl mt-6">Conoce sobre nostros</h1>
          <p className="text-content">Ven y diviertete</p>
          <div className="flex items-center">
            <div className="w-full flex flex-col items-end justify-center md:w-1/2">
              <Image src={Splatters} alt="splatter" />
            </div>
            <div className="w-full flex flex-col items-center justify-center md:w-1/2 text-content p-8">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda neque, natus molestiae quaerat exercitationem deserunt
                nesciunt at. Quas cumque id sit delectus. Autem mollitia, iure
                dolorum iste animi repellat quisquam!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda neque, natus molestiae quaerat exercitationem deserunt
                nesciunt at. Quas cumque id sit delectus. Autem mollitia, iure
                dolorum iste animi repellat quisquam!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full px-4 py-8 flex flex-col items-center justify-center gap-2  h-fit ">
        <h3 className="text-2xl text-center text-title">Fotos y Videos</h3>
        <p className="text-content">Disfruta de nuestra galeria</p>
        <div className="flex flex-col md:flex-row md:flex-wrap">
          <div className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-3/12 ">
            <Image src={Splatters} width={200} height={200} alt="heli" />
          </div>
          <div className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-3/12 ">
            <Image src={Splatters} width={200} height={200} alt="heli" />
          </div>
          <div className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-3/12 ">
            <Image src={Splatters} width={200} height={200} alt="heli" />
          </div>
          <div className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-3/12 ">
            <Image src={Splatters} width={200} height={200} alt="heli" />
          </div>
          <div className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-3/12 ">
            <Image src={Splatters} width={200} height={200} alt="heli" />
          </div>
          <div className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-3/12 ">
            <Image src={Splatters} width={200} height={200} alt="heli" />
          </div>
          <div className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-3/12 ">
            <Image src={Splatters} width={200} height={200} alt="heli" />
          </div>
          <div className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-3/12 ">
            <Image src={Splatters} width={200} height={200} alt="heli" />
          </div>
        </div>
      </section>
      {/* <section className="w-full px-4 py-8 flex flex-col items-center justify-center gap-12 h-80 bg-white text-black">
        <h3 className="text-3xl text-center text-title ">
          Testimoniales de nuestros clientes
        </h3>
        <div className="w-full flex justify-center items-center pt-4">
          <Swiper
            navigation={true}
            spaceBetween={50}
            slidesPerView={2}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 10 },
              480: { slidesPerView: 2, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 10 },
              1024: { slidesPerView: 2, spaceBetween: 10 },
            }}
          >
            <SwiperSlide>
              <div className="w-full flex justify-end gap-2">
                <div className="flex items-end justify-end  gap-4 md:w-1/3">
                  <Image
                    src={Testimonial}
                    width={100}
                    height={100}
                    alt="heli"
                  />
                </div>
                <div className="flex flex-col md:w-1/2">
                  <p className="text-title">Nombre</p>
                  <p className="text-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam, voluptatibus.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full justify-start flex gap-2">
                <div className="flex items-end justify-end  gap-4 md:w-1/3">
                  <Image
                    src={Testimonial}
                    width={100}
                    height={100}
                    alt="heli"
                  />
                </div>
                <div className="flex flex-col md:w-1/2">
                  <p className="text-title">Nombre</p>
                  <p className="text-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam, voluptatibus.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full flex justify-start gap-2">
                <div className="flex items-start justify-start  gap-4 md:auto">
                  <Image
                    src={Testimonial}
                    width={100}
                    height={100}
                    alt="heli"
                  />
                </div>
                <div className="flex flex-col md:w-1/2">
                  <p className="text-title">Nombre</p>
                  <p className="text-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam, voluptatibus.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section> */}
      <section className="w-full  flex flex-col items-center justify-center gap-4 h-72">
        <h4 className="text-title text-3xl">Quiero jugar</h4>
        <div className="flex gap-4">
          <button className="bg-lime-400 text-white px-4 py-2 rounded-md text-content">
            Reserva ahora
          </button>
          <button className="bg-lime-400 text-white px-4 py-2 rounded-md text-content">
            Reserva ahora
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default index;
