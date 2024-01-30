import React from "react";
import css from "./Projects.module.css";
import Mobile from "../../img/FoodApp-Phone.png";
import Desktop from "../../img/FoodApp-Desktop.png";
import Tablet from "../../img/FoodApp-Tablet.png";
import Breakfast from "../../img/FoodApp-Breakfast.png";
import Lamb from "../../img/FoodApp-Lamb.png";
import Salomon from "../../img/FoodApp-Salomon.png";
import Egg from "../../img/FoodApp-Search-egg.png";
import Egg1 from "../../img/FoodApp-Search-egg1.png";
import Potato from "../../img/FoodApp-Search-potato.png";
import Potato1 from "../../img/FoodApp-Search-potato1.png";

function Projects() {
  return (
    <div className={css.container} id="projects">
      <span className={css.separator}></span>
      <div className={css.box1}>
        <h3 className={css.tittle1}>Rezponsywność strony</h3>
        <p className={css.text}>
          Dbałem o responsywność strony na trzech różnych szerokościach ekranu:
          telefonu, tabletu i ekranu monitora komputera. Dzięki temu, strona
          wyświetla się optymalnie i zachowuje swój układ oraz funkcjonalność
          niezależnie od urządzenia, na którym jest przeglądana.
        </p>
        <div className={css.box2}>
          <img className={css.img_mobile} src={Mobile} />
          <div className={css.box_desktop}>
            <img className={css.img_tablet} src={Tablet} />
          </div>
          <div className={css.img_tablet}>
            <img className={css.img_desktop} src={Desktop} />
          </div>
        </div>
      </div>
      <div>
        <h3 className={css.tittle2}>Komunikacja z bazą danych</h3>
        <p className={css.text2}>
          Podczas pracy nad projektem, skonstruowałem serwer backendowy, który
          odpowiada za zaciąganie danych dotyczących różnych potraw.
          Wykorzystując technologię MongoDB, umożliwiłem dostęp do bazy danych,
          z której pobieram informacje o składnikach, zdjęciach oraz sposobie
          przygotowania potraw. Dzięki tej funkcjonalności, aplikacja może
          dynamicznie wyświetlać potrzebne informacje użytkownikom, umożliwiając
          im eksplorację różnorodnych dań. Wdrożenie MongoDB pozwoliło na
          efektywne zarządzanie danymi, zapewniając skalowalność i wydajność w
          obsłudze zapytań serwera.
        </p>
      </div>
      <div className={css.box_img}>
        <img className={css.img_meals} src={Breakfast} />
        <img className={css.img_meals} src={Salomon} />
        <img className={css.img_meals} src={Lamb} />
      </div>
      <div>
        <h3 className={css.tittle2}>Wyszukiwarka</h3>
        <p className={css.text2}>
          W trakcie rozwoju projektu, w moim kodzie serwera opracowałem również
          wyszukiwarkę produktów, która umożliwia sortowanie i wyświetlanie
          produktów na stronie frontowej. Ta funkcjonalność pozwala użytkownikom
          przeszukiwać przepisy , zarówno po nazwie, jak i po produkcie
          występującym w danym przepisie. Dzięki temu użytkownicy mogą łatwo
          znaleźć potrawy, które mogą przygotować, korzystając z dostępnych
          składników. Opracowanie tej wyszukiwarki było elementem, który
          wprowadził dodatkową wygodę i funkcjonalność do aplikacji,
          umożliwiając użytkownikom łatwe przeglądanie i wybór interesujących
          ich przepisów.
        </p>
      </div>
      <div className={css.box_img}>
        <img className={css.img_search} src={Egg} />
        <img className={css.img_search} src={Egg1} />
        <img className={css.img_search} src={Potato} />
        <img className={css.img_search} src={Potato1} />
      </div>
    </div>
  );
}
export default Projects;
