import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

export interface NavBarProps {
  onSearch: (searchText: string) => void;
}
const SearchInput = ({ onSearch }: NavBarProps) => {
  const ref = useRef<HTMLInputElement>(null);
  return () => {
    <form onSubmit={(event) => {event.preventDefault(); onSearch(ref.current!.value);}}> 
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input ref={ref} borderRadius={20} placeholder="Search games..." variant="filled" />
      </InputGroup>
    </form>
    
  };
};

export default SearchInput;
