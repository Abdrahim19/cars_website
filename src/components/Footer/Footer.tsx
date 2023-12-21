import { Link } from "react-router-dom";
import List from "../commen/List";
import styles from "../../styles/styles";
import Custom_button from "../commen/ui/Custom_button";

const Footer = () => {
  return (
    <footer className={`mx-auto bg-lcui_primary100 p-3 mt-6`}>
      <section className={`${styles.footer_grid}`}>
      <List
        array={[
          'Qui sommes nous ?',
          'Nos offres demploi', 
          'Pub La Centrale ®',
          'Devenir annonceur pub',
          'Devenir partenaire pro'
        ]}
        titel={"A propos de la Centrale"}
      />
      <List
        array={[
          'Services',
          'Conseils',
          'Annuaire des professionnels'
        ]}
        titel={"Nos services"}
      />
      <List
        array={[
          'Rechercher et consulter les annonces',
          'Déposer et gérer mes annonces',
          'Contacter un vendeur',
          'Gérer mon compte'
        ]}
        titel={"FAQ"}
      />
      <List
        array={[
          'Conditions générales',
          'Mentions légales',
          'Information sur le classement',
          'Charte cookies',
          'Politique de confidentialité',
          'Charte rédactionnelle'
        ]}
        titel={"Informations légales"}
      />
      <List
        array={[
          'Caradisiac',
          'Caradisiac Forum Auto',
          'Promoneuve'
        ]}
        titel={"Sites du groupe"}
      />
        <div className="w-full px-4">
        <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Télécharger l'application</h2>
        <Link to={""}>
        <img src="/appli-android.png" alt="appli-android." className="mt-3" />
        </Link>
        <Link to={""}>
        <img src="/appli-ios.png" alt="appli-ios" className="mt-3" />
        </Link>
        </div>
      </section>
      <div className="my-4 w-fit mx-auto border border-b ">
      <Custom_button type={"submit"} isLoading={false}>
      Accès client pro
      </Custom_button>
      </div>
      <hr className="w-full h-[2px] bg-lcui_lightBlue my-4" />
      <div className="text-[16px] font-normal mb-4 gap-4 text-center">
        <p className="duration-200 font-semibold cursor-pointer hover:underline">Plan du site</p>
        <p className="mt-2">Pour les trajets courts, privilégiez la marche ou le vélo #SeDéplacerMoinsPolluer</p>
        <p className="mt-2">Copyright ® Groupe La Centrale - Tous droits réservés</p>
      </div>
    </footer>
  );
};

export default Footer;