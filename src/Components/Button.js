import { Link } from "react-router-dom";
import style from "./Button.module.css";

export default function Button({ text, onClick, href }) {
  return (
    <>
      {!href ? (
        <button className={style.button} onClick={(e) => onClick() || {}}>
          {text}
        </button>
      ) : (
        <Link className={style.LinkButton} to={href} preventScrollReset={true} >
            {text}
        </Link>
      )}
    </>
  );
}
