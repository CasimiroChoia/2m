import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import style from "./Works.module.css";
import { Card } from "../Components/Card";

export default function Works() {
  const [works] = useState([
    {
      event: "Grande Show de Gerilson Israel",
      thumb_url: require("../assets/img/designs feitos/hogemonia 03-08-24.jpg"),
      description: "descri",
      year: "2024",
      fundo: "black",
    },
    {
      event: "Premios Tundavala",
      thumb_url: require("../assets/img/designs feitos/incr aberta 30-08-25.jpg"),
      description: "descri",
      year: "2025",
      fundo: "black",
    },
    {
      event: "Venda de ingressos",
      thumb_url: require("../assets/img/designs feitos/paulo flores venda de ingressos 07-07-24.jpg"),
      description: "descri",
      year: "2025",
      fundo: "white",
    },
    {
      event: "Maratona",
      thumb_url: require("../assets/img/designs feitos/pro2da maratona namibe 27-07-25.jpg"),
      description: "descri",
      year: "2025",
      fundo: "black",
    },
    {
      event: "Reveillon Das Tintas",
      thumb_url: require("../assets/img/designs feitos/capa reveillon das tintas gold edition.jpg"),
      description: "descri",
      year: "2025",
      fundo: "black",
    },
    {
      event: "Reveillon Das Tintas",
      thumb_url: require("../assets/img/designs feitos/reveillon das tintas black Spigo.jpg"),
      description: "descri",
      year: "2025",
      fundo: "white",
    },
    {
      event: "Reveillon Das Tintas com DJ Talson Mix",
      thumb_url: require("../assets/img/designs feitos/reveillon das tintas.jpg"),
      description: "descri",
      year: "2025",
      fundo: "white",
    },
    {
      event: "Reveillon das Tintas 2025",
      thumb_url: require("../assets/img/designs feitos/reveillon das tintas 2023.jpg"),
      description: "descri",
      year: "2025",
      fundo: "black",
    },
    {
      event: "Reveillon das Tintas 2025",
      thumb_url: require("../assets/img/designs feitos/tour paulo flores em Angola 07-07-24.jpg"),
      description: "descri",
      year: "2025",
      fundo: "white",
    },
  ]);
  useEffect(() => {
    document.title = "2M Produções | Nosso Trabalho";
  }, []);

  return (
    <div>
      <Header />
      <div className={style.container}>
        <h1>Veje nossos trabalhos recentes</h1>
        <div className={style.works}>
          {works.toReversed().map((work) => {
            return (
              <Card
                // index={index}
                desc={work.description}
                image={work.thumb_url}
                event={work.event}
                fundo={work.fundo}
                year={work.year}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
