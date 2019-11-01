const UrlBase = 'https://event-uback.mybluemix.net'
export default {
// services
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
  // users
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
  },
  // event
  async getEvent () {
    console.log('get events')
    const response = await fetch(`${UrlBase}/event/`)
    const jsonBody = await response.json()
    console.log(jsonBody)
    const { data } = jsonBody
    if (!response.ok) throw new Error('Ocurrió un error al obtener los usuarios')

    return data.event
  },

  async createEvent (event) {
    console.log(event)
    const response = await fetch(`${UrlBase}/event/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(event)
    })

    const jsonBody = await response.json()
    console.log(jsonBody)
    if (!response.ok) throw new Error('Ocurrió un error al obtener los usuarios')

    return jsonBody.data
  },

  async getEventById (id) {
    const response = await fetch(`${UrlBase}/event/${id}`)
    const jsonBody = await response.json()

    const { data } = jsonBody.data

    if (!response.ok) throw new Error('Ocurrió un error al obtener los posts')

    return data
  },
  // need
  async getNeed () {
    const response = await fetch(`${UrlBase}/need/`)
    const jsonBody = await response.json()

    const { data } = jsonBody.data

    if (!response.ok) throw new Error('Ocurrió un error al obtener los usuarios')

    return data.Need
  },

  async createNeed (need) {
    const response = await fetch(`${UrlBase}/need/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(need)
    })

    const jsonBody = await response.json()

    if (!response.ok) throw new Error('Ocurrió un error al obtener los usuarios')

    return jsonBody.data
  },

  async getNeedById (id) {
    const response = await fetch(`${UrlBase}/need/${id}`)
    const jsonBody = await response.json()

    const { data } = jsonBody.data

    if (!response.ok) throw new Error('Ocurrió un error al obtener los posts')

    return data
  },
  // catServices
  async getCatServices () {
    const response = await fetch(`${UrlBase}/catServices/`)
    const jsonBody = await response.json()

    const { data } = jsonBody.data

    if (!response.ok) throw new Error('Ocurrió un error al obtener los servicios')

    return data.catServices
  },

  async createCatServices (service) {
    const response = await fetch(`${UrlBase}/catServices/`, {
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

  async getCatServiceById (id) {
    const response = await fetch(`${UrlBase}/catServices/${id}`)
    const jsonBody = await response.json()

    const { data } = jsonBody.data

    if (!response.ok) throw new Error('Ocurrió un error al obtener los servicios')

    return data.catServices
  }

}
