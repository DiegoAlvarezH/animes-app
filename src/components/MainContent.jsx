//importando hooks y funciones
import { useMainContent } from "../hooks/useMainContent"
import { SidebarFav } from "./SidebarFav";


export const MainContent = () => {
    const { search, setSearch, handleSearch, animeList, handleList, animeFav } = useMainContent();

    return (
        <>
            <div className="content-wrap">
                <main>
                    <div className="main-head">
                        <form className="search-box" onSubmit={handleSearch}>
                            <input
                                type="search"
                                placeholder="Busca tu Anime!"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                required
                            />
                        </form>
                    </div>
                    <div className="anime-list">
                        {animeList.map((anime) => (
                            <article className="anime-card" key={anime.mal_id}>
                                <h3> {anime.score > 8 ?'Recomendado👍':
                                      anime.score >= 4 ?'Te puede gustar🤔':
                                      'No recomendado👎'
                                    } 
                                </h3>
                                <div onClick={(e) => handleList(anime)}>
                                    <figure>
                                        <img src={anime.image_url} 
                                             score={anime.score}
                                             alt={anime.title} />
                                    </figure>
                                    <h3>{anime.title}</h3>
                                </div>
                            </article>
                        ))}
                    </div>  
                    <SidebarFav
                    animeFav={animeFav}
                />         
                </main>
            </div>
        </>
    )
}
