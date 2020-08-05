import config from '../config'

const CATEGORIES_URL = `${config.URL_BACKEND}/categorias`

function getAll () {
  return fetch(`${CATEGORIES_URL}`)
    .then(async (response) => {
      if (response.ok) {
        return await response.json()
      }

      throw new Error('Não foi possível conectar')
    })
}

function getAllWithVideos () {
  return fetch(`${CATEGORIES_URL}?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        return await response.json()
      }

      throw new Error('Não foi possível conectar')
    })
}

export default {
  getAllWithVideos,
  getAll
}
