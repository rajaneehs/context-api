## Context API

### Points

> Used To pass property values thru' different level of components effectively.
> Context provides a way to pass data thru' the component tree **without having to pass props down manually at every level**.

3 steps to implement

1. Create the Context
2. Provide a Context value
3. Consume the Context value

Every **Context object** created using createContext() comes with a **Provider** component & **Consumer** component.

> Provider component can be consumed only by the decendent components.
> App component will be a good place, as pretty much all components comes under it.

Provider component is responsible for providing values for all the decendent components.
(ex. here it is username)

> To consume a context value we need to use Consumer component.

> Within Consumer component, we need to specify a function <kbd>{() => {}}</kbd> <br>
> It gets the context value as its parameter, which can be used within the function body to return a react element/ JSX.
> As above, send function as a child to the Consumer component

#### Misc

1. We can set a default value to our context & it is set while creating the context.<br>
   It is passed as an arg to the createContext().
   The default value will only be used when a component does not have a matching Provider above it in the component tree.

2. contextType property on a class - Another way to consume the context value
   Steps:

- Export the context itself
- Assign this context to the contextType property on the class.

> In the render() context value will be available as <kbd>{this.context}</kbd>
