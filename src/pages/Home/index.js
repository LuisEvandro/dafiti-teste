import { useContext } from "react"
import { useHistory } from "react-router";
import { AppContext } from "../../contexts/appContext";
import styles from "./styles.module.scss"

export default function Home(){
    const { search ,setSearch } = useContext(AppContext); //Com context
    let history = useHistory();

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            searchPokemon()
        }
    }

    const handleInput = (event) => {
        setSearch(event.target.value)
    }

    const searchPokemon = () => {
        history.push(`/search/${search}`);
    }


    return (
        <div className="container">
            <div className={styles.contentHome}>
                <div className={styles.searchBox}>
                    <div className={styles.logoBox}>
                        <img src="logo.png" alt="Logo pokémon" title="Logo pokémon" />

                        <p>Seu guia de pokemons na Web</p>
                    </div>

                    <div className={styles.inputDiv}>
                        <input type="text" onChange={handleInput} onKeyDown={handleKeyDown}/>

                        <img src="icon-pokebola.png" alt="Icone buscar" title="Icone buscar" onClick={searchPokemon} />
                    </div>
                </div>
            </div>
        </div>
    )
}