import React from 'react';
import './App.css';
import Node from './components/Node';

function App() {

  const [rootName, setRootName] = React.useState("root");

  const editRootName = (index: number = 0, name: string) => {
    setRootName(name);
  }

  const copyNodeContent = () => {
    let nodeContentArr = Array.from(document
      .getElementsByClassName("node-content"));
    let res = "";
    nodeContentArr.forEach((nodeContent: any) => {
      res += nodeContent.innerText + "\n";
    });
    navigator.clipboard.writeText(res);
    document.getElementById("output")!.style.display = "block";
    setTimeout(() => {
      document.getElementById("output")!.style.display = "none";
    }, 1000);
  }

  return (
    <>
      <div className="w-screen bg-slate-800 h-screen text-slate-300 font-sans">
        <div className="max-w-5xl text-5xl px-8 py-5 font-semibold font-mono" >
          ASCII Tree
        </div>
        <hr className="text-slate-500" />
        <div
          className="max-w-5xl flex items-center gap-5 p-8"
        >
          <button
            onClick={copyNodeContent}
            className="copy-button font-sans bg-slate-700 px-3 py-2 rounded-md"
          >Copy to clipboard</button>
          <div id="output" className="hidden">Copied!</div>
        </div>
        <div className="max-w-5xl px-8">
          <Node
            end={true}
            name={rootName}
            level={0}
            index={0}
            previousEnds={[]}
            edit={editRootName}
          />
        </div>
      </div>
    </>
  );
}


export default App;
