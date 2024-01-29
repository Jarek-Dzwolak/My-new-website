import React from "react";
import css from "./Skills.module.css";
import picture from "../../img/wall.jpg";

function Skills() {
  return (
    <div className={css.container} id="skills">
      <span className={css.separator}></span>
      <div className={css.box}>
        <div className={css.box1}>
          <h3 className={css.tittle1}>Technologie</h3>
          <ul className={css.list}>
            <li className={css.text}>Java Script</li>
            <li className={css.text}>React.js</li>
            <li className={css.text}>Node.js</li>
            <li className={css.text}>Figma</li>
            <li className={css.text}>Trelo</li>
            <li className={css.text}>AI</li>
            <li className={css.text}>Heroku</li>
            <li className={css.text}>GitHub</li>
            <li className={css.text}>Canva</li>
          </ul>
        </div>
        <div className={css.box1}>
          <h3 className={css.tittle1}>Umijętności miękkie</h3>
          <ul className={css.list}>
            <li className={css.text}>Zrozumiała komunikacja</li>
            <li className={css.text}>Szybkie przyswajanie wiedzy </li>
            <li className={css.text}>Świadomość celów biznesowych </li>
            <li className={css.text}>Aktywne słuchanie </li>
            <li className={css.text}>Angielski-B1</li>
          </ul>
        </div>
      </div>
      <img className={css.img} src={picture} />
    </div>
  );
}
export default Skills;
