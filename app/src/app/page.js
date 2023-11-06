import styles from './page.module.css'
import { getGames, getImageURL } from './services/videogames'


export default async function Home() {
  const games = await getGames()

  return (
    <main className={styles.main}>
      {
        games.map((game, index) => (
          <div className={styles.cardgame} key={index}>
            <img src={getImageURL(game.attributes)} />
            <div>
              <h1>{game.attributes.title}</h1>
              <p>{game.attributes.description}</p>
              <div>{game.attributes.launch}</div>
            </div>
          </div>
        ))
      }
    </main>
  )
}
