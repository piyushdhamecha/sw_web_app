import axios from "axios"
import _ from "lodash"

const BASE_URI = "https://swapi.co/api"
/* eslint no-debugger: 0 */
export const login = async ({ username, password }) => {
  try {
    axios.defaults.crossDomain = true

    const findUsernameAndPassword = async request => {
      const response = await axios.get(request, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
          "Access-Control-Allow-Headers":
            "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
        }
      })
      debugger
      if (response && response.count) {
        const { results } = response
        if (
          _.find(
            results,
            ({ name, birth_year: birthYear }) =>
              username === name && password === birthYear
          )
        ) {
          return true
        }
      }

      if (response && response.next) {
        findUsernameAndPassword(response.next)
      }

      return false
    }

    const msg = await findUsernameAndPassword(`${BASE_URI}/people`)

    if (msg) {
      return "Invalid username or password"
    }

    return null
  } catch {
    return "Internal server error"
  }
}
