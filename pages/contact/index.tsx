import React from "react";
import Head from "next/head";
import Image from "next/image";
import { FormComponent } from "../../components/Form/Form";
import { TiLocation } from "react-icons/ti";
import { FaPhone } from "react-icons/fa";
import { AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";

const index = () => {
  return (
    <>
      <Head>
        <title>Contacto | Helipuerto</title>
      </Head>
      <section className="w-full px-4 h-fit pt-20">
        <div className="w-full flex flex-col items-center justify-center gap-2 h-fit ">
          <h1 className="text-title text-3xl mt-12">Nuestros Servicos</h1>
          <p className="text-content">Consulta por nuestros servicos</p>
        </div>
        <div className="w-full flex flex-col px-4 mt-4 md:flex-row items-center justify-center gap-4 h-fit md:px-24">
          <div className="w-full md:w-1/3 flex flex-col items-start justify-start">
            <h3 className="text-title text-3xl text-center md:text-left">
              Detalles de Contacto
            </h3>
            <div className="flex w-full gap-4 py-2 text-content">
              <span className="bg-lime-400 rounded-full w-14 h-12 flex items-center justify-center">
                <TiLocation size={18} color="white" />
              </span>
              <p>Ubicacion: Walkers rIdge Wal Bolingbrook. IL 60440</p>
            </div>
            <div className="flex w-full gap-4 py-2 text-content">
              <span className="bg-lime-400 rounded-full w-12 h-12 flex items-center justify-center">
                <FaPhone size={18} color="white" />
              </span>
              <p>
                Teléfono: (012) 345 - 6789
                <br /> Teléfono: 555 - 653 9388
              </p>
            </div>
            <div className="flex w-full gap-4 py-2 text-content">
              <span className="bg-lime-400 rounded-full w-12 h-12 flex items-center justify-center">
                <AiOutlineMail size={18} color="white" />
              </span>
              <p>
                Correo: sales@paintball-ny.com
                <br /> Correo: info@paintball-ny.com
              </p>
            </div>
          </div>
          <FormComponent />
        </div>
      </section>
      <section className="w-full  h-fit bg-white text-black">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15693.51219938658!2d-66.624087!3d10.4708343!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2baad45e8ff2f9%3A0xab2cf60e2b4f1697!2sPlaza%20Bolivar!5e0!3m2!1ses!2sve!4v1691550172671!5m2!1ses!2sve"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </section>
      <section className="w-full px-4 h-fit mb-16">
        <div className="w-full flex flex-col items-center justify-center gap-2 h-fit ">
          <h1 className="text-title text-3xl mt-12 text-lime-400 flex items-center">
            <span>
              <AiOutlineInstagram />
            </span>
            Instagram
          </h1>
          <hr className="border-lime-400 border-2 w-full" />
          <div className="w-full flex items-center justify-between gap-2">
            <div className="w-full ">
              <a href="https://www.instagram.com/" target="_blank">
                <Image src="/img/heli-img/heli1.jpeg" width={300} height={300} alt="heli" />
              </a>
            </div>
            <div className="w-full ">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="w-full"
              >
                <Image src="/img/heli-img/heli2.jpeg" width={300} height={300} alt="heli" />
              </a>
            </div>
            <div className="w-full ">
              <a href="https://www.instagram.com/" target="_blank">
                <Image src="/img/heli-img/heli3.jpeg" width={300} height={300} alt="heli" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
