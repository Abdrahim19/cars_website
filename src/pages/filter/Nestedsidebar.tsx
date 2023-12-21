import ConsommationNestedsidebar from "./components/ConsommationNestedsidebar";
import CouleursNestedlink from "./components/CouleursNestedlink";
import DimensionsNestedsidebarlink from "./components/DimensionsNestedsidebarlink";
import FeaturesDrowdown from "./components/FeaturesDrowdown";
import HistoriqueNestedsidebar from "./components/HistoriqueNestedsidebar";
import LocalisationNestedsidelink from "./components/LocalisationNestedsidelink";
import Marques_ModèlesDrowdown from "./components/Marques_ModèlesDrowdown";
import PerformancesNestedsidebar from "./components/PerformancesNestedsidebar";
import Places_PortesNestedsidebar from "./components/Places_PortesNestedsidebar";
import PrixesDrowdown from "./components/PrixesDrowdown";

const Nestedsidebar = ({selectedfilter}:{selectedfilter:string}) => {
    switch (selectedfilter) {
        case 'Marques/Modèles':
        false
        break;
        case 'Brands/Models':
        return <Marques_ModèlesDrowdown />
        case 'Features':
        return <FeaturesDrowdown />
        case 'Prix':
        return <PrixesDrowdown />
        case 'Localisation des véhiculesn':
        return <LocalisationNestedsidelink />
        case 'Couleurs':
        return <CouleursNestedlink />
        case 'Performances':
        return <PerformancesNestedsidebar />
        case 'Consommation':
        return <ConsommationNestedsidebar />
        case 'Historique':
        return <HistoriqueNestedsidebar />
        case 'Places & Portes':
        return <Places_PortesNestedsidebar />
        case 'Dimensions':
        return <DimensionsNestedsidebarlink />
        default:
        break;
    }
}

export default Nestedsidebar