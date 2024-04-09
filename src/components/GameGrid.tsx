import { SimpleGrid, Text } from "@chakra-ui/react";
import { useGames } from "../hooks/useGames";
import { GameCard } from "./GameCard";





const GameGrid = () => {
  const {games,error}=useGames();
  if (error) return <Text>{error}</Text>
  return (

    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
        {games.map((game)=>{
            return <GameCard key={game.id} game={game}/>
        })}
      
    </SimpleGrid>
  );
};

export default GameGrid;