import { Card, HStack, Heading, Image} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import getCroppedImageUrl from "../services/img-url";
import CriticScore from "./GameScore";
import Emoji from "./Emoji";


interface GameCardProps {
  game: Game;
}

const GameCard = ({ game}: GameCardProps) => {
  return (
    <Card borderRadius={10} overflow={"hidden"} padding={"10px"}>
      <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />

      <HStack justifyContent={"space-between"} marginY={3}>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <CriticScore score={game.metacritic} />
      </HStack>

      <Heading fontSize="2xl" marginBottom={1}>{game.name}</Heading>
      {game.rating_top !== undefined && <Emoji rating={game.rating_top} />}
    </Card>
  );
};

export default GameCard;
