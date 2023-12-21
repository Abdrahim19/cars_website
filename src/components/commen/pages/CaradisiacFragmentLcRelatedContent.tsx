import SectionTitle from '../Sectiontitel'
import CaraAvis_card from '../cards/CaraAvis_card'
import { BsInfoSquare } from "react-icons/bs";


const CaradisiacFragmentLcRelatedContent = () => {
  return (
    <div className='my-3'>
        <SectionTitle title={'A lire aussi sur NISSAN QASHQAI 3'} to='/'/>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2 gap-6`}>
          <CaraAvis_card titel={'VOS 7 AVIS NISSAN QASHQAI 3'} discrption={'Sécurité : 3/10 Les pneumatiques montés de série peinent à '} imgSrc={'https://images.caradisiac.com/logos/2/4/6/3/272463/S5-essai-nissan-qashqai-e-power-2022-l-originalite-paie-t-elle-197095.jpg'} icon={undefined} />
          <CaraAvis_card titel={'VOS 7 AVIS NISSAN QASHQAI 3'} discrption={'Sécurité : 3/10 Les pneumatiques montés de série peinent à '} imgSrc={''} icon={<BsInfoSquare size={40} />} />
          <CaraAvis_card titel={'VOS 7 AVIS NISSAN QASHQAI 3'} discrption={'Sécurité : 3/10 Les pneumatiques montés de série peinent à '} imgSrc={''} icon={<BsInfoSquare size={40} />} />
          <CaraAvis_card titel={'VOS 7 AVIS NISSAN QASHQAI 3'} discrption={'Sécurité : 3/10 Les pneumatiques montés de série peinent à '} imgSrc={'https://images.caradisiac.com/logos/2/4/6/3/272463/S5-essai-nissan-qashqai-e-power-2022-l-originalite-paie-t-elle-197095.jpg'} icon={undefined} />
          <CaraAvis_card titel={'VOS 7 AVIS NISSAN QASHQAI 3'} discrption={'Sécurité : 3/10 Les pneumatiques montés de série peinent à '} imgSrc={''} icon={<BsInfoSquare size={40} />} />
          <CaraAvis_card titel={'VOS 7 AVIS NISSAN QASHQAI 3'} discrption={'Sécurité : 3/10 Les pneumatiques montés de série peinent à '} imgSrc={''} icon={<BsInfoSquare size={40} />} />
        </div>
    </div>
  )
}

export default CaradisiacFragmentLcRelatedContent 