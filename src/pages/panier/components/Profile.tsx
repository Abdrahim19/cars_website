import Line from "../../../components/commen/Line"
import Link from "../../../components/commen/links/Link"
import Custom_Input from "../../../components/commen/ui/Custem_Input"
import Custom_button from "../../../components/commen/ui/Custom_button"
import Chosegander from "./Chosegander"

const Profile = () => {
    const options = [
        { value: "Ms", label: "Ms" },
        { value: "Mrs", label: "Mrs" },
    ]
  return (
    <section className="p-5">
        <h1>Profile</h1>
        <div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2 items-center gap-4"> 
            <Custom_Input name={""} type={"text"} label=" Nom :" />
            <Custom_Input name={""} type={"text"} label=" Prénom  :" />
        </div>
        <Line />
      <div className="grid-cols-8">
        <Custom_Input name={""} type={"text"} label="Téléphone :" />
      </div>

        <Line />
        <Custom_Input name={""} type={"text"} label="Email :" value={"essh4014@gmail.com"} />
        <p className="mt-2 leading-5 font-normal text-sm max-w-xl">Votre email vous sert de contact et d'identifant. 
            Si vous le changez, votre identifiant sera automatiquement mis à jour.</p>
        <Line />
<Chosegander data={options} />
        <Line />
        <div className={`text-center w-fit mx-auto`}>
        <p className="">Mot de passe</p>
        <Link link={"Modifier mon mot de passe"} to={""} />
        </div>
        <Line />
        <div className={`text-center w-fit mx-auto`}>
        <p>Supprimer mon compte</p>
        <Link link={"Supprimer"} to={""} />
        </div>
        <Line />
        <Custom_button type={"submit"}  isLoading={false}>
        Enregistrer les modifications
        </Custom_button>
        <p className="mt-6 text-xs">Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée par 
            la loi du 6 août 2004, vous bénéficiez d'un droit d'accès, de rectification,
             de modification, de suppression et d'opposition sur les données vous concernant. 
             Pour exercer ce droit, vous pouvez soit nous écrire à l'adresse électronique suivante :
             info-centrale@lacentrale.fr ou, soit adresser un courrier à La Centrale ®, 
            Service Consommateurs, 37-41, rue du Rocher - CS 40202, 75008 Paris</p>
    </section>
  )
}

export default Profile