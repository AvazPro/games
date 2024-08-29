import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";

import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";
import SelectorPlatform from "./components/SelectorPlatform";
import SortSelector from "./components/SortSelector";
import Title from "./components/Title";


export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  rating: number;
  searchText: string;
}
const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "230px 1fr",
      }}>
      <GridItem area="nav">
        <NavBar onSearch={(searchText: string) => setGameQuery({ ...gameQuery, searchText })}/>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenresList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre: Genre) => setGameQuery({ ...gameQuery, genre })} 
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Title gameQuery={gameQuery}/>
        <HStack padding={5}>
          <SelectorPlatform
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform: Platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
        </HStack>
        <GameGrid gameQuery={gameQuery} sortOrder={gameQuery.sortOrder}/>
      </GridItem>
    </Grid>
  );
};
export default App;


