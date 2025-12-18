import style from "./Footer.module.css";
import Logo from "../assets/img/logo.png";

export default function Footer() {
  return (
    <>
      {/* <hr /> */}
      <footer className={style.container}>
        <section>
          <img
            src={Logo}
            style={{ height: "68px", width: "68px", borderRadius: "50%" }}
            alt="logo da empresa"
          />
        </section>
        
        <section className={style.contacts}>
          <h4>Contacto</h4>
          <ul type="none">
            <li>
              Instagram:{" "}
              <a href="https://www.instagram.com/2mproducoes.ao/">@2m.produções</a>
            </li>
            <li>
              Telefone: <a href="tel:+244923709909">(244) 923 709 909</a>
            </li>
            <li>
              Whatsapp:{" "}
              <a href="https://wa.me/244923709909">(244) 923 709 909</a>
            </li>
          </ul>
        </section>
      </footer>
    </>
  );
}
