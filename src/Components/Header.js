import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../assets/img/logo.png";
import { useState, useRef } from "react";

export default function Header(props) {
  const [isHide, setIsHide] = useState(true);
  const [count, setCount] = useState(1);
  const navRef = useRef();
  const navigate = useNavigate();
  const goToPanel = () => {
    setCount((prev) => prev + 1);
    if (count >= 5) {
      navigate("/panel", { viewTransition: true });
    }
  };
  return (
    <header
      className={`${styles.header} ${isHide === false && "isNavBarOpen"}`}
      id="header"
    >
      <span>
        <img
          src={Logo}
          style={{ height: "68px", width: "68px", borderRadius: "50%" }}
          alt="2M Logo"
          onClick={() => goToPanel()}
        />
      </span>
      <nav
        ref={navRef}
        className={`${styles.navbar}`}
        style={{ left: isHide ? -100 + "dvh" : 0 }}
      >
        <NavLink
          to="/2m/home"
          className={({ isActive }) =>
            isActive ? `${styles.isActive} ${styles.link}` : styles.link
          }
        >
          Casa
        </NavLink>
        <NavLink
          to="/2m/services"
          className={({ isActive }) =>
            isActive ? `${styles.isActive} ${styles.link}` : styles.link
          }
        >
          Servicos
        </NavLink>
        <NavLink
          to="/2m/works"
          className={({ isActive }) =>
            isActive ? `${styles.isActive} ${styles.link}` : styles.link
          }
        >
          Nosso Trabalho
        </NavLink>
        <NavLink
          to="/2m/contact"
          className={({ isActive }) =>
            isActive ? `${styles.isActive} ${styles.link}` : styles.link
          }
        >
          Contacto
        </NavLink>
        <NavLink
          to="/2m/budge"
          className={({ isActive }) =>
            isActive
              ? `${styles.isActive} ${styles.link} ${styles.button}`
              : `${styles.link} ${styles.button}`
          }
        >
          Tabelas de Preços
        </NavLink>
      </nav>
      <button
        className={`${styles.hamb} ${
          isHide ? styles.animated : styles.animated2
        }`}
        style={{
          position: "fixed",
          right: 10,
          background: isHide
            ? "logo192.png"
            : require("../assets/img/icon/002-arrow.png"),
        }}
        onClick={() => setIsHide((prevState) => !prevState)}
      >
        <img
          alt="menu hamburguer"
          src={
            isHide
              ? require("../assets/img/icon/001-menu.png")
              : require("../assets/img/icon/002-arrow.png")
          }
        />
      </button>
    </header>
  );
}
