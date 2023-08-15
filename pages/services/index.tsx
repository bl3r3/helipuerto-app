"use client";
import React, { useEffect } from "react";
import Navbar from "../../components/ui/Navbar";
import Footer from "../../components/ui/Footer";
import Image from "next/image";
import Splatters from "../../public/Splatters2.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <>
      <Navbar />
      <section className="w-full px-4 h-fit mt-20">
        <div className="w-full flex flex-col items-center justify-center gap-2 h-fit">
          <h1 className="text-title text-3xl mt-8">Nuestros Servicos</h1>
          <p className="text-content">Consulta por nuestros servicos</p>
          <div className="flex items-center">
            <div
              className="w-full flex flex-col items-end justify-center md:w-1/2"
              data-aos="slide-right"
            >
              <Image src={Splatters} alt="splatter" />
            </div>
            <div className="w-full flex flex-col gap-2 items-center justify-center md:w-1/2 text-content p-8">
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
      <section className="w-full px-4 py-8 flex flex-col items-center justify-center gap-4 h-fit">
        <h3 className="text-2xl text-center text-title mt-8">
          Nuestros Servicios
        </h3>
        <p className="text-content text-xl">
          Escoge el que mejor se adapte a ti
        </p>
        <div className="w-full flex flex-col md:flex-row md:gap-4 md:flex-nowrap md:justify-center md:items-start">
          <div className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-3/12 ">
            <Image src={Splatters} width={200} height={200} alt="heli" />
            <div className="flex justify-between gap-12">
              <p className="text-sm text-content">100 Paintballs</p>
              <p className="text-sm text-content">$40</p>
            </div>
            <button className="bg-lime-400 text-white px-4 py-2 rounded-md text-sm text-content">
              Reserva ahora
            </button>
          </div>
          <div className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-3/12 ">
            <Image src={Splatters} width={200} height={200} alt="heli" />
            <div className="flex justify-between gap-12">
              <p className="text-sm text-content">100 Paintballs</p>
              <p className="text-sm text-content">$40</p>
            </div>
            <button className="bg-lime-400 text-white px-4 py-2 rounded-md text-sm text-content">
              Reserva ahora
            </button>
          </div>
          <div className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-3/12 ">
            <Image src={Splatters} width={200} height={200} alt="heli" />
            <div className="flex justify-between gap-12">
              <p className="text-sm text-content">100 Paintballs</p>
              <p className="text-sm text-content">$40</p>
            </div>
            <button className="bg-lime-400 text-white px-4 py-2 rounded-md text-sm text-content">
              Reserva ahora
            </button>
          </div>
        </div>
      </section>
      <section className="w-full bg-black px-4 py-8 flex flex-col items-center justify-center gap-2 h-fit overflow-x-hidden">
        <h3 className="text-2xl text-center text-title mt-8">
          Nuestros Servicios
        </h3>
        <p className="text-content text-xl">
          Escoge el que mejor se adapte a ti
        </p>
        <div className="flex flex-col md:flex-row md:flex-wrap">
          <div
            className="w-full flex flex-col gap-2 items-center justify-center md:w-4/12 p-4"
            data-aos="fade-in"
          >
            <Image src={Splatters} width={200} height={200} alt="heli" />
            <h4 className="text-lg text-title">Canchas de Paintball</h4>
            <p className="text-sm text-center text-content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Corporis,
            </p>
            <button className="border-2 border-white text-white px-4 py-2 rounded-md text-sm text-content">
              Reserva ahora
            </button>
          </div>

          <div
            className="w-full flex flex-col gap-2 items-center justify-center md:w-4/12 p-4"
            data-aos="fade-in"
          >
            <Image src={Splatters} width={200} height={200} alt="heli" />
            <h4 className="text-lg text-title">Equipamiento y replicas</h4>
            <p className="text-sm text-center text-content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Corporis,
            </p>
            <button className="border-2 border-white text-white px-4 py-2 rounded-md text-sm text-content">
              Reserva ahora
            </button>
          </div>

          <div
            className="w-full flex flex-col gap-2 items-center justify-center md:w-4/12 p-4"
            data-aos="fade-in"
          >
            <Image src={Splatters} width={200} height={200} alt="heli" />
            <h4 className="text-lg text-title">Entrenamiento Tactico</h4>
            <p className="text-sm text-center text-content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Corporis,
            </p>

            <button className="border-2 border-white text-white px-4 py-2 rounded-md text-sm text-content">
              Reserva ahora
            </button>
          </div>
        </div>
      </section>
      <section className="w-full px-4 py-8 flex flex-col items-center justify-center gap-4 h-fit">
        <h4 className="text-title text-3xl">Quiero jugar</h4>
        <div className="flex gap-4">
          <button className="bg-lime-400 text-black px-4 py-2 rounded-md text-content">
            Reserva ahora
          </button>
          <button className="bg-lime-400 text-black px-4 py-2 rounded-md text-content">
            Reserva ahora
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;
