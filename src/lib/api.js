const UrlBase = 'https://event-uback.mybluemix.net'
export default {

  async getServices () {
    const response = await fetch(`${UrlBase}/services/`)
    const jsonBody = await response.json()

    const { data } = jsonBody.data

    if (!response.ok) throw new Error('Ocurrió un error al obtener los servicios')

    return data.service
  },

  async createServices (service) {
    const response = await fetch(`${UrlBase}/services/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(service)
    })

    const jsonBody = await response.json()

    if (!response.ok) throw new Error('Ocurrió un error al obtener los servicios')

    return jsonBody.data
  },

  async getServiceById (id) {
    const response = await fetch(`${UrlBase}/services/${id}`)
    const jsonBody = await response.json()

    const { data } = jsonBody.data

    if (!response.ok) throw new Error('Ocurrió un error al obtener los servicios')

    return data.service
  },
  async getUsers () {
    const response = await fetch(`${UrlBase}/users/`)
    const jsonBody = await response.json()

    const { data } = jsonBody.data

    if (!response.ok) throw new Error('Ocurrió un error al obtener los usuarios')

    return data.Users
  },

  async createUsers (user) {
    const response = await fetch(`${UrlBase}/users/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })

    const jsonBody = await response.json()

    if (!response.ok) throw new Error('Ocurrió un error al obtener los usuarios')

    return jsonBody.data
  },

  async getUserById (id) {
    const response = await fetch(`${UrlBase}/users/${id}`)
    const jsonBody = await response.json()

    const { data } = jsonBody.data

    if (!response.ok) throw new Error('Ocurrió un error al obtener los posts')

    return data
  }

}
