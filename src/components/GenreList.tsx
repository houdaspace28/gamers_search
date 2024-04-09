import { useGenres } from "../hooks/useGenres"
import { HStack, Image, List, ListItem , Text, Spinner} from "@chakra-ui/react"
import cropImages from "../services/images"



const GenreList = () => {
const {data,loading,error}=useGenres();
  if(error) return null;
  {loading && <Spinner/>}
  return (
    <List>
      {data.map((d)=><ListItem key={d.id} paddingY='5px'>
        <HStack>
            <Image boxSize='32px' borderRadius={8} src={cropImages(d.image_background)}/>
            <Text fontSize='lg'>{d.name}</Text>
        </HStack>

      </ListItem>)}
    </List>
  );
}

export default GenreList