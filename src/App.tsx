import {Grid, GridItem} from '@chakra-ui/react'
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import {useState} from "react";
import {Genre} from "./hooks/useGenres";
import {Platform} from "./hooks/UseGames";
import PlatformSelector from "./components/PlatformSelector";

interface GameQuery {
    genre:Genre|null;
    platform:Platform|null;
}
function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
    return <Grid templateAreas={{
        base: `"nav""main"`,
        lg: `"nav nav" "aside main"`
    }}
    templateColumns={{
        base:'1fr',
        lg:'200px 1fr'
    }}
    >
        <GridItem area='nav'><NavBar/></GridItem>
        <GridItem area='aside' paddingX={'5px'}>
            <GenreList onSelectGenre={(genre)=>setGameQuery({...gameQuery,genre})} selectedGenre={gameQuery.genre}/>
        </GridItem>

        <GridItem area='main' >
            <PlatformSelector selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform)=>setGameQuery({...gameQuery,platform})}/>
            <GameGrid  selectedGenre={gameQuery.genre} selectedPlatform={gameQuery.platform}/>
        </GridItem>
    </Grid>;
}

export default App
