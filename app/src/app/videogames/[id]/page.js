import styles from '../../page.module.css'
import { getGame, getImageURL } from '../../services/videogames'

export default async function Videogames({ params }) {
    const { id: slug } = params
    const { id, attributes, meta } = await getGame(slug)
    console.log(attributes)
  
    return (
      <main>
        <h1>THIS IS A VIDEOGAME {id}</h1>
        <div className={styles.cardgame}>
            <img src={getImageURL(attributes)} />
            <div>
              <h1>{attributes.title}</h1>
              <p>{attributes.description}</p>
              <div>{attributes.launch}</div>
            </div>
          </div>
      </main>
    )
  }