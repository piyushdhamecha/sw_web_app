import axios from "axios"
import _ from "lodash"

const BASE_URI = "https://swapi.co/api"
/* eslint no-debugger: 0 */
export const login = async ({ username, password }) => {
  try {
    const findUsernameAndPassword = async request => {
      const response = await axios.get(request, { mode: "cors" })
      console.log({ response })
      if (response && response.data && response.data.count) {
        const { results } = response.data
        console.log({ results })

        const isCredentialsExists = _.some(results, {
          name: username,
          birth_year: password
        })

        if (isCredentialsExists) {
          return true
        }
      }

      if (response && response.data && response.data.next) {
        findUsernameAndPassword(response.data.next)
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
