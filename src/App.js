// We import React and React.Component from the react package
import React, { Component } from 'react';
// All this other nice stuff comes from material-ui
// They're components with built-in functionality and styles
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';

// Every React class extends React.Component (this is like the basic React Object)
class App extends Component {
  // Every Class has this thing called 'state' - it's what makes React so amazing.
  // Basically, React keeps track of whenever a state variable changes, and when it does
  // it re-renders anything necessary to show that change on the page. The alternative
  // would be keeping track yourself
  state = { open: false, name: '' }

  // This is the same as a private method in Java. You might see some people using a syntax like:
  //  function handleClose(){...}
  // This is a bit of personal preference, but typically fat-arrow functions are nicer to work
  // with. This weird arrow function (shown below) binds the method //to this class, which is 
  // what most Java people are used to happening automatically.
  hanldeClick = () => {
    // To change state, you have to call the setState method
    // It accepts an object as a parameter
    this.setState({ open: !this.state.open })
  }

  // This method is called when the text field is changed. It passes an `event` which we can get the
  // target value of
  handleChange = event => {
    this.setState({ name: event.target.value })
  }


  // Because this class extends React.Component, it inherits several lifecylce methods.
  // One that shows up in basically every class is `render` - this is where one typically
  // puts all of the JSX you want to see on the page
  render() {
    return (
      // There has to be one parent container - you can't render two top-level components
      // In this case that countainer is a div
      <div>
        <Button color="primary" onClick={this.hanldeClick}>
          Open stuff
        </Button>
        <TextField
          id="name"
          label="Name"
          value={this.state.name}
          onChange={this.handleChange}
          margin="normal"
        />
        <Dialog open={this.state.open} onClose={this.hanldeClick} aria-labelledby="simple-dialog-title">
          <DialogTitle id="simple-dialog-title">Here is an example</DialogTitle>
          <div>
            <List>
              <ListItem>
                {/* A great example of how state can be a helpful, changing variable */}
                Hello, {this.state.name}
              </ListItem>
            </List>
          </div>
        </Dialog>
      </div>

    );
  }
}

export default App;
