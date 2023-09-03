"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";

const Experiencia = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Experiencia | Helipuerto</title>
      </Head>
      <section className="w-full px-4 h-fit pt-20 overflow-x-hidden">
        <div className="w-full flex flex-col items-center justify-center gap-2 h-fit">
          <h1 className="text-title text-3xl mt-6">Experiencia Helipuerto</h1>
          <p className="text-content">
            Ven y vive la experiencia helipuerto con nosotros.
          </p>
          <div className="w-full flex flex-col items-center md:flex-row">
            <div
              className="w-full flex flex-col items-end justify-center md:w-1/2"
              data-aos="slide-right"
            >
              <Image
                src="/Splatters1.png"
                width={200}
                height={200}
                alt="splatter"
              />
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
      <section className="w-full px-4 py-8 flex flex-col items-center justify-center gap-2 h-fit bg-black overflow-x-hidden">
        <h3 className="text-2xl text-center text-title">
          Experiencia HELITeam
        </h3>
        <p className="text-xl text-content">
          Se parte del equipo y tendras ofertas especiales
        </p>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center relative">
          <div
            className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-4/12"
            data-aos="fade-in"
          >
            <Image
              src="/img/experiencia/rango1.png"
              width={70}
              height={200}
              alt="heli"
            />
            <h4 className="text-lg text-title">Cabo</h4>
            <p className="text-sm text-center text-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              quod quibusdam accusamus illum! Ab doloribus, repellat commodi
              asperiores quis deleniti.
            </p>
          </div>
          <div
            className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-4/12"
            data-aos="fade-in"
          >
            <Image
              src="/img/experiencia/rango2.png"
              width={70}
              height={200}
              alt="heli"
            />
            <h4 className="text-lg text-title">Cadete</h4>
            <p className="text-sm text-center text-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              quod quibusdam accusamus illum! Ab doloribus, repellat commodi
              asperiores quis deleniti.
            </p>
          </div>
          <div
            className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-4/12 z-10"
            data-aos="fade-in"
          >
            <Image
              src="/img/experiencia/rango3.png"
              width={70}
              height={200}
              alt="heli"
            />
            <h4 className="text-lg text-title">Sargento</h4>
            <p className="text-sm text-center text-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              quod quibusdam accusamus illum! Ab doloribus, repellat commodi
              asperiores quis deleniti.
            </p>
          </div>
          <div
            className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-4/12"
            data-aos="fade-in"
          >
            <Image
              src="/img/experiencia/rango4.png"
              width={70}
              height={200}
              alt="heli"
            />
            <h4 className="text-lg text-title">Teniente</h4>
            <p className="text-sm text-center text-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              quod quibusdam accusamus illum! Ab doloribus, repellat commodi
              asperiores quis deleniti.
            </p>
          </div>
          <div
            className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-4/12"
            data-aos="fade-in"
          >
            <Image
              src="/img/experiencia/especial.png"
              width={100}
              height={200}
              alt="heli"
            />
            <h4 className="text-lg text-title">Fuerzas especiales</h4>
            <p className="text-sm text-center text-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              quod quibusdam accusamus illum! Ab doloribus, repellat commodi
              asperiores quis deleniti.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-black px-4 py-8 flex flex-col items-center justify-center gap-2 h-fit overflow-x-hidden relative">
        <h3 className="text-2xl text-center text-title mt-8">
          Arma tus Torneos
        </h3>
        <p className="text-content text-xl">Puedes competir en el Helipuerto</p>
        <div className="flex flex-col md:flex-row md:flex-wrap">
          <div
            className="w-full flex flex-col gap-4 items-center justify-center md:w-4/12 p-4"
            data-aos="fade-in"
            data-aos-delay="1000"
          >
            <Image src="/registered.png" width={200} height={200} alt="heli" />
            <h4 className="text-lg text-title">Alistate Para el combate</h4>
            <p className="text-sm text-center text-content">
              Registra a tus equipo para entrar a la zona de batalla.
            </p>
            <button className="border-2 border-white text-white px-4 py-2 rounded-md text-sm text-content">
              Reserva ahora
            </button>
          </div>

          <div
            className="w-full flex flex-col gap-4 items-center justify-center md:w-4/12 p-4"
            data-aos="fade-in"
            data-aos-delay="2000"
          >
            <Image src="/combat.png" width={200} height={200} alt="heli" />
            <h4 className="text-lg text-title">Combate</h4>
            <p className="text-sm text-center text-content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Corporis,
            </p>
            <button className="border-2 border-white text-white px-4 py-2 rounded-md text-sm text-content">
              Reserva ahora
            </button>
          </div>

          <div
            className="w-full flex flex-col gap-4 items-center justify-center md:w-4/12 p-4"
            data-aos="fade-in"
            data-aos-delay="3000"
          >
            <Image src="/gold-medal.png" width={200} height={200} alt="heli" />
            <h4 className="text-lg text-title">Disfruta de tu victoria</h4>
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
      <section className="w-full px-4 py-8 flex flex-col items-center justify-center gap-2  h-fit overflow-x-hidden">
        <h3 className="text-2xl text-center text-title">Fotos y Videos</h3>
        <p className="text-content">Disfruta de nuestra galeria</p>
        <div className="flex flex-col md:flex-row md:flex-wrap">
          <div
            className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-3/12"
            data-aos="zoom-in"
          >
            <Image
              src="/img/experiencia/1.jpg"
              width={70}
              height={200}
              alt="heli"
            />
          </div>
          <div
            className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-3/12"
            data-aos="zoom-in"
          >
            <Image
              src="/img/experiencia/2.jpg"
              width={70}
              height={200}
              alt="heli"
            />
          </div>
          <div
            className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-3/12"
            data-aos="zoom-in"
          >
            <Image
              src="/img/experiencia/3.jpeg"
              width={70}
              height={200}
              alt="heli"
            />
          </div>
          <div
            className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-3/12"
            data-aos="zoom-in"
          >
            <Image
              src="/img/experiencia/4.jpeg"
              width={70}
              height={200}
              alt="heli"
            />
          </div>
          <div
            className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-3/12"
            data-aos="zoom-in"
          >
            <Image
              src="/img/experiencia/5.jpeg"
              width={70}
              height={200}
              alt="heli"
            />
          </div>
          <div
            className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-3/12"
            data-aos="zoom-in"
          >
            <Image
              src="/img/experiencia/6.jpg"
              width={70}
              height={200}
              alt="heli"
            />
          </div>
          <div
            className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-3/12"
            data-aos="zoom-in"
          >
            <Image
              src="/img/experiencia/7.jpg"
              width={70}
              height={200}
              alt="heli"
            />
          </div>
          <div
            className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-3/12"
            data-aos="zoom-in"
          >
            <Image
              src="/img/experiencia/8.png"
              width={70}
              height={200}
              alt="heli"
            />
          </div>
        </div>
      </section>

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
    </>
  );
};

export default Experiencia;
