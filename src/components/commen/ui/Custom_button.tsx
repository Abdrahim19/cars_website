'use client'

import React from "react"
import { useNavigate } from "react-router-dom"
import styles from "../../../styles/styles"

type buttonType =  {
    type: 'submit' | 'button'
    children: string 
    isLoading: boolean
    onClick?: () => void
    isOutline?:boolean  
    beforeicon?:React.ReactNode
    size?:'normal'|'large'
    to?:string
  }

const Custom_button = ({type , children = 'empty_img' , isLoading = false , 
onClick , isOutline = false , size ='normal' , to , beforeicon}:buttonType) => {
  const Navigate  = useNavigate()

  const handelclick = () => {
    if (onClick) {
      onClick();
    }
    if (to) {
      Navigate(to);
    }
  };

  return (
    <button onClick={handelclick} type={type} className={`w-full ${styles.flexCenter} gap-3 capitalize bg-blue-600 text-white
    hover:bg-blue-600 focus:outline-none leading-none   rounded-[21px]  focus:bg-blue_600
     focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-colors duration-300 font-medium
     ${size === 'large' ? 'px-16 py-2' : 'py-3 px-[26px]'}
      ${isOutline && '!bg-transparent border border-solid border-blue_600 !text-lcui_primary'}`}
     disabled={isLoading ? true : false}>
      {beforeicon && <span className="text-lg">{beforeicon}</span>}
      {children}</button>
  )
}

export default Custom_button