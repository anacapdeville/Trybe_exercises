// The current code uses JSX to assign a div element to the constant JSX. Replace the div with an h1 element and add the text Hello JSX! inside it.

const JSX = <h1>Hello JSX!</h1>

// Define a new constant JSX that renders a div which contains the following elements in order:

// An h1, a p, and an unordered list that contains three li items. You can include any text you want within each element.

const JSX = (
  <div>
    <h1>oi</h1>
    <p>hello</p>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </div>
)

// The code editor has a JSX element similar to what you created in the last challenge. Add a comment somewhere within the provided div element, without modifying the existing h1 or p elements.

const JSX = (
  <div>
    {/*comentário*/}
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);

// The code editor has a simple JSX component. Use the ReactDOM.render() method to render this component to the page. You can pass defined JSX elements directly in as the first argument and use document.getElementById() to select the DOM node to render them to. There is a div with id='challenge-node' available for you to use. Make sure you don't change the JSX constant.

const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// change code below this line
ReactDOM.render(JSX, document.getElementById('challenge-node'));

// Apply a class of myDiv to the div provided in the JSX code.

const JSX = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);

// Fix the errors in the code editor so that it is valid JSX and successfully transpiles. Make sure you don't change any of the content - you only need to close tags where they are needed.

const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);

// The code editor has a function called MyComponent. Complete this function so it returns a single div element which contains some string of text.

// Note: The text is considered a child of the div element, so you will not be able to use a self-closing tag.

const MyComponent = function() {
  // change code below this line
  return <div>ola</div>

  // change code above this line
}

// MyComponent is defined in the code editor using class syntax. Finish writing the render method so it returns a div element that contains an h1 with the text Hello React!.

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // change code below this line

    return(
    <div>
      <h1>Hello React!</h1>
    </div>
    )
    // change code above this line
  }
};

// In the code editor, there is a simple functional component called ChildComponent and a class component called ParentComponent. Compose the two together by rendering the ChildComponent within the ParentComponent. Make sure to close the ChildComponent tag with a forward slash.

const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* change code below this line */ }

          <ChildComponent />
        { /* change code above this line */ }
      </div>
    );
  }
};