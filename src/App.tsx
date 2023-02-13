import React from 'react';
import logo from './logo.svg';
import './App.css';

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

function onChange(newValue: string) {
    console.log("change", newValue);
}


function App() {
  return (
    <AceEditor
        mode="java"
        theme="github"
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
    />
  );
}

export default App;
