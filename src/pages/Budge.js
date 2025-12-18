import { useEffect } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import style from "./Budge.module.css";

export default function Budge() {
  useEffect(() => {
    window.scrollTo({top:0,behavior:"smooth"})
    document.title = "2M Produções | Escolha o seu Orçamento";
  }, []);

  const installTable = [
    {
      id: 1,
      produto: "Sistema Operacional",
      info: "Inclui Drivers e Software Base",
      preco: "13.680",
    },
    {
      id: 2,
      produto: "Software De Apoio",
      info: "Ex.: Enciclopédia, VLC, Chrome, etc",
      preco: "5.700",
    },
    {
      id: 3,
      produto: "Softwares Aplicacionais",
      info: "Ex.: Corel Draw e Photoshop",
      preco: "22.800",
    },
    {
      id: 4,
      produto: "Antivírus Licença 1 Ano",
      info: "Ex.: Kasperky 2026 - 1PC",
      preco: "11.400",
    },
    {
      id: 5,
      produto: "Assistência Técnica",
      info: "Telemóvel, Computador, etc",
      preco: "11.400",
    },
    {
      id: 6,
      produto: "Instalação de Apps",
      info: "IOS E Android",
      preco: "5.700",
    },
    {
      id: 7,
      produto: "Instalação de internet via Satelite",
      info: "Antena + Modem + Router + Plano Mensal",
      preco: "1.539.000",
    },
  ];

  const designTable = [
    {
      id: 1,
      produto: "Edição",
      info: "Cartaz, Convite, Dístico",
      preco: "9.120",
    },
    {
      id: 2,
      produto: "Logotipo",
      info: "",
      preco: "28.500",
    },
    {
      id: 3,
      produto: "Capas",
      info: "CD, Livros e Outros",
      preco: "79.800",
    },
    {
      id: 4,
      produto: "Cartões de Visita, Diplomas e Outros",
      info: "",
      preco: "5.700",
    },
  ];

  const printTable = [
    {
      id: 3,
      produto: "Desdobrável Díptico/Tríptico",
      info: "",
      preco: "1.596",
    },
    {
      id: 4,
      produto: "Fitas Para Pescoço",
      info: "",
      preco: "1.140",
    },
    {
      id: 4,
      produto: "Placa PVC M²",
      info: "",
      preco: "28.500",
    },
    {
      id: 4,
      produto: "Placard Luminoso M²",
      info: "",
      preco: "228.000",
    },
    {
      id: 4,
      produto: "Matriclua / Placa Sintética M²",
      info: "30x10cm",
      preco: "3.420",
    },
    {
      id: 4,
      produto: "Roll Up",
      info: "",
      preco: "54.720",
    },
    {
      id: 4,
      produto: "Bandeira M²",
      info: "",
      preco: "34.200",
    },
    {
      id: 4,
      produto: "Topper",
      info: "Edicão e Impressão",
      preco: "798",
    },
    {
      id: 4,
      produto: "Carimbo",
      info: "",
      preco: "17.100",
    },
    // complexos
    {
      id: 1,
      produto: "Passes PVC",
      info: "",
      folhas: [
        {
          nome: "Frente",
          preco: "912",
        },
        {
          nome: "Frente c/ Verso",
          preco: "1.724",
        },
        {
          
          preco: "1.724",
        },
      ],
    },
    {
      id: 1,
      produto: "Pulseiras de Papel",
      info: "",
      folhas: [
        {
          nome: "NP",
          preco: "114",
        },
        {
          nome: "P",
          preco: "171",
        },
      ],
    },
    {
      id: 1,
      produto: "Pulseiras de Papel",
      info: "",
      folhas: [
        {
          nome: "NP",
          preco: "114",
        },
        {
          nome: "P",
          preco: "171",
        },
      ],
    },
    {
      id: 1,
      produto: "Cartolina",
      info: "",
      folhas: [
        {
          nome: "A4",
          preco: "627",
        },
        {
          nome: "A3",
          preco: "798",
        },
      ],
    },
    {
      id: 2,
      produto: "Cartaz",
      info: "",
      folhas: [
        {
          nome: "A4",
          preco: "342",
        },
        {
          nome: "A3",
          preco: "513",
        },
        {
          nome: "A2",
          preco: "2.050",
        },
        {
          nome: "A1",
          preco: "3.152",
        },
        {
          nome: "A4",
          preco: "6.850",
        },
      ],
    },
    {
      id: 4,
      produto: "Envelope Timbrado",
      info: "",
      folhas: [
        {
          nome: "DL",
          preco: "342",
        },
        {
          nome: "A5",
          preco: "570",
        },
        {
          nome: "A4",
          preco: "798",
        },
        {
          nome: "A3",
          preco: "1.192",
        },
      ],
    },
    {
      id: 4,
      produto: "Convite",
      info: "",
      folhas: [
        {
          nome: "Para Festa",
          preco: "570",
        },
        {
          nome: "Para Casamento",
          preco: "1.824",
        },
        {
          nome: "A4",
          preco: "798",
        },
        {
          nome: "A3",
          preco: "1.192",
        },
      ],
    },
    {
      id: 4,
      produto: "Cartão de Visita",
      info: "",
      folhas: [
        {
          nome: "F",
          preco: "171",
        },
        {
          nome: "F/V",
          preco: "342",
        },
        {
          nome: "F/V",
          preco: "456",
        },
      ],
    },
    {
      id: 4,
      produto: "Pulseiras de Tecido",
      info: "",
      folhas: [
        {
          nome: "T1",
          preco: "285",
        },
        {
          nome: "T2",
          preco: "342",
        },
        {
          nome: "CC",
          preco: "798",
        },
      ],
    },
    {
      produto: "Lona M²",
      id: 4,
      info: "",
      folhas: [
        {
          nome: "Glossy",
          preco: "9.120",
        },
        {
          nome: "Mate",
          preco: "10.260",
        },
        {
          nome: "Perfurado",
          preco: "13.680",
        },
      ],
    },
    {
      produto: "Vinil Autocolante M²",
      id: 4,
      info: "",
      folhas: [
        {
          nome: "Branco",
          preco: "10.830",
        },
        {
          nome: "Recorte",
          preco: "13.680",
        },
        {
          nome: "Perfurado",
          preco: "17.100",
        },
      ],
    },
  ];

  console.table(Object.keys(printTable[0]));
  console.table(designTable);
  console.table(installTable);

  return (
    <div>
      <Header />
      <div id="container" className={style.container}>
        <h1>Nossos de Preços</h1>

        {/* Tabela dos preços de instalação */}
        <section>
          <table>
            <tbody>
              <tr>
                <td
                  className={style.vertical}
                  rowSpan={installTable.length + 1}
                >
                  Instalação
                </td>
              </tr>
              {installTable.map((product) => {
                return (
                  <tr key={product.produto}>
                    <td>
                      {product.produto}{" "}
                      <span className={style.small}>{product.info}</span>
                    </td>
                    <td>
                      {product.preco}
                      <span className={`${style.small} ${style.symbol}`}>
                        {" "}
                        kzs
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>

        {/* Tabela dos preços de Design */}
        <section>
          <table>
            <tbody>
              <tr>
                <td className={style.vertical} rowSpan={designTable.length + 1}>
                  Design
                </td>
              </tr>
              {designTable.map((product) => {
                return (
                  <tr key={product.produto}>
                    <td>
                      {product.produto}{" "}
                      {product.info && (
                        <span className={style.small}>{product.info}</span>
                      )}
                    </td>
                    <td>
                      {product.preco}
                      <span className={`${style.small} ${style.symbol}`}>
                        {" "}
                        kzs
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>

        {/* Tabela dos preços de Impressão */}
        <section>
          <table>
            <tbody>
              <tr>
                <td className={style.vertical} rowSpan={printTable.length + 1}>
                  Impressão
                </td>
              </tr>
              {printTable.map((product) => {
                return (
                  <>
                    {product.preco ? (
                      <tr>
                        <td>
                          {product.produto}{" "}
                          {product.info && (
                            <span className={style.small}>{product.info}</span>
                          )}
                        </td>
                        <td colSpan={6}>
                          {product.preco}{" "}
                          <span className={`${style.small} ${style.symbol}`}>
                            kzs
                          </span>
                        </td>
                      </tr>
                    ) : (
                      <tr>
                        <td>{product.produto}</td>
                        {product.folhas.map((folha, index) => {
                          return (
                            <td key={index} className={style.multipla}>
                              <span className={style.nome}>{folha.nome}</span>
                              {"  "}
                              <span>{folha.preco} </span>
                              <span
                                className={`${style.small} ${style.symbol}`}
                              >
                                kzs
                              </span>
                            </td>
                          );
                        })}
                      </tr>
                    )}
                  </>
                );
                // return (
                //   <tr key={product.produto}>
                //     <td>
                //       {product.produto}{" "}
                //       <span className={style.small}>{product.info}</span>
                //     </td>
                //     {product.preco ? (
                //       <td>{product.preco}</td>
                //     ) : (
                //       product.folhas.map((folha, index) => (
                //         <td className={style.mult} key={index}>{folha.nome}</td>
                //       ))
                //     )}
                //   </tr>
                // );
              })}
            </tbody>
          </table>
        </section>
      </div>
      <Footer />
    </div>
  );
}
