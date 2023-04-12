import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="mx-24 mt-16 text-justify">
        <h2 className="font-black text-xl mb-4">
          a. When should you use context API?
        </h2>
        <p className="text-lg">
          answer: When I don't want to drilling props to nested components one
          by one. Let's we have a component GrandFather. It's child is Father
          which is another component. And Father child is Son which is also a
          component. If I use props drilling, I have to pass GrandFather to
          Father to Son. And If I use context API, I will easily pass a data
          from GrandFather to Son.
        </p>
      </div>
      <div className="mx-24 mt-16 text-justify">
        <h2 className="font-black text-xl mb-4">b. What is a custom hook?</h2>
        <p className="text-lg">
          answer: A custom hook is a JavaScript special function and also user
          defined hook which name starts with "use" and can be used to call
          other hooks.
        </p>
      </div>
      <div className="mx-24 mt-16 text-justify">
        <h2 className="font-black text-xl mb-4">c. What is useRef?</h2>
        <p className="text-lg">
          answer: A useRef is a built-in react hook that accepts one argument as
          the initial value and returns a reference which allows to persist
          values between renders to stop re-render when data is updated.
        </p>
      </div>
      <div className="mx-24 mt-16 text-justify">
        <h2 className="font-black text-xl mb-4">d. What is useMemo?</h2>
        <p className="text-lg">
          answer: A useMemo is a react hook that cache the result of a
          calculation between re-renders which keep some functions needlessly
          running.
        </p>
      </div>
    </div>
  );
};

export default Blog;
