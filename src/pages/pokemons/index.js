import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
// import { AppContext } from "../../contexts/appContext";
import styles from "./styles.module.scss"

export default function Pokemons(){
    // const { search, setSearch } = useContext(AppContext); OR CONTEXT
    const [ search ,setSearch ] = useState("");
    const [ loading, setLoading ] = useState(true)
    const [ pokemon, setPokemon ] = useState([])
    let { pokemonName } = useParams();

    
    const getPokemon = async (name) => {
        setLoading(true)
        
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`;
        await fetch(apiUrl).then(response => {
            return response.json()
        }).then(resp => {
            console.log(resp)
            setPokemon(resp);
        })

        setLoading(false)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            searchPokemon()
        }
    }

    const handleInput = (event) => {
        setSearch(event.target.value)
    }

    const searchPokemon = async () => {
        await getPokemon(search)
    }

    useEffect(async () => {
        await getPokemon(pokemonName)
    }, [pokemonName])

    return (
        <>
        <div className="container">
            <div className={styles.contentPokemon}>
                <div className={styles.headerPokemon}>
                    <div className={styles.searchBox}>
                        <div className={styles.logoBox}>
                            <img src="/logo.png" alt="Logo pokémon" title="Logo pokémon" />
                        </div>

                        <div className={styles.inputDiv}>
                            <input type="text" onChange={handleInput} onKeyDown={handleKeyDown}/>

                            <img src="/icon-pokebola.png" alt="Icone buscar" title="Icone buscar" onClick={searchPokemon} />
                        </div>
                    </div>
                </div>

                {
                    pokemon && !loading ? (
                        <div className={styles.cardPokemon}>
                            <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.forms.name} />

                            <p className={styles.pokemonName}>{pokemon.forms[0].name}</p>
                            <p className={styles.pokemonType}>{pokemon.types[0].type.name}</p>
                        </div>
                    ) : (
                        <h1>Pokémon não econtrado</h1>
                    )
                }
            </div>
        </div>
        </>
    )
}