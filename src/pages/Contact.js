import Button from "../Components/Button";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import InputBox from "../Components/InputBox";
import style from "./Contact.module.css";
import whatsapp from "../assets/img/002-whatsapp-1.png";
import facebook from "../assets/img/004-facebook-1.png";
import instagram from "../assets/img/006-instagram-1.png";
import { useEffect,useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const email = "2mproducoes.ao@gmail.com"

  useEffect(() => {
    document.title = "2M Produções | Contacte Nos";
  }, []);

  return (
    <>
      <Header />
      <div className={style.container}>
        <h1>Entre em Contato</h1>
        <p>
          Estamos prontos para ajudar. Preencha o formulário abaixo ou utilize
          um de nossos canais de atendimento
        </p>
        <form
          className={style.form}
          onSubmit={(e) => {
            e.preventDefault();
            /*
              setTimeout(() => {
              alert("O seu Formulário foi enviado com Sucesso Sr. " + name);
	      setMessage("")
	      setName("")
	      setPhone("")
            }, 3 * 1000);

            */
          }}
        >
          <h3>Envie sua mensagem</h3>
          <InputBox
            name="name"
            value={name}
            setValue={setName}
            label="Nome"
            type="text"
            placeholder="Digite seu Nome"
          />
          <InputBox
            name="phone"
            value={phone}
            setValue={setPhone}
            label="Telefone"
            type="number"
            placeholder="Digite o seu Telefone"
            required
          />
          <label htmlFor="message">Mensagem</label>
          <br />
          <textarea
            id="message"
            className={style.textArea}
            minLength="1"
            name="message"
            value={message}
            onInput={(e) => setMessage(e.target.value)}
    
            required
          ></textarea>

          <Button text="enviar" href={`mailto:${email}?subject=${"Email de "+name+" Vinda Do Site"}&body=${message}`} />
        </form>

        <div className={style.secondDiv}>
          {/* Seccão dos contactos */}
          <section className={`${style.section} ${style.contacts}`}>
            <h3>Nossos Contatos</h3>
            <Link
              className={style.link}
              to="https://www.facebook.com/2mproducoes.ao"
              target="_blank"
            >
              <div>
                <img
                  src={facebook}
                  alt="icon do facebook"
                  onClick={() =>
                    navigate(
                      "https://www.facebook.com/2mproducoes.ao"
                    )
                  }
                />
                <span>
                  <h4>Facebook</h4>
                  <p>
                    {/* <a target="_blank" href="https://www.facebook.com/2mproducoes.ao"> */}
                    2m.produções
                    {/* </a> */}
                  </p>
                </span>
              </div>
            </Link>
            <Link
              className={style.link}
              to="https://www.instagram.com/2mproducoes.ao"
            >
              <div>
                <img
                  src={instagram}
                  alt="icon do instagram"
                  onClick={() =>
                    navigate(
                      "https://www.instagram.com/2mproducoes.ao"
                    )
                  }
                />
                <span>
                  <h4>Instagram</h4>
                  <p>
                    {/* <a target="_blank" href="https://www.instagram.com/2mproducoes.ao"> */}
                    2m.produções
                    {/* </a> */}
                  </p>
                </span>
              </div>
            </Link>
            <Link
              className={style.link}
              to="https://wa.me/244931075838"
              target="_blank"
            >
              <div>
                <img
                  src={whatsapp}
                  alt="icon do whatsapp"
                  onClick={() => navigate("https://wa.me/244931075838")}
                />
                <span>
                  <h4>Whatsapp</h4>
                  <p>
                    {/* <a target="_blank" href="https://wa.me/244931075838"> */}
                    931 075 838
                    {/* </a> */}
                  </p>
                </span>
              </div>
            </Link>
          </section>
          {/* Seccão do mapa*/}
          <section className={style.section}>
            <h3>
              Localize nos com o <strong>Google Maps</strong>
            </h3>
            <iframe
              title="Mapa para a 2M Produções"
              className={style.iframe}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424.262324224494!2d12.147336976075529!3d-15.19555705402014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ba3d9699ff4a87f%3A0x39fc0eaa455153d5!2zMk0gUHJvZHXDp8O1ZXM!5e1!3m2!1spt-PT!2sao!4v1765477204124!5m2!1spt-PT!2sao"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
