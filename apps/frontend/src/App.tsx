import React from 'react';
import Editor from './components/Editor';
import './App.css';

function App(): JSX.Element {
  return (
    <div className="app">
      <h1>Welcome to Tiptap</h1>
      <p>Create rich text content with the editor below.</p>
      <Editor />
    </div>
  );
}

export default App;
