import styles from '../../page.module.css'
import { getGame, getImageURL } from '../../services/videogames'

export default async function Pages({ params }) {
    const { slug } = params
  
    return (
      <main>
        <h1>THIS IS A TEST {slug.join('/')}</h1>
      </main>
    )
  }