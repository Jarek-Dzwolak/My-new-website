import React from "react";
import computer from "../../img/computer.jpg";
import css from "./Header.module.css";

function Header() {
  return (
    <div>
      <div className={css.box1}>
        <div className={css.boxtittle}>
          <div className={css.content}>
            <p className={css.uppertittle}>CV&Portfolio</p>
            <h1 className={css.tittle}>Jarosław Dzwolak</h1>
            <div className={css.boxtittle2}>
              <p className={css.undertittle}>Frontend Fullstack Developer</p>
              <p className={css.undertittle}>Contact</p>
            </div>
          </div>
        </div>
        <img className={css.computer} src={computer} />
      </div>
    </div>
  );
}

export default Header;
