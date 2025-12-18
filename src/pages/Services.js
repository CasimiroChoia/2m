import Header from "../Components/Header";
// import Button from "../Components/Button";
import style from "./Services.module.css";
import Footer from "../Components/Footer";
import {
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  visitCard1,
  visitCard2,
  visitCard3,
  visitCard4,
  visitCard5,
  visitCard6,
  roll1,
  roll2,
  roll3,
  roll4,
  roll5,
  roll6,
} from "../Components/Constants";
import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Image from "../assets/img/aaa.png";

const Cards = [
  {
    id: 1,
    image: visitCard1 || "logo192.png",
    title: "cartão de visita",
    by: "casimiro",
    description: "descricao do design",
  },
  {
    id: 2,
    image: visitCard2 || "logo192.png",
    title: "cartão de visita",
    by: "casimiro",
    description: "descricao do design",
  },
  {
    id: 3,
    image: visitCard3 || "logo192.png",
    title: "cartão de visita",
    by: "casimiro",
    description: "descricao do design",
  },
  {
    id: 4,
    image: visitCard4 || "logo192.png",
    title: "cartão de visita",
    by: "casimiro",
    description: "descricao do design",
  },
  {
    id: 5,
    image: visitCard5 || "logo192.png",
    title: "cartão de visita",
    by: "casimiro",
    description: "descricao do design",
  },
  {
    id: 6,
    image: visitCard6 || "logo192.png",
    title: "cartão de visita",
    by: "casimiro",
    description: "descricao do design",
  },
];
const Banners = [
  {
    id: 1,
    image: banner1 || "logo192.png",
    title: "Banner",
    by: "casimiro",
    description: "descricao do design",
  },
  {
    id: 2,
    image: banner2 || "logo192.png",
    title: "Banner",
    by: "casimiro",
    description: "descricao do design",
  },
  {
    id: 3,
    image: banner3 || "logo192.png",
    title: "Banner",
    by: "casimiro",
    description: "descricao do design",
  },
  {
    id: 4,
    image: banner4 || "logo192.png",
    title: "Banner",
    by: "casimiro",
    description: "descricao do design",
  },
  {
    id: 5,
    image: banner5 || "logo192.png",
    title: "Banner",
    by: "casimiro",
    description: "descricao do design",
  },
  {
    id: 6,
    image: banner6 || "logo192.png",
    title: "Banner",
    by: "casimiro",
    description: "descricao do design",
  },
];
const rolls = [
  {
    id: 1,
    image: roll1 || "logo192.png",
    title: "Banner",
    by: "casimiro",
    description: "descricao do design",
  },
  {
    id: 2,
    image: roll2 || "logo192.png",
    title: "Banner",
    by: "casimiro",
    description: "descricao do design",
  },
  {
    id: 3,
    image: roll3 || "logo192.png",
    title: "Banner",
    by: "casimiro",
    description: "descricao do design",
  },
  {
    id: 4,
    image: roll4 || "logo192.png",
    title: "Banner",
    by: "casimiro",
    description: "descricao do design",
  },
  {
    id: 5,
    image: roll5 || "logo192.png",
    title: "Banner",
    by: "casimiro",
    description: "descricao do design",
  },
  {
    id: 6,
    image: roll6 || "logo192.png",
    title: "Banner",
    by: "casimiro",
    description: "descricao do design",
  },
];

export default function Services() {
  //   const navigate = useNavigate();
  useEffect(() => {
    document.title = "2M Produções | Serviços";
  }, []);
  return (
    <>
      <Header />
      <div className={style.container}>
        <h1>Nossos Serviços de impressão</h1>

        <p>
          Oferecemos uma variedade de soluções de impressão para atender a todas
          as suas necessidades, com a máxima qualidade e profissionalismo.
        </p>

        <section className={style.section}>
          <h2>Cartões de visita</h2>
          <div className={style.mockups}>
            {Cards.map((mockup) => {
              return (
                <div key={Math.random()} className={style.mock}>
                  <figure>
                    <img src={mockup.image} alt="aaa" />
                  </figure>
                  {/* <h3>{mockup.title}</h3> */}
                  {/* <p>{mockup.description}</p> */}
                </div>
              );
            })}
          </div>
        </section>
        <section className={style.section}>
          <h2>Banners</h2>
          <div className={style.mockups}>
            {Banners.map((mockup) => {
              return (
                <div key={Math.random()} className={style.mock}>
                  <figure>
                    <img src={mockup.image} alt="aaa" />
                  </figure>
                  {/* <h3>{mockup.title}</h3> */}
                  {/* <p>{mockup.description}</p> */}
                </div>
              );
            })}
          </div>
        </section>
        <section className={style.section}>
          <h2>Roll Up</h2>
          <div className={style.mockups}>
            {rolls.map((mockup) => {
              return (
                <div key={Math.random()} className={style.mock}>
                  <figure>
                    <img src={mockup.image} alt="aaa" />
                  </figure>
                  {/* <h3>{mockup.title}</h3> */}
                  {/* <p>{mockup.description}</p> */}
                </div>
              );
            })}
          </div>
        </section>

        {/* <div className={style.banner}>
          <h1>A Nossa Meta é dar vida as suas ideias</h1>
          <p>Conheça a historia da 2M Produções</p>
        </div>
        <div>
          <h2>A base da nossa excelência</h2>
          <p>
            Comprometemo-nos com inovação, precisão e a satisfação total dos
            nossos Clientes.
            <br />
            Estes são os pilares que sustentam cada projecto que realizamos
          </p>
          <div></div>
        </div> */}
      </div>
      <Footer />
    </>
  );
}
