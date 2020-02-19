import axios from "axios"
import _ from "lodash"

const BASE_URI = "https://swapi.co/api"

export const login = async ({ username, password }) => {
  try {
    const findUsernameAndPassword = async request => {
      const response = await axios.get(request, { mode: "cors" })

      if (response && response.data && response.data.count) {
        const { results } = response.data

        const isCredentialsExists = _.some(results, {
          name: username,
          birth_year: password
        })

        if (isCredentialsExists) {
          return true
        }
      }

      if (response && response.data && response.data.next) {
        await findUsernameAndPassword(response.data.next)
      }

      return false
    }

    const isValidUser = await findUsernameAndPassword(`${BASE_URI}/people`)

    if (!isValidUser) {
      return "Invalid username or password"
    }

    return null
  } catch {
    return "Internal server error"
  }
}

export const searchPlanet = async value => {
  const allResults = []

  const getAllPlanetsFromSearch = async request => {
    const response = await axios.get(request, { mode: "cors" })

    if (response && response.data && response.data.count) {
      const { results } = response.data

      allResults.push(...results)

      if (response && response.data && response.data.next) {
        await getAllPlanetsFromSearch(response.data.next)
      }
    }
  }

  await getAllPlanetsFromSearch(`${BASE_URI}/planets?search=${value}`, [])

  return allResults
}
