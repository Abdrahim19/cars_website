import React from 'react';
import Linkwithicon from '../links/Linkwithicon';
import { AiFillAlert } from 'react-icons/ai';

interface BenefitItem {
  icon: React.ReactNode;
  text: string;
}

interface BenfitesProps {
  imageSrc: string;
  titel:string;
  benefits: BenefitItem[];
}

const Benfites: React.FC<BenfitesProps> = ({ imageSrc, benefits  , titel}) => {
  return (
    <section className="md:flex justify-around items-center">
      <div className="mb-4 md:mb-0">
        <img src={imageSrc} alt="" />
      </div>
      <div>
        <h2 className="text-2xl mb-4 font-semibold">{titel}</h2>
        <ul className="flex flex-col gap-4 justify-end">
          {benefits.map((benefit, index) => (
            <Linkwithicon key={index} icon={benefit.icon} text={benefit.text} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Benfites;