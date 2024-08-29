import { Text } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface TitleProps {
  gameQuery: GameQuery;
}
const Title = ({ gameQuery }: TitleProps) => {
  const genreTitle = gameQuery.genre?.name;
  const platformTitle = gameQuery.platform?.name;
  if (gameQuery.genre?.name) {
  } 

  return (
    <Text fontSize="3xl" fontWeight="bold" mb="2">
      {platformTitle} {genreTitle} Games
    </Text>
  );
};
export default Title;
