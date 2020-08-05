import config from '../config'

const VIDEOS_URL = `${config.URL_BACKEND}/videos`

function create (objeto) {
  return fetch(VIDEOS_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(objeto)
  })
    .then(async (response) => {
      if (response.ok) {
        return await response.json()
      }

      throw new Error('Não foi possível conectar')
    })
}

export default {
  create
}
