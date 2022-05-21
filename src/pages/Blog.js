import React from "react";

const Blog = () => {
  return (
    <div className="px-16 h-screen">
      <h2 className="text-2xl">
        1. How will you improve the performance of a React Application?
      </h2>
      <p className="mb-3">
        To optimize React rendering, you need to make sure that components
        receive only necessary props. It will let you control the CPU
        consumption and avoid over-rendering unnecessary features. The solution
        is to create a functional component that will collect all props and
        redistribute them to other components. Analytics tracking libraries,
        excessive CSS animations, non-optimized images, iframes, and many more
        factors can contribute to poor performance.
      </p>
      <h2 className="text-2xl">
        2.What are the different ways to manage a state in a React application?
      </h2>
      <p className="mb-3">
        Local state is perhaps the easiest kind of state to manage in React,
        considering there are so many tools built into the core React library
        for managing it. useState is the first tool you should reach for to
        manage state in your components. It can take accept any valid data
        value, including primitive and object values. There are basically two
        ways in which the data gets handled in React. It gets handled through
        state and props.
      </p>
      <h2 className="text-2xl">3. How does prototypical inheritance work?</h2>
      <p className="mb-3">
        The Prototypal Inheritance is a feature in javascript used to add
        methods and properties in objects. It is a method by which an object can
        inherit the properties and methods of another object. Traditionally, in
        order to get and set the [[Prototype]] of an object, we use Object.
        getPrototypeOf and Object. Prototype-based programming is a style of
        object-oriented programming in which behaviour reuse (known as
        inheritance) is performed via a process of reusing existing objects that
        serve as prototypes. This model can also be known as prototypal,
        prototype-oriented, classless, or instance-based programming
      </p>
      <h2 className="text-2xl">
        4. You have an array of products. Each object has a name, price,
        description, etc. How will you implement a search to find products by
        name?
      </h2>
      <p className="mb-3">
        Use filter if you want to find all items in an array that meet a
        specific condition. Use find if you want to check if that at least one
        item meets a specific condition. Use includes if you want to check if an
        array contains a particular value. Use indexOf if you want to find the
        index of a particular item in an array.
      </p>
      <h2 className="text-2xl">
        5. What is a unit test? Why should write unit tests?
      </h2>
      <p className="mb-3">
        The main objective of unit testing is to isolate written code to test
        and determine if it works as intended. Unit testing is an important step
        in the development process, because if done correctly, it can help
        detect early flaws in code which may be more difficult to find in later
        testing stages. One of the benefits of unit tests is that they isolate a
        function, class or method and only test that piece of code. Higher
        quality individual components create overall system resiliency. Thus,
        the result is reliable code. Unit tests also change the nature of the
        debugging process.
      </p>
      <h2 className="text-2xl">
        6. Why you do not set the state directly in React?
      </h2>
      <p className="mb-3">
        One should never update the state directly because of the following
        reasons: If you update it directly, calling the setState() afterward may
        just replace the update you made.
      </p>
    </div>
  );
};

export default Blog;
