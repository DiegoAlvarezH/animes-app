//componente para la lista de favortitos
export const SidebarFav = ({ animeFav }) => {

    return (
        <aside>
            <nav>
                <h2>Favoritos⭐</h2>
                {animeFav.length == 0 ?
                    (
                        <h1>Agrega animes a la lista</h1>
                    )
                    :
                    (
                        //.map de como se agregan los datos a la lista
                        animeFav.map(({ title, mal_id, url }) =>
                        (<a href={url} key={mal_id} target="_blank" rel="noreferrer" key={mal_id}>
                            {title}
                        </a>)
                        )
                    )
                }
                
            </nav>
        </aside>
    )
}
