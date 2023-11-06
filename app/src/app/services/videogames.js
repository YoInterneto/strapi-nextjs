import { API_URL, STRAPI_URL } from '../config.js'

export async function getGames(){
    const response = await fetch(`${API_URL}video-games?populate[plataforms][fields][0]=name&populate[cover][fields][0]=url`)
  
    if(!response.ok){
      throw new Error("Something went wrong") 
    }
    
    const { data } = await response.json()
    return data
}

export async function getGame(slug){
    const response = await fetch(`${API_URL}video-games/${slug}?populate[plataforms][fields][0]=name&populate[cover][fields][0]=url`)
  
    if(!response.ok){
      throw new Error("Something went wrong") 
    }
    
    const { data } = await response.json()
    console.log(data)
    return data
}

export function getImageURL(attributes){
    const { url } = attributes.cover.data.attributes
    return `${STRAPI_URL}${url}`
}