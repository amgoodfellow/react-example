// We import React and React.Component to use JSX and React's lifecycle methods
// Note: React.Component is used for class-based React Components
//       If we were using React Hooks, we wouldn't need to import Component
import React, { Component } from 'react'
// All this other nice stuff comes from material-ui
// They're components with built-in functionality and style
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
// These last two are our own custom components
import ClassDialog from './components/ClassDialog.js'
import HooksDialog from './components/HooksDialog.js'

// These two constants function as enums in this example. The state variable `example_type` will
// either be CLASS_TYPE or HOOKS_TYPE
const CLASS_TYPE = 'class'
const HOOKS_TYPE = 'hooks'

// Every React class extends React.Component (this is like the basic React Object)
class App extends Component {
  // Every Class has this thing called 'state' - it's what makes React so amazing.
  // Basically, React keeps track of whenever a state variable changes, and when it does
  // it re-renders anything necessary to show that change on the page. The alternative
  // would be keeping track of everything that /could/ change all by yourself
  state = { example_type: CLASS_TYPE }

  // This is the same as a private method in Java. You might see some people using a syntax like:
  // function handleClick(){...}
  // This is a bit of personal preference, but typically fat-arrow functions are nicer to work
  // with. This weird arrow function (shown below) binds the method to this class, which is
  // what most Java people are used to happening automatically.
  // Inside the method, we need to call this.setState() to change any variable we previously
  // declared in state up above. this.setState is given to us because we extend Component
  handleClick = event => {
    this.setState({ example_type: event.target.value })
  }

  // Because this class extends React.Component, it inherits several lifecycle methods.
  // One that shows up in basically every class is `render()` - this is where one typically
  // puts all of the JSX you want to see on the page
  render() {
    // Instead of having to type `this.state.example_type`, we can use a shorter name in the
    // render function. If you have lots of state variables, take a look at Object Destructuring
    const type = this.state.example_type

    // Depending on what the state variable `type` equals, our React will render different things
    return (
      // There has to be one parent container - you can't render two top-level components 
      // In this case that container is a div 
      <div
        className='parent-div'
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        {type === CLASS_TYPE && <ClassDialog />}
        {type === HOOKS_TYPE && <HooksDialog />}
        <FormControl component='fieldset'>
          <FormLabel component='legend'>Element Type</FormLabel>
          <RadioGroup value={type} onChange={this.handleClick}>
            <FormControlLabel
              value={CLASS_TYPE}
              control={<Radio />}
              label='Classes'
            />
            <FormControlLabel
              value={HOOKS_TYPE}
              control={<Radio />}
              label='Hooks'
            />
          </RadioGroup>
        </FormControl>
      </div>
    )
  }
}

export default App
