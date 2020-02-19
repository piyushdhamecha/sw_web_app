import React, { useState } from "react"
import Alert from "@material-ui/lab/Alert"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from "@material-ui/core/TextField"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import CircularProgress from "@material-ui/core/CircularProgress"
import { green } from "@material-ui/core/colors"

import { withRouter } from "react-router-dom"

import { login } from "../apiClient"

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  }
}))
/* eslint react/prop-types: 0 */
/* eslint no-debugger: 0 */
const SignIn = ({ history }) => {
  const classes = useStyles()
  const [isSubmitting, setIsSumitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState()
  const [credentials, setCredentials] = useState()

  const handleSubmitClick = () => {
    setIsSumitting(true)
    console.log({ login })
    login(credentials).then(loginErrorMsg => {
      debugger
      setIsSumitting(false)
      if (!loginErrorMsg) {
        history.push("/planets")
      }

      setErrorMsg(loginErrorMsg)
    })
  }

  const handleFieldChange = fieldName => e => {
    setCredentials({ [fieldName]: e.target.value })
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          onChange={handleFieldChange("username")}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={handleFieldChange("password")}
        />
        <div className={classes.wrapper}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmitClick}
            disabled={isSubmitting}
          >
            Sign In
          </Button>
          {isSubmitting && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
        </div>
      </div>
    </Container>
  )
}

export default withRouter(SignIn)
