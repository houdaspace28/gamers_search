import { useData } from "./useData"
import { Platform } from "../hooks/useGames"



export const usePlatforms=() =>useData<Platform>('/platforms/lists/parents');
export default usePlatforms; 