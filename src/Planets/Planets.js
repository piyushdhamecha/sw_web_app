import _ from "lodash"
import React, { useState } from "react"

import { fade, makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import SearchIcon from "@material-ui/icons/Search"
import InputBase from "@material-ui/core/InputBase"
import CircularProgress from "@material-ui/core/CircularProgress"

import { withRouter } from "react-router-dom"

import { searchPlanet } from "../apiClient"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: "flex"
  },
  search: {
    flexGrow: 1,
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    margin: "0 20px",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  },
  contentContainer: {
    display: "flex",
    justifyContent: "center",
    paddingTop: 10,
    flex: 1
  }
}))

const Planets = ({ history }) => {
  const classes = useStyles()
  const [isFetching, setIsFetching] = useState(false)
  const [planetsData, setPlanetsData] = useState()

  const handleLogoutClick = () => {
    localStorage.removeItem("username")

    history.push("/")
  }

  const handleSearchChange = _.debounce(value => {
    if (!value) {
      return
    }

    setIsFetching(true)

    searchPlanet(value).then(response => {
      setPlanetsData(response)

      setIsFetching(false)
    })
  }, 300)

  const renderContent = () => {
    if (isFetching) {
      return <CircularProgress />
    }

    return JSON.stringify(planetsData)
  }

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Planets
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
                onChange={e => handleSearchChange(e.target.value)}
              />
            </div>
            <Button color="inherit" onClick={handleLogoutClick}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <div className={classes.contentContainer}>{renderContent()}</div>
    </div>
  )
}

export default withRouter(Planets)
