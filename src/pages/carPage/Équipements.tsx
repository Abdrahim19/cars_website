const Equipements = () => {
    const carFeatures = [
        "Aide parking",
        "Aide parking avec caméra de recul",
        "Jantes alu",
        "Peinture métallisée",
        "Rétroviseurs dégivrants",
        "Rétroviseurs rabattables"
      ];
      const carSécurité = [
        "AFU",
        "Aide au démarrage en côte",
        "Airbags front. + lat.",
        "Airbags latéraux",
        "Airbags rideaux",
        "Projecteurs antibrouillard",
        "Avertisseur d'angle mort",
        "Contrôle de pression des pneus",
        "Détecteur de pluie",
        "ESP",
        "Fixations ISOFIX",
        "Phares av. de jour à LED",
        "Autre"
      ];
  return (
    <div>
        <h1 className="text-lg font-medium leading-5">Équipements & options</h1>
              <div className="grid grid-cols-[1fr_1fr] gap-6 mt-5">
        <section>
          <h1 className="text-base font-medium leading-5">Extérieur et Chassis</h1>
          <ul className="grid grid-cols-1 mt-2 gap-2">
            {carFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>
        <section>
          <h1 className="text-base font-medium leading-5">Sécurité</h1>
          <ul className="grid grid-cols-1 mt-2 gap-2">
            {carSécurité.map((Sécurité, index) => (
                <li key={index}>{Sécurité} </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Equipements