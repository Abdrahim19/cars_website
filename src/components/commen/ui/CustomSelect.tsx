import React, { useState , useEffect } from 'react';

type Option = {
  value: string;
  label: string;
  isSelected: boolean;
};

type CustomSelectProps = {
  options: Option[];
  placeholder?: string;
  onSelect:(selectedOptions: Option[]) => void;
  multiSelect?: boolean;
};

const CustomSelect: React.FC<CustomSelectProps> = ({ options, placeholder, onSelect, multiSelect }) => {
    const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleOption = (option: Option) => {
      const isSelected = selectedOptions.some((selectedOption) => selectedOption.value === option.value);
  
      if (isSelected) {
        const filteredOptions = selectedOptions.filter((selectedOption) => selectedOption.value !== option.value);
        setSelectedOptions(filteredOptions);
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
    };
  
    const handleOptionClick = (option: Option) => {
      if (multiSelect) {
        toggleOption(option);
      } else {
        setSelectedOptions([option]);
        setIsOpen(false);
        onSelect([option]);
      }
    };
  
    useEffect(() => {
      if (multiSelect) {
        onSelect(selectedOptions);
      }
    }, [selectedOptions, multiSelect]);
  
    // ...
  
    return (
      <div className="relative">
        <button
          type="button"
          className="py-2 pl-3 pr-8 text-left bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOptions.length > 0
            ? selectedOptions.map((option) => option.label).join(', ')
            : placeholder || 'Select an option'}
          <svg
            className={`w-5 h-5 ml-2 ${isOpen ? 'transform rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path fillRule="evenodd" d="M6 8l4 4 4-4H6z" />
          </svg>
        </button>
  
        {/* ... */}
      </div>
    );
  };

export default CustomSelect