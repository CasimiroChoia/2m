import style from "./InputBox.module.css";
export default function InputBox({ name, label, type, placeholder, ...props }) {
  return (
    <div className={style.div}>
      <label htmlFor={name}>{label || "Label Vazia"}</label>
      <br />
      <input
        id={name}
        name={name}
        minLength="1"
        maxLength={type === "number" ? "9" : "100"}
        type={type || "text"}
        placeholder={placeholder || ""}
        required
      />
    </div>
  );
}
