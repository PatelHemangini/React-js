// Import necessary modules from the 'react' library
import React, { forwardRef, useImperativeHandle, useRef,useState } from 'react';

const ChildComponent = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);

  useImperativeHandle(ref, () => ({
    increment() {
      setCount(count + 1);
    },
    getCount() {
      return count;
    }
  }));

  return <div>{count}</div>;
});

// Parent Component
const ParentComponent = () => {
  const childRef = useRef();

  const handleClick = () => {
    childRef.current.increment();
  };

  return (
    <>
      <ChildComponent ref={childRef} />
      <button onClick={handleClick}>Increment</button>
    </>
  );
};

// Export the ParentComponent as the default export of this module
export default ParentComponent;
