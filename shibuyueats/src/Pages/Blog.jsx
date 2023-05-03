import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='py-7'>
                <h3 className='text-center text-5xl font-semibold'>Blog</h3>
            </div>
            <div className='py-12 px-5 text-left grid gap-8'>
                <div>
                    <h3 className='text-2xl font-semibold'>i. Tell us the differences between uncontrolled and controlled components.</h3>
                    <p>
                        In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.
                        <br />
                        <span className='font-bold'>Controlled Components</span>{' '}
                        As the name says, in the controlled component the form input elements values and mutations are totally driven by event handlers and the value of the input element is always inferred from the state.
                        <br />
                        <span className='font-bold'>Uncontrolled Components</span>{' '}
                        dont use any states on input elements or any event handler. This type of component doesnt care about an input elements real-time value changes.
                    </p>
                </div>
                <div>
                    <h3 className='text-2xl font-semibold'>ii. How to validate React props using PropTypes</h3>
                    <p>With React props, we can send data to a component when we call on that component, including numbers, strings, functions, objects, and arrays. If we have multiple components, we can pass data from one component to another.
                        To pass props between components, we can add them when the component is called, just like we would pass arguments when calling on a regular JavaScript function.
                        <br />
                        To use PropTypes, we need to import it from the prop-types package,Once imported PropTypes, we can define the expected types of wer props using the propTypes object. For example, let's say we have a component that expects a name prop of type string and a age prop of type number:
                        The PropTypes library provides a range of validators, such as string, number, bool, func, object, array, and more. You can also specify that a prop is required by using the .isRequired property after the validator.
                        <br />
                        If a prop with the wrong type is passed to a component that uses PropTypes, React will log a warning in the console. This can help catch bugs and improve code quality.
                        <br />
                        Note that PropTypes is not included in React 17 and later versions by default. However, you can still use it by installing the prop-types package and importing it as shown above.
                    </p>
                </div>
                <div>
                    <h3 className='text-2xl font-semibold'>iii. Tell us the difference between nodejs and express js.</h3>
                    <p>Node.js provides the underlying platform for building server-side applications in JavaScript, while Express.js provides a high-level API that simplifies the process of building web applications and APIs on top of Node.js.
                        <br />
                        NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses. </p>
                    <p>
                        Node.js is a runtime environment that allows you to run JavaScript code on the server-side, while Express.js is a web application framework that provides a set of features for building web applications and APIs.

                        Node.js provides low-level APIs for working with the file system, networking, and other system-level tasks, while Express.js provides a high-level API for handling HTTP requests and responses.

                        Node.js is a platform for building a wide range of applications, while Express.js is primarily used for building web applications and APIs.

                        Node.js is a lower-level technology that requires more low-level programming, while Express.js provides a higher-level abstraction that makes it easier to build web applications and APIs.

                        Node.js is often used in conjunction with other libraries and frameworks to build web applications, while Express.js is a popular choice for building standalone web applications and APIs.
                    </p>
                </div>
                <div>
                    <h3 className='text-2xl font-semibold'>iv. What is a custom hook, and why will we create a custom hook?</h3>
                    <p>
                        Custom hooks allow you to encapsulate complex stateful or side-effectful logic into reusable and composable functions that can be shared across components. They can improve code modularity, reusability, and maintainability, and make it easier to share common patterns across your application.
                    </p>
                    <p>A custom hook is a JavaScript function that uses one or more React hooks to create a reusable piece of stateful or side-effectful logic. Custom hooks allow you to abstract away complex logic into a reusable and composable function that can be shared across components.</p>
                    <p>In React, hooks are functions that allow you to use state and other React features in functional components, which do not have access to the this keyword like class components. Some examples of built-in React hooks are useState, useEffect, useContext, useReducer, useCallback, and useMemo.</p>
                    <p>Custom hook can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>

                </div>
            </div>
        </div>
    );
};

export default Blog;