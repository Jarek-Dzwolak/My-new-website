import React from "react";
import css from "./Bio.module.css";
import Profilowe from "../../img/Profilowe1.jpg";

function Bio() {
  return (
    <div className={css.container} id="bio">
      <span className={css.separator}></span>
      <div className={css.box1}>
        <h2 className={css.tittle1}>O mnie</h2>
        <h2 className={css.tittle2}>
          Freelancer: Strony internetowe, Backend, Wdrażanie.
        </h2>
      </div>
      <div className={css.box2}>
        <img className={css.img} src={Profilowe} />
        <p className={css.text}>
          Jestem programistą oraz właścicielem między innymi sklepu
          internetowego. Moja pasja do programowania jest równie silna jak moje
          zaangażowanie w prowadzenie biznesu. Zrozumienie skuteczności SEO oraz
          znaczenia responsywności stron jest dla mnie kluczowe. Nieustannie
          doskonalę swoje umiejętności, aby dostarczać rozwiązania o najlepszej
          wydajności i funkcjonalności. Priorytetem dla mnie jest zapewnienie,
          aby każda współpraca zemną była pełna satysfakcji zarówno dla mnie,
          jak i dla klientów. Jestem otwarty na nowe wyzwania i gotowy pomóc w
          każdym projekcie, by osiągnąć wspólne cele.
        </p>
      </div>
    </div>
  );
}
export default Bio;
