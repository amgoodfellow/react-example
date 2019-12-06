// Every file needs to import react so we have access to all its classes/lifecycle methods
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// These imports are from Material-UI a component and style library we use in all of our
// react projects. We can create a default theme on a per-project basis with MUI's function
// createMuiTheme
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

// To keep the look of all of our frontends consistent, we define the same palette for each
// project. That way the color scheme is always consistent
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      light: '#b89f74',
      main: '#877148',
      dark: '#58461f',
      contrastText: '#fff'
    },
    secondary: {
      light: '#56a2ea',
      main: '#0074b7',
      dark: '#004987',
      contrastText: '#fff'
    }
  }
})

// To allow for easy copy/pasting, root element id's correspond to project name
const project_name = 'react-example'

// This needs to be called in order for the project to insert itself into our HTML page.
// `document.getElementById` is vanilla JavaScript. In your HTML, you'll have to have some
// element with the id matching the one in here. React will render itself inside that element.
// When you run an `npm start`, the project renders itself in the file found in
// `../public/index.html`
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById(project_name)
)
