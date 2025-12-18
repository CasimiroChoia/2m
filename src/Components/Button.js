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
        <Link to={href} preventScrollReset={true} >
          <button className={style.button} onClick={(e) =>{}}>
            {text}
          </button>
        </Link>
      )}
    </>
  );
}
