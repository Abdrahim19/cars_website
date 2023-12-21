import React, { useState } from 'react'

type CheckboxProps = {
    title: string;
    checkboxs: string[];
  }
const Ckeckbox:React.FC<CheckboxProps> = ({checkboxs  , title}) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    
    <div className="block min-h-6 mt-2">
        <h1 className='font-medium text-base'>{title} </h1>
        {checkboxs.map((checkbox) => (
            <div key={checkbox} className="flex items-start space-x-3 py-2">
            <input type="checkbox" checked={isChecked}
          onChange={handleCheckboxChange} className="border-gray-300 rounded h-5 w-5" />
                    
            <div className="flex flex-col">
            <h1 className="text-gray-700 font-medium leading-none">{checkbox}</h1>
            </div>
        </div>
        ))}
</div>
 
  )
}

export default Ckeckbox