import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Pdf from "react-to-pdf";
const Blog = () => {
  const ref = React.createRef();
  return (
    <Container>
      {/* <div className="App">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => <Button variant="outline-info" onClick={toPdf}>Generate Pdf</Button>}
        </Pdf>
        <div ref={ref}>
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
        </div>
      </div> */}
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => (
          <Button variant="outline-info" onClick={toPdf}>
           <FaCloudDownloadAlt /> Generate Pdf
          </Button>
        )}
      </Pdf>
      <div ref={ref}>
        <h3 className="chef_text">
          {" "}
          <b>
          ❓ Question : Differences between uncontrolled and controlled
            components?
          </b>
        </h3>
        <h6>CONTROLLED COMPONENT</h6>
        <p className="chef_text">
          In React, controlled components refer to components that have their
          state and behavior controlled by the parent component. These
          components rely on props passed down from the parent component to
          update their state and behavior.
        </p>
        <h6>UNCONTROLLED COMPONENT</h6>
        <p className="chef_text">
          Uncontrolled components refer to components that manage their own
          state internally.
        </p>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>CONTROLLED COMPONENT</th>
              <th>UNCONTROLLED COMPONENT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Does not maintain its internal state.</td>
              <td>Maintains its internal state</td>
            </tr>
            <tr>
              <td>Data is controlled by the parent component.</td>
              <td>Data is controlled by the DOM itself.</td>
            </tr>
            <tr>
              <td>Accepts its current value as a prop.</td>
              <td>Uses a ref for their current values.</td>=
            </tr>
            <tr>
              <td>Allows validation control.</td>
              <td>Does not allow validation control.</td>=
            </tr>
            <tr>
              <td>Better control over the form elements and data.</td>
              <td>Limited control over the form elements and data.</td>=
            </tr>
          </tbody>
        </Table>
        <h2 className="chef_text">
          <b>❓ Question : How to validate React props using PropTypes?</b>
        </h2>
        <h6>PropTypes</h6>
        <p className="chef_text">
          propTypes is used for props validation. If some of the props aren't
          using the correct type that we assigned, we will get a console
          warning. After specify validation patterns, we can set App.
        </p>
        <p className="chef_text">
          Below are the validators for the basic data types:
        </p>
        <ol className="chef_text">
          <li>PropTypes.any: The prop can be of any data type</li>
          <li>PropTypes.bool: The prop should be a Boolean</li>
          <li>PropTypes.number: The prop should be a number</li>
          <li>PropTypes.string: The prop should be a string</li>
          <li>PropTypes.func: The prop should be a function</li>
          <li>PropTypes.array: The prop should be an array</li>
          <li>PropTypes.object: The prop should be an object</li>
          <li>PropTypes.symbol: The prop should be a symbol</li>
        </ol>
        <h2 className="chef_text">
          <b>❓ Question :Difference between nodejs and express js.?</b>
        </h2>
        <h5>nodejs</h5>
        <p className="chef_text">
          Node. js is an open-source, cross-platform JavaScript runtime
          environment and library for running web applications outside the
          client's browser. Ryan Dahl developed it in 2009
        </p>
        <h5>express js</h5>
        <p className="chef_text">
          Express is a minimal and flexible Node.js web application framework
          that provides a robust set of features for web and mobile
          applications.
        </p>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Express JS</th>
              <th>NodeJS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                It is used to build web-apps using approaches and principles of
                Node.js.
              </td>
              <td>
                It is used to build server-side, input-output, event-driven
                apps.
              </td>
            </tr>
            <tr>
              <td>More features than Node.js.</td>
              <td>Fewer features.</td>
            </tr>
            <tr>
              <td>It is built on Node.js</td>
              <td>It is built on Google’s V8 engine.</td>
            </tr>
            <tr>
              <td>Written in JavaScript</td>
              <td>Written in C, C++, JavaScript</td>
            </tr>
            <tr>
              <td>Routing is provided.</td>
              <td>Routing is not provided.</td>
            </tr>
            <tr>
              <td>It requires less coding time.</td>
              <td>It requires more coding time.</td>
            </tr>
          </tbody>
        </Table>
        <h2 className="chef_text">
          <b>
          ❓ Question :What is a custom hook, and why will you create a custom
            hook?
          </b>
        </h2>
        <h5>custom hook</h5>
        <p className="chef_text">
          A custom Hook is a JavaScript function whose name starts with ”use”
          and that may call other Hooks. If you have code in a component that
          you feel would make sense to extract, either for reuse elsewhere or to
          keep the component simpler, you can pull that out into a function.
        </p>
        <h5>Reason for custom hook</h5>
        <p className="chef_text">
          Custom React JS hooks offer reusability as when a custom hook is
          created, it can be reused easily, which makes the code cleaner and
          reduces the time to write the code. It also enhances the rendering
          speed of the code as a custom hook does not need to be rendered again
          and again while rendering the whole code.
        </p>
        <p className="chef_text">
          With custom React Hooks, we can reuse stateful logic easily across
          different components in an optimized and scalable format.Hooks allow
          function components to have access to state and other React features.
          Because of this, class components are generally no longer needed.
          Although Hooks generally replace class components, there are no plans
          to remove classes from React.
        </p>
      </div>
    </Container>
  );
};

export default Blog;
