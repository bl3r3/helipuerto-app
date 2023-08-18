"use client";
import React, { useEffect } from "react";
import Navbar from "../../components/ui/Navbar";
import Footer from "../../components/ui/Footer";
import Image from "next/image";
import Splatters from "../../public/Splatters1.png";
import Especial from "../../public/img/experiencia/especial.png";
import Rango1 from "../../public/img/experiencia/rango1.png";
import Rango2 from "../../public/img/experiencia/rango2.png";
import Rango3 from "../../public/img/experiencia/rango3.png";
import Rango4 from "../../public/img/experiencia/rango4.png";
import Img1 from "../../public/img/experiencia/1.jpg";
import Img2 from "../../public/img/experiencia/2.jpg";
import Img3 from "../../public/img/experiencia/3.jpeg";
import Img4 from "../../public/img/experiencia/4.jpeg";
import Img5 from "../../public/img/experiencia/5.jpeg";
import Img6 from "../../public/img/experiencia/6.jpg";
import Img7 from "../../public/img/experiencia/1000s.jpg";
import Img8 from "../../public/img/experiencia/8.png";
import Register from "../../public/registered.png";
import Comabat from "../../public/combat.png";
import Gold from "../../public/gold-medal.png";

import AOS from "aos";
import "aos/dist/aos.css";

const Experiencia = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <>
      <Navbar />
      <section className="w-full px-4 h-fit pt-20">
        <div className="w-full flex flex-col items-center justify-center gap-2 h-fit">
          <h1 className="text-title text-3xl mt-6">Experiencia Helipuerto</h1>
          <p className="text-content">
            Ven y vive la experiencia helipuerto con nosotros.
          </p>
          <div className="flex items-center">
            <div
              className="w-full flex flex-col items-end justify-center md:w-1/2"
              data-aos="slide-right"
            >
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
      <section className="w-full px-4 py-8 flex flex-col items-center justify-center gap-2 h-fit bg-black">
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
            <Image src={Rango1} width={70} height={200} alt="heli" />
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
            <Image src={Rango2} width={70} height={200} alt="heli" />
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
            <Image src={Rango3} width={70} height={200} alt="heli" />
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
            <Image src={Rango4} width={70} height={200} alt="heli" />
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
            <Image src={Especial} width={100} height={200} alt="heli" />
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
            <Image src={Register} width={200} height={200} alt="heli" />
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
            <Image src={Comabat} width={200} height={200} alt="heli" />
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
            <Image src={Gold} width={200} height={200} alt="heli" />
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
      <section className="w-full px-4 py-8 flex flex-col items-center justify-center gap-2  h-fit ">
        <h3 className="text-2xl text-center text-title">Fotos y Videos</h3>
        <p className="text-content">Disfruta de nuestra galeria</p>
        <div className="flex flex-col md:flex-row md:flex-wrap">
          <div
            className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-3/12"
            data-aos="zoom-in"
          >
            <Image src={Img1} alt="heli" />
          </div>
          <div
            className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-3/12"
            data-aos="zoom-in"
          >
            <Image src={Img2} alt="heli" />
          </div>
          <div
            className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-3/12"
            data-aos="zoom-in"
          >
            <Image src={Img3} alt="heli" />
          </div>
          <div
            className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-3/12"
            data-aos="zoom-in"
          >
            <Image src={Img4} alt="heli" />
          </div>
          <div
            className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-3/12"
            data-aos="zoom-in"
          >
            <Image src={Img5} alt="heli" />
          </div>
          <div
            className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-3/12"
            data-aos="zoom-in"
          >
            <Image src={Img6} alt="heli" />
          </div>
          <div
            className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-3/12"
            data-aos="zoom-in"
          >
            <Image src={Img7} alt="heli" />
          </div>
          <div
            className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-3/12"
            data-aos="zoom-in"
          >
            <Image src={Img8} alt="heli" />
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
      <Footer />
    </>
  );
};

export default Experiencia;
