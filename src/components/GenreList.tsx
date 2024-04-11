import { useGenres, Genre } from "../hooks/useGenres"
import { HStack, Image, List, ListItem , Text, Spinner, Button} from "@chakra-ui/react"
import cropImages from "../services/images"

interface Props{
    onSelectGenre:(genre:Genre)=>void;
    selectedGenre:Genre | null;

}



const GenreList = ({onSelectGenre,selectedGenre}:Props) => {
const {data,loading,error}=useGenres();
  if(error) return null;
  {loading && <Spinner/>}
  return (
    <List>
      {data.map((d)=><ListItem key={d.id} paddingY='5px'>
        <HStack>
            <Image boxSize='32px' borderRadius={8} src={cropImages(d.image_background)}/>
            <Button fontWeight={d.id===selectedGenre?.id ? 'bold' : 'normal'} fontSize='lg' variant={'link'} onClick={()=>onSelectGenre(d)}>{d.name}</Button>
        </HStack>

      </ListItem>)}
    </List>
  );
}

export default GenreList