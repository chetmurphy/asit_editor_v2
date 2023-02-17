import React from 'react';
import logo from './logo.svg';
import './App.css';

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-yaml";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";



function onChange(newValue: string) {
    console.log("change", newValue);
}


function App() {
  return (
    <AceEditor
        mode="yaml"
        theme="github"
        onChange={onChange}
        name="Asit Editor"
        editorProps={{ $blockScrolling: true }}
    />
  );
}

export default App;
