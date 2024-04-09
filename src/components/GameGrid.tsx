import { SimpleGrid, Text } from "@chakra-ui/react";
import { useGames } from "../hooks/useGames";
import { GameCard } from "./GameCard";
import CardSkeleton from "./CardSkeleton";
import CardCaontainer from "./CardCaontainer";
interface Genre{
    id:number,
    name:string,
    image_background:string,
    
}

interface Props{
 selectedGenre: Genre | null;
}



const GameGrid = ({selectedGenre}:Props) => {
  const {data,error,loading}=useGames(selectedGenre);
  const skeletons=[1,2,3,4,5,6,7,8];
  if (error) return <Text>{error}</Text>
  return (

    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
        
        {loading && skeletons.map((skeleton)=><CardCaontainer  key={skeleton}><CardSkeleton/></CardCaontainer>) }
        {data.map((d)=>{
            return <CardCaontainer key={d.id}><GameCard  game={d}/></CardCaontainer>;
        })}
        
      
      
    </SimpleGrid>
  );
};

export default GameGrid;