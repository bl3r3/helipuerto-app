import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";
import Image from "next/image";
import Placeholder from "../public/placeholder.svg";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="w-full px-4 img-bg-main h-screen">
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <div className="container mx-auto px-4 h-full md:w-full">
            <div className="flex content-center items-center justify-center h-full flex-col">
              <h1 className="text-4xl">Titulo Principal</h1>
              <h2 className="bg-white text-black text-xl w-full text-center">
                SUBTITULO
              </h2>
              <div className="w-full flex flex-col md:flex-row md:items-center md:justify-center gap-2">
                <button className="bg-lime-400 text-black text-xl p-2 text-center mt-4 rounded-md">
                  Boton Uno
                </button>
                <button className="bg-transparent text-white text-xl p-2 text-center mt-4 rounded-md border-white border-2">
                  Boton Dos
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full px-4 py-8 flex flex-col gap-4 md:flex-row md:px-12 lg:px-24 text-content">
        <div className="w-full flex flex-col justify-center items-end bg-first-card border-2 rounded-md h-56 p-4 md:w-6/12 md:h-[270px]">
          <h3 className="text-xl text-title">Horario</h3>
          <p>Lun - Vie 08:00 am - 11:00 pm</p>
          <p>Lun - Vie 08:00 am - 11:00 pm</p>
          <p>Lun - Vie 08:00 am - 11:00 pm</p>
        </div>
        <div className="w-full flex flex-col justify-center items-start bg-second-card border-2 rounded-md h-56 p-4 md:w-6/12  md:h-[270px]">
          <h3 className="text-xl text-title">Horario</h3>
          <p>Lun - Vie 08:00 am - 11:00 pm</p>
          <p>Lun - Vie 08:00 am - 11:00 pm</p>
          <p>Lun - Vie 08:00 am - 11:00 pm</p>
        </div>
      </section>
      <section className="w-full px-4 py-8 flex flex-col items-center justify-center gap-2 bg-white h-fit text-black">
        <h3 className="text-2xl text-black text-center text-title">
          Sobre Nosotros
        </h3>
        <p className="text-xl text-content">Ven y diviertete con nosotros</p>
        <div className="flex flex-col md:flex-row md:flex-wrap">
          <div className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-4/12 ">
            <Image src={Placeholder} width={200} height={200} alt="heli" />
            <h4 className="text-lg text-title">Que es el Helipuerto?</h4>
            <p className="text-sm text-center text-content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Corporis, illum dolores veniam ex cumque soluta totam modi nam
              sunt praesentium omnis ipsa quam quidem unde tempora maiores
              temporibus voluptatibus consectetur.
            </p>
          </div>
          <div className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-4/12">
            <Image src={Placeholder} width={200} height={200} alt="heli" />
            <h4 className="text-lg text-title">Juega con nosotros</h4>
            <p className="text-sm text-center text-content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Corporis, illum dolores veniam ex cumque soluta totam modi nam
              sunt praesentium omnis ipsa quam quidem unde tempora maiores
              temporibus voluptatibus consectetur.
            </p>
          </div>
          <div className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-4/12">
            <Image src={Placeholder} width={200} height={200} alt="heli" />
            <h4 className="text-lg text-title">Como Agendar un Turno</h4>
            <p className="text-sm text-center text-content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Corporis, illum dolores veniam ex cumque soluta totam modi nam
              sunt praesentium omnis ipsa quam quidem unde tempora maiores
              temporibus voluptatibus consectetur.
            </p>
          </div>
          <div className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-4/12">
            <Image src={Placeholder} width={200} height={200} alt="heli" />
            <h4 className="text-lg text-title">Quieres ser VIP?</h4>
            <p className="text-sm text-center text-content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Corporis, illum dolores veniam ex cumque soluta totam modi nam
              sunt praesentium omnis ipsa quam quidem unde tempora maiores
              temporibus voluptatibus consectetur.
            </p>
          </div>
          <div className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-4/12">
            <Image src={Placeholder} width={200} height={200} alt="heli" />
            <h4 className="text-lg text-title">Fotos y Videos</h4>
            <p className="text-sm text-center text-content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Corporis, illum dolores veniam ex cumque soluta totam modi nam
              sunt praesentium omnis ipsa quam quidem unde tempora maiores
              temporibus voluptatibus consectetur.
            </p>
          </div>
          <div className="w-full flex flex-col p-4 gap-2 items-center justify-center md:w-4/12">
            <Image src={Placeholder} width={200} height={200} alt="heli" />
            <h4 className="text-lg text-title">Nuestros servicios</h4>
            <p className="text-sm text-center text-content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Corporis, illum dolores veniam ex cumque soluta totam modi nam
              sunt praesentium omnis ipsa quam quidem unde tempora maiores
              temporibus voluptatibus consectetur.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full px-4 py-8 flex flex-col items-center justify-center gap-2 h-fit">
        <h3 className="text-2xl text-center text-title">Nuestros Servicios</h3>
        <p className="text-content text-xl">
          Escoge el que mejor se adapte a ti
        </p>
        <div className="flex flex-col md:flex-row md:flex-wrap">
          <div className="w-full flex flex-col gap-2 items-center justify-center md:w-4/12 p-4">
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

          <div className="w-full flex flex-col gap-2 items-center justify-center md:w-4/12 p-4">
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

          <div className="w-full flex flex-col gap-2 items-center justify-center md:w-4/12 p-4">
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
        </div>
      </section>
      <section className="w-full px-4 img-bg-second h-[600px]">
        <div className="container mx-auto px-4 h-full md:w-full">
          <div className="flex content-center items-center justify-center h-full flex-col">
            <h1 className="text-4xl">Titulo Principal</h1>
            <h2 className="bg-white text-black text-xl w-full text-center">
              SUBTITULO
            </h2>
            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-center gap-2">
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
      <Footer />
    </>
  );
}
