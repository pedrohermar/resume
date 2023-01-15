import React from "react";
import Avatar from "../../components/Avatar";
import ProgressBar from "../../components/ProgressBar";
import "./styles.scss";

const Resume = () => {
  return (
    <div className="resume">
      <Avatar />
      <h1>Silversito</h1>
      <h2>Videojugador de League of Legends</h2>
      <p>
        Mi campeón favorito, sin duda alguna Anivia, la criofenix. No tendrá
        mucho ataque, no tendrá mucha defensa... pero me encanta. Es muy difícil
        de controlar, sobre todo la Q, porque tienes que petarla y controlar la
        distancia muy bien para stunear.
      </p>
      <h3>SKILL CHAMPS</h3>
      <ProgressBar text="Riven" progress={99} />
      <ProgressBar text="Malphite" progress={70} />
      <ProgressBar text="Teemo" progress={80} />
      <ProgressBar text="Sona" progress={10} />
    </div>
  );
};

export default Resume;
