import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGames from '../hooks/useGames'




const GameGrid = () => {
  const {games,error}=useGames();
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      
    </SimpleGrid>
  );
};

export default GameGrid;