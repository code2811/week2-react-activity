// MyComponent: displays a heading and paragraph
import React from 'react';
import './MyComponent.css';

const MyComponent: React.FC = () => {
  return (
    <div className="my-component">
      <h1>Welcome to My React App</h1>
      <p>This is a simple component built with React and TypeScript.</p>
    </div>
  );
};

export default MyComponent;
