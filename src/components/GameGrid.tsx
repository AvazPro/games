import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import useGames from '../hooks/useGames';
import { GameQuery } from '../App';

interface GameGridProps {
  gameQuery: GameQuery;
  sortOrder: string;
  onSelectSortOrder?: (sortOrder: string) => void;
}


const GameGrid= ({ gameQuery, sortOrder, onSelectSortOrder}: GameGridProps) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skelets = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  if (onSelectSortOrder) {
    onSelectSortOrder(sortOrder);
  }

  // console.log(sortOrder)
  if (error) return <Text>{error}</Text>;

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        marginTop={"10px"}>
        {isLoading &&
          skelets.map((skelet) => <GameCardSkeleton key={skelet} />)}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};
export default GameGrid;
