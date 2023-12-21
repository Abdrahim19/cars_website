import Select from "react-select/base";
type OptionType = {
    value: string;
    label: string;
    onInputChange?: (inputValue: string) => void;
  };
  
function Marques_ModèlesDrowdown() {
    const options = [
        { value: "blues", label: "Blues" },
        { value: "rock", label: "Rock" },
        { value: "jazz", label: "Jazz" },
        { value: "orchestra", label: "Orchestra" },
      ];
      const handleInputChange = (inputValue: string) => {
        console.log('Input Value:', inputValue);
      };
      const handleChange = (selectedOption: OptionType | null) => {
        console.log(selectedOption);
      };
  return (
    <div className="flex flex-col gap-4">
    <Select options={options} placeholder='Le choix' inputValue={""} onChange={handleChange} onMenuOpen={function (): void {
throw new Error("Function not implemented.");
} } onMenuClose={function (): void {
throw new Error("Function not implemented.");
} } value={null} onInputChange={handleInputChange} />
<Select options={options} placeholder='Le choix ' inputValue={""} onChange={handleChange} onMenuOpen={function (): void {
throw new Error("Function not implemented.");
} } onMenuClose={function (): void {
throw new Error("Function not implemented.");
} } value={null} onInputChange={handleInputChange} />
<Select options={options} placeholder='Le choix' inputValue={""} onChange={handleChange} onMenuOpen={function (): void {
throw new Error("Function not implemented.");
} } onMenuClose={function (): void {
throw new Error("Function not implemented.");
} } value={null} onInputChange={handleInputChange} />
    </div>
  )
}

export default Marques_ModèlesDrowdown