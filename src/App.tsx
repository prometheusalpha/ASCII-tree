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
      <div className="w-screen p-8 bg-slate-800 h-screen text-white font-sans" id="main-box">
        <div className="max-w-5xl text-5xl font-semibold" >
          ASCII Tree
        </div>
        <hr className="bg-slate-500 my-4" />
        <div
          style={{ alignItems: "center", marginBottom: "1rem" }}
          className="max-w-5xl flex gap-3"
        >
          <button
            onClick={copyNodeContent}
            className="copy-button font-sans bg-slate-600 p-3 rounded-xl"
          >Copy to clipboard</button>
          <div id="output" className="hidden">Copied!</div>
        </div>
        <div className="max-w-5xl">
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
