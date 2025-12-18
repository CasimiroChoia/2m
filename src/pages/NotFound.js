import { useNavigate } from "react-router-dom";
import style from "./NotFound.module.css";
import Button from "../Components/Button";
import { useEffect } from "react";

export default function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "2M Produções | Pagina Não Encontrado";
  }, []);

  return (
    <div className={style.container}>
      <h1>404</h1>
      <h2>Pagina Não Encontrada</h2>
      <p>clique no botão abaixo para ir a pagina principal</p>
      <Button
        text="Menu Principal"
        onClick={() => {
          navigate("/home", { relative: "route" });
        }}
      />
    </div>
  );
}
