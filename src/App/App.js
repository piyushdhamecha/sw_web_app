import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Login from "../Login"
import Planets from "../Planets"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/planets">
          <Planets />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
