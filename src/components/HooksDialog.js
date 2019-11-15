// We import React and React.useState to use JSX and React's Hooks
import React, { useState } from 'react'
// All this other nice stuff comes from material-ui
// They're components with built-in functionality and style
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
// To avoid normal CSS name collisions and to take advantage of MUI's theme
// provider, we use JSS - basically CSS in JS
import { makeStyles } from '@material-ui/core/styles'

// This styles object is where we define the CSS for this component
const useStyles = makeStyles(theme => ({
  root_div: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
}))

// Our component in this case is just a function. We can have other functions
// inside of it still (since JS has first-class functions)
const HooksDialog = props => {
  // Instead of declaring state all at once, like a class, we declare an array
  // of form: [state_variable, update_function] = useState(initial_value)
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')

  // We call our JSS object to get the styles for this component
  const classes = useStyles()

  // You'll notice the functions to handle change and click are inline in this file
  // we still could've made nested functions like in the class-based example, but
  // usually hooks make things short enough so that you can convert things to one-liners
  // while keeping it readable
  return (
    <div className={classes.root_div}>
      <TextField
        id='message'
        label='Dialog Message'
        value={message}
        onChange={event => setMessage(event.target.value)}
        margin='normal'
      />
      <Button
        color='secondary'
        variant='contained'
        onClick={() => setOpen(!open)}
      >
        Open Dialog
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Here is an example</DialogTitle>
        <div>
          <List>
            <ListItem>
              {/* A great example of how state can be a helpful, changing variable */}
              Hello, {message}
            </ListItem>
          </List>
        </div>
      </Dialog>
    </div>
  )
}

export default HooksDialog
