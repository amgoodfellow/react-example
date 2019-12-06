// We import React and React.Component to use JSX and React's lifecycle methods
// Note: React.Component is used for class-based React Components
// If we were using React Hooks, we wouldn't need to import Component
import React, { Component } from 'react'
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
import { withStyles } from '@material-ui/core/styles'

// This styles object is where we define the CSS for this component
const styles = () => ({
  root_div: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})

// Every React class extends React.Component (this is like the basic React Object)
class ClassDialog extends Component {
  // In a class, the inital state is typically declared right beneath the class declaration
  // These are the variables that react will keep track of for you
  state = { message: '', open: false }

  // This is a React lifecycle method which is called right after a component has
  // been mounted to the DOM
  componentDidMount() {
    // This is typically where our network requests would happen.
    // More information available at:
    // https://reactjs.org/docs/react-component.html#componentdidmount
  }

  // After the other lifecycle methods, but before render(), we can put our custom
  // methods. It's usually a good idea to use arrow functions here so the function is
  // bound to `this` context

  // This function takes a javascript event - in this case typing in a textfield
  // and sets the new value of our `message` state variable to be whatever is in the
  // textfield
  handleChange = event => {
    this.setState({ message: event.target.value })
  }

  // This function sets the state variable `open` to its opposite
  handleClick = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    // This is called Object Destructuring - it's super convenient when dealing with
    // state variables. You can read more about it here:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    const { message, open } = this.state

    const { classes } = this.props

    return (
      <div className={classes.root_div}>
        <TextField
          id='message'
          label='Dialog Message'
          value={message}
          onChange={this.handleChange}
          margin='normal'
        />
        <Button
          color='secondary'
          variant='contained'
          onClick={this.handleClick}
        >
          Open Dialog
        </Button>
        <Dialog open={open} onClose={this.handleClick}>
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
}

// We need to export this component, and we combine our styles with it using HOC
export default withStyles(styles)(ClassDialog)
