import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import GenreSkeleton from "./GenreSkeleton";
import getCroppedImageUrl from "../services/img-url";

interface GenresListProps {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenresList = ({ selectedGenre, onSelectGenre }: GenresListProps) => {
  const { data, error, isLoading } = useGenres();
  const skeletss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <List>
      {isLoading &&
        skeletss.map((skelet) => (<GenreSkeleton key={skelet} />))}
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack padding={{ base: "5px", sm: "10px" }}>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize={{ base: "45px", sm: "50px" }}
              borderRadius="50%"
              alt={genre.name}
            />
            <Button
              variant="link"
              fontSize="lg"
              fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre)}>
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
