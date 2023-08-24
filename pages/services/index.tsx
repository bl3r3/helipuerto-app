"use client";
import React, { useEffect } from "react";
import Navbar from "../../components/ui/Navbar";
import Footer from "../../components/ui/Footer";
import Image from "next/image";
import Splatters from "../../public/Splatters2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Paint from "../../public/img/7496-removebg-preview.png";

import { Gallery } from "../../components/Gallery/Gallery";
import { Chip, Divider } from "@nextui-org/react";
import {
  slides,
  slidesGaming,
  slidesTest,
} from "../../components/Gallery/data";
import Head from "next/head";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <>
      <Head>
        <title>Componentes | Helipuerto</title>
      </Head>
      <Navbar />
      <section className="w-full px-4 h-fit pt-20">
        <div className="w-full flex flex-col items-center justify-center gap-2 h-fit">
          <h1 className="text-title text-3xl mt-8">Nuestros Componentes</h1>
          <p className="text-content">
            Consulta por nuestros servicios y por nuestras diferentes zonas
          </p>
          <div className="w-full flex flex-col md:flex-row  md:items-center">
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
      {/* <section className="w-full px-4 py-8 flex flex-col items-center justify-center gap-4 h-fit">
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
      </section> */}
      <section className="w-full bg-black px-4 py-8 flex flex-col items-center justify-center gap-2 h-fit overflow-x-hidden relative">
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
      {/* <section className="w-full px-4 py-8 flex flex-col items-center justify-center gap-4 h-fit">
        <h4 className="text-title text-3xl">Quiero jugar</h4>
        <div className="flex gap-4">
          <button className="bg-lime-400 text-black px-4 py-2 rounded-md text-content">
            Reserva ahora
          </button>
          <button className="bg-lime-400 text-black px-4 py-2 rounded-md text-content">
            Reserva ahora
          </button>
        </div>
      </section> */}
      <section className="w-full bg-black px-4 py-8 flex flex-col items-center justify-center gap-2 h-fit relative">
        <div className="absolute top-0 right-10 w-48" data-aos="slide-left">
          <Image src={Paint} alt="some" />
        </div>
        <div className="absolute top-0 left-10 w-48" data-aos="slide-right">
          <Image src={Paint} alt="some" />
        </div>
        <h3 className="text-2xl text-center text-title mt-8">
          Zonas de Combate
        </h3>
        <p className="text-content text-xl">Alistate y combate</p>
        <div className="w-full flex flex-col gap-4 py-5 md:flex-row">
          <div
            className="w-full flex items-start justify-center flex-col md:w-1/3 px-12 gap-2"
            data-aos="zoom-in-right"
          >
            <h3 className="text-2xl text-center text-title mt-8">Cancha A</h3>
            <div className="w-full flex gap-2">
              <Chip>Airsoft</Chip>
              <Chip>Paintball</Chip>
              <Chip>Torneos</Chip>
            </div>
            <Divider className="my-4 bg-white" />
            <p className="text-content text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
              voluptatem a veritatis repudiandae, laborum temporibus mollitia
              tempore ut illo ullam.
            </p>
            <Divider className="my-4 bg-white" />

            <button className="border-2 border-white text-white px-4 py-2 rounded-md text-sm text-content">
              Reserva ahora
            </button>
          </div>
          <div className="w-full md:w-2/3">
            <Gallery data={slidesTest} />
          </div>
        </div>
        <div className="w-full flex flex-col-reverse gap-4 py-5 md:flex-row">
          <div className="w-full gap-2 md:w-2/3">
            <Gallery data={slides} />
          </div>
          <div
            className="w-full flex items-start justify-center flex-col md:w-1/3 px-12 gap-2 relative"
            data-aos="zoom-in-left"
          >
            <h3 className="text-2xl text-center text-title mt-8">Cancha B</h3>
            <div className="w-full flex gap-2 flex-wrap">
              <Chip>Airsoft</Chip>
              <Chip>Paintball</Chip>
              <Chip>Torneos</Chip>
              <Chip>Entrenamiento</Chip>
            </div>
            <Divider className="my-4 bg-white" />
            <p className="text-content text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
              voluptatem a veritatis repudiandae, laborum temporibus mollitia
              tempore ut illo ullam.
            </p>
            <button className="border-2 border-white text-white px-4 py-2 rounded-md text-sm text-content">
              Reserva ahora
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 py-5 md:flex-row">
          <div
            className="w-full flex items-start justify-center flex-col md:w-1/3 px-12 gap-2"
            data-aos="zoom-in-right"
          >
            <h3 className="text-2xl text-center text-title mt-8">Cancha C</h3>
            <div className="w-full flex gap-2 flex-wrap">
              <Chip>Airsoft</Chip>
              <Chip>Paintball</Chip>
              <Chip>Torneos</Chip>
              <Chip>Entrenamiento</Chip>
              <Chip>Full day</Chip>
            </div>
            <Divider className="my-4 bg-white" />
            <p className="text-content text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
              voluptatem a veritatis repudiandae, laborum temporibus mollitia
              tempore ut illo ullam.
            </p>
          </div>
          <div className="w-full md:w-2/3">
            <Gallery data={slides} />
          </div>
        </div>
        <div className="w-full flex flex-col-reverse gap-4 py-5 md:flex-row">
          <div className="w-full md:w-2/3">
            <Gallery data={slidesGaming} />
          </div>
          <div
            className="w-full flex items-start justify-center flex-col md:w-1/3 px-12 gap-2 "
            data-aos="zoom-in-left"
          >
            {/* <div className="absolute  top-0 right-0 z-10">
              <Image src={Paint} alt="some" />
            </div> */}
            <h3 className="text-2xl text-center text-title mt-8">Zona Gamer</h3>
            <div className="w-full flex gap-2 flex-wrap">
              <Chip>PC</Chip>
              <Chip>VR</Chip>
              <Chip>Torneos</Chip>
              <Chip>PS5</Chip>
              <Chip>Xbox</Chip>
            </div>
            <Divider className="my-4 bg-white" />
            <p className="text-content text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
              voluptatem a veritatis repudiandae, laborum temporibus mollitia
              tempore ut illo ullam.
            </p>
          </div>
        </div>
      </section>
      {/* <div className="flex w-1/3">
        <Carousel emulateTouch infiniteLoop swipeable>
          <div>
            <Image src={Splatters} alt="image1" />
          </div>
          <div>
            <Image src={Splatters} alt="image2" />
          </div>
          <div>
            <Image src={Splatters} alt="image3" />
          </div>
        </Carousel>
      </div> */}

      <Footer />
    </>
  );
};

export default Services;
