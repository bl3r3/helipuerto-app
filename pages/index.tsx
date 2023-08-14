"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import Placeholder from "../public/placeholder.svg";
import Modal1 from "../public/img/home/modal3.jpeg";
import Nosotros1 from "../public/img/home/paint-11.jpeg";
import Calavera from "../public/img/home/calavera.jpeg";
import Cinta from "../public/img/home/cintaa.png";
import Fuerza from "../public/img/home/fuerza.jpg";
import Membresia from "../public/img/home/Membresia.png";
import Canchas from "../public/img/home/canchas.jpeg";
import Servicios from "../public/img/home/servicios.png";
import CrossHair from "../public/img/home/crosshair.svg";

export default function Page() {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <Navbar />
      <section className="w-full mx-auto h-screen relative">
        {/* <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        > */}
        <video className="w-full p-0" autoPlay muted loop id="myVideo">
          <source src="./video.mp4" type="video/mp4" />
        </video>
        <div className="container px-4 mx-auto h-full md:w-full absolute top-0 left-0 right-0">
          <div className="flex content-center items-center justify-center h-full flex-col top-50">
            <h1 className="text-4xl animate__animated animate__backInUp">
              Titulo Principal
            </h1>
            <h2 className="bg-white text-black text-xl w-full text-center animate__animated animate__backInUp animate__delay-1s">
              SUBTITULO
            </h2>
            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-center gap-2 animate__delay-2s animate__animated animate__fadeIn">
              <button className="bg-lime-400 text-black text-xl p-2 text-center mt-4 rounded-md">
                Boton Uno
              </button>
              <button className="bg-transparent text-white text-xl p-2 text-center mt-4 rounded-md border-white border-2">
                Boton Dos
              </button>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
      <section className="w-full px-4 py-8 flex flex-col gap-4 md:flex-row md:px-12 lg:px-24 text-content bg-black">
        <div
          className="w-full flex flex-col justify-center items-end bg-first-card border-2 rounded-md h-56 p-4 md:w-6/12 md:h-[270px]"
          data-aos="slide-right"
        >
          <h3 className="text-xl text-title">Horario</h3>
          <p>Lun - Vie 08:00 am - 11:00 pm</p>
          <p>Lun - Vie 08:00 am - 11:00 pm</p>
          <p>Lun - Vie 08:00 am - 11:00 pm</p>
        </div>
        <div
          className="w-full flex flex-col justify-center items-start bg-second-card border-2 rounded-md h-56 p-4 md:w-6/12  md:h-[270px]"
          data-aos="slide-left"
        >
          <h3 className="text-xl text-title">Horario</h3>
          <p>Lun - Vie 08:00 am - 11:00 pm</p>
          <p>Lun - Vie 08:00 am - 11:00 pm</p>
          <p>Lun - Vie 08:00 am - 11:00 pm</p>
        </div>
      </section>
      <section className="w-full px-4 py-8 flex flex-col items-center justify-center gap-2 h-fit bg-black">
        <h3 className="text-2xl text-center text-title">Sobre Nosotros</h3>
        <p className="text-xl text-content">Ven y diviertete con nosotros</p>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-start relative">
          <div className="absolute left-[-10px] top-[38%] " data-aos="fade-in">
            <Image src={Calavera} width={200} height={200} alt="heli" />
          </div>
          <div
            className="absolute right-[-100px] top-[0] opacity-20"
            data-aos="fade-in"
          >
            <Image src={CrossHair} width={200} height={200} alt="heli" />
          </div>
          <div
            className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-4/12"
            data-aos="fade-in"
          >
            <Image src={Nosotros1} width={200} height={200} alt="heli" />
            <h4 className="text-lg text-title">Que es el Helipuerto?</h4>
            <p className="text-sm text-center text-content">
              Somo un centro de diversion donde desde los mas chicos hasta los
              mas grandes pueden venir a divertirse y vivir una expereincia
              unica. Tambien contamos con espacios para entrenamiento
              profesional.
            </p>
          </div>
          <div
            className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-4/12"
            data-aos="fade-in"
          >
            <Image src={Servicios} width={200} height={200} alt="heli" />
            <h4 className="text-lg text-title">Servicios</h4>
            <p className="text-sm text-center text-content">
              Contamos con servcios de entrenamiento profesional, alquiler de
              cancha, alquiler de equipos y mucho mas.
            </p>
          </div>
          <div
            className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-4/12 z-10"
            data-aos="fade-in"
          >
            <Image src={Canchas} width={200} height={200} alt="heli" />
            <h4 className="text-lg text-title">Nuestras canchas</h4>
            <p className="text-sm text-center text-content">
              Contamos con la mejor cancha de la ciudad, con la mejor
              iluminacion y el mejor cesped sintetico. Tambien poseeos canchas
              de entrenamiento tactico para equipos profesionales.
            </p>
          </div>
          <div
            className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-4/12"
            data-aos="fade-in"
          >
            <Image src={Fuerza} width={200} height={200} alt="heli" />
            <h4 className="text-lg text-title">Equipamiento y armamento</h4>
            <p className="text-sm text-center text-content">
              El helipuerto tiene el mas moderno equipamiento y armamento para
              que vivas una experiencia real y unica en el campo de batalla.
            </p>
          </div>
          <div
            className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-4/12"
            data-aos="fade-in"
          >
            <Image src={Membresia} width={200} height={200} alt="heli" />
            <h4 className="text-lg text-title">Rangos y premios</h4>
            <p className="text-sm text-center text-content">
              Contaras con un servicio de rangos y premios para que puedas
              obtener una vez seas parte del HeliTeam y puedas obtener
              beneficios, premios, descuentos y mucho mas.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full bg-black px-4 py-8 flex flex-col items-center justify-center gap-2 h-fit relative">
        <div className="absolute top-0 w-full">
          <Image src={Cinta} alt="heli" />
        </div>
        <h3 className="text-2xl text-center text-title mt-12">
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
            <Image src={Placeholder} width={200} height={200} alt="heli" />
            <h4 className="text-lg text-title">Servicio Uno</h4>
            <p className="text-sm text-center text-content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Corporis,
            </p>
            <button className="bg-lime-400 text-white px-4 py-2 rounded-md text-sm text-content">
              Mas info
            </button>
          </div>

          <div
            className="w-full flex flex-col gap-2 items-center justify-center md:w-4/12 p-4"
            data-aos="fade-in"
          >
            <Image src={Placeholder} width={200} height={200} alt="heli" />
            <h4 className="text-lg text-title">Cancha de Airsoft</h4>
            <p className="text-sm text-center text-content">
              Nuestra cancha de airsoft es la mejor de la ciduad.
            </p>
            <button className="bg-lime-400 text-white px-4 py-2 rounded-md text-sm text-content">
              Mas info
            </button>
          </div>

          <div
            className="w-full flex flex-col gap-2 items-center justify-center md:w-4/12 p-4"
            data-aos="fade-in"
          >
            <Image src={Placeholder} width={200} height={200} alt="heli" />
            <h4 className="text-lg text-title">Servicio Uno</h4>
            <p className="text-sm text-center text-content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Corporis,
            </p>

            <button className="button" onClick={() => setModal(true)}>
              Open simple modal
            </button>
          </div>
        </div>
      </section>
      <section className="w-full px-4 img-bg-second h-[460px] bg-black">
        <div className="container mx-auto px-4 h-full md:w-full">
          <div className="flex content-center items-center justify-center h-full flex-col">
            <h1 className="text-4xl" data-aos="slide-left">
              Titulo Principal
            </h1>
            <h2
              className="bg-white text-black text-xl w-full text-center"
              data-aos="slide-left"
            >
              SUBTITULO
            </h2>
            <div
              className="w-full flex flex-col md:flex-row md:items-center md:justify-center gap-2"
              data-aos="slide-left"
            >
              <button className="bg-lime-400 text-black text-xl p-2 text-center mt-4 rounded-md">
                Boton Uno
              </button>
              <button className="bg-transparent text-white text-xl p-2 text-center mt-4 rounded-md border-white border-2">
                Boton Dos
              </button>
            </div>
          </div>
        </div>
      </section>

      <PureModal
        header="Canchas de Airsoft"
        isOpen={modal}
        closeButton="x"
        onClose={() => {
          setModal(false);
        }}
        width="70%"
      >
        <div className="flex items-start justify-start gap-6">
          <div className="w-1/2">
            <Image src={Modal1} alt="heli" />
          </div>
          <div className="flex flex-col items-start w-1/2">
            <p className="text-content text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              perspiciatis dicta pariatur accusamus delectus voluptates at ex
              minus incidunt? Error adipisci praesentium excepturi totam
              voluptas eligendi iste nesciunt. Eius, quasi!
            </p>
            <button
              className="bg-lime-400 text-black text-xl p-2 text-center mt-4 rounded-mdtton"
              onClick={() => setModal(false)}
            >
              <Link href="/services">Mas informacion</Link>
            </button>
          </div>
        </div>
      </PureModal>
      <Footer />
    </>
  );
}
