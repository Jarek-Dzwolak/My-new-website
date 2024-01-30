import React from "react";
import css from "./Footer.module.css";
import Photo from "../../img/Garniutur.jpg";
import GitHub from "../../icon/GitHub.svg";
import Instagram from "../../icon/Instagram.svg";
import LinkedIn from "../../icon/Linkedin.svg";

function Footer() {
  return (
    <div className={css.container} id="contact">
      <span className={css.separator}></span>
      <div className={css.box1}>
        <h3 className={css.tittle1}>Kontakt</h3>
      </div>
      <div className={css.box2}>
        <img className={css.img} src={Photo} />
        <div className={css.box3}>
          <div>
            <h4 className={css.tittle2}>Email</h4>
            <a className={css.text} href="mailto:jaroslawdzwolak@gmail.com">
              jaroslawdzwolak@gmail.com
            </a>
          </div>
          <div>
            <h4 className={css.tittle2}>Telefon</h4>
            <a className={css.text} href="tel:+48509233128">
              +48509233128
            </a>
          </div>
          <div>
            <h4 className={css.tittle2}>Serwisy społecznościowe</h4>
            <div className={css.box4}>
              <a href="https://github.com/Jarek-Dzwolak">
                <img className={css.icon} src={GitHub} alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/jaros%C5%82aw-dzwolak-4392701a9/">
                <img className={css.icon} src={LinkedIn} alt="LinkedIN" />
              </a>
              <a href="https://www.instagram.com/jarek.dzwolak/">
                <img className={css.icon} src={Instagram} alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
