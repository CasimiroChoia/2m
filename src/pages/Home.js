import Header from "../Components/Header";
import Button from "../Components/Button";
import style from "./Home.module.css";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
// import Image from "../assets/img/aaa.png";
import Impressora from "../assets/img/impressora.jpg";
import refresh from "../assets/img/003-refresh.png";
import checklist from "../assets/img/004-checklist.png";
import price from "../assets/img/002-best-price.png";
import banner from "../assets/img/banners/banner1.jpg";
import visitCard from "../assets/img/cards/003-visitCard.jpg";
import { useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "2M Produções | Principal";
  }, []);

  return (
    <>
      <Header />
      <div className={style.container}>
        <div className={style.banner}>
          <span className={style.back}>
            <h1>2M Produções</h1>
            <p>Soluções gráficas inovadoras com agilidade que você precisa</p>
            <Button
              text="conheça nossos serviços"
              onClick={() =>
                navigate("/services", { relative: true, viewTransition: true })
              }
            />
          </span>
        </div>
        {/* Primeira Secção */}
        <div>
          <h2>Porquê escolher a 2M Produções</h2>
          <p>
            Oferecemos a quantidade perfeita de qualidade, velocidade e preço
            para garantir que seus projectos gráficos se destaquem
          </p>
          <div className={`${style.iconCard} ${style.card}`}>
            <img src={refresh} alt="imagem" />
            <h3>Entrega Rápida</h3>
            <p>
              Receba seus materiais impressos com agilidade, sem comprometer a
              qualidade final
            </p>
          </div>
          <div className={`${style.iconCard} ${style.card}`}>
            <img src={price} alt="imagem" />
            <h3>Melhor Preço Garantido</h3>
            <p>
              Nossos preços competem o melhor custo benefico para o seu projecto
            </p>
          </div>
          <div className={`${style.iconCard} ${style.card}`}>
            <img src={checklist} alt="imagem" />
            <h3>Impressão Profissional</h3>
            <p>
              Contamos com equipamentos de ponta e uma equipe experiente para
              resultados impecáveis
            </p>
          </div>
        </div>

        {/* Segunda Secção */}
        <div>
          <h2>Nossos Serviços Principais</h2>
          <div className={`${style.serviceCard} ${style.card}`}>
            <img src={visitCard} alt="imagem" />
            <h3>Cartões de visita</h3>
            <p>
              Crie uma primeira impressão memoravel com cartões de alta
              qualidade para a sua empresa
            </p>
          </div>
          <div className={`${style.serviceCard} ${style.card}`}>
            <img src={banner} alt="imagem" />
            <h3>Banners</h3>
            <p>
              Comunique sua mensagem em grande formato com banners vibrantes
            </p>
          </div>
          <div className={`${style.serviceCard} ${style.card}`}>
            <img src={Impressora} alt="imagem" />
            <h3>Impressão Digital</h3>
            <p>
              Receba seus materiais impressos com agilidade, sem comprometer a
              qualidade final
            </p>
          </div>
        </div>

        {/* Terceira Secção */}
        <div
          style={{
            backgroundColor: "rgba(0,0,255,0)",
            padding: "15px",
            borderRadius: "20px",
            margin: "auto",
            marginBottom: "2m",
          }}
        >
          <h2>Pronto para dar vida as suas ideias?</h2>
          <p>
            Nossa equipe está pronto para ajudar você a escolher melhor a
            solução para o seu projecto. Solicite um orçamento sem compromisso e
            veja como podemos impulsionar sua marca
          </p>

          <Button
            text="Tabela de Preços"
            // href="/2m/budge#container"
            onClick={() =>
              navigate("/2m/budge#container", {
                flushSync: true,
                preventScrollReset: false,
                viewTransition: false,
              })
            }
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
