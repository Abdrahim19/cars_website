import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

type props = {
date:string
title:string
description:string
imageUrl:string
Linkdir:string
}
const BlogPost = ({ date, title, description, imageUrl  , Linkdir}:props) => {
  return (
    <div className="relative">
      <div>
        <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">{date}</p>
        <div className="absolute bottom-0 left-0 p-6">
          <h2 className="text-xl font-semibold 5 text-white">{title}</h2>
          <p className="text-base leading-4 text-white mt-2">{description}</p>
          <Link to={Linkdir} className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
            <p className="pr-2 text-sm font-medium leading-none">Read More</p>
            <MdOutlineKeyboardArrowRight size={16} />
          </Link>
        </div>
      </div>
      <img src={imageUrl} className="w-full" alt="blog post" />
    </div>
  );
};

export default BlogPost