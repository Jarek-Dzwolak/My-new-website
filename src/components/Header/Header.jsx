// Header.js

import React from "react";
import computer from "../../img/computer.jpg";
import css from "./Header.module.css";

function Header({ scrollTo }) {
  return (
    <div>
      <div className={css.box1}>
        <div className={css.boxtittle}>
          <div className={css.content}>
            <p className={css.uppertittle}>CV&Portfolio</p>
            <h1 className={css.tittle}>Jarosław Dzwolak</h1>
            <div className={css.boxtittle2}>
              <p className={css.undertittle} onClick={() => scrollTo("bio")}>
                O mnie
              </p>
              <p className={css.undertittle} onClick={() => scrollTo("skills")}>
                Umiejętności
              </p>
              <p
                className={css.undertittle}
                onClick={() => scrollTo("projects")}>
                Projekty
              </p>
              <p
                className={css.undertittle}
                onClick={() => scrollTo("contact")}>
                Kontakt
              </p>
            </div>
          </div>
        </div>
        <img className={css.computer} src={computer} />
      </div>
    </div>
  );
}

export default Header;
