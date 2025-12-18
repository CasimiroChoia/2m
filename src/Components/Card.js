import style from "./Card.module.css";

export const Card = ({ image, desc, event, year, index, fundo }) => {
  return (
    <div
      //   key={index}
      className={style.container}
      style={{ backgroundImage: image }}
    >
      <img
        src={image}
        alt=""
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
      />
      <div
        className={`${style.info} ${fundo === "black" ? "white" : "black"}`}
        style={{ color: fundo === "black" ? "white" : "black" }}
      >
        <h3>{event}</h3>
        {/* <p>{desc}</p> */}
        <p className={style.year}>{year}</p>
      </div>
    </div>
  );
};
