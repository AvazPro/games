import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}
const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "-name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-rating", label: "Average rating" },
  ];

  let currentSortOrder = sortOrders.find((order) => order.value === sortOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>Order by: {currentSortOrder?.label || "Relevance"}</MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
            value={order.value}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
