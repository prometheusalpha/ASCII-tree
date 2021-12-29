import React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import Node from './components/Node';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

function App() {

  const [rootName, setRootName] = React.useState("root");

  const editRootName = (index: number = 0, name: string) => {
    setRootName(name);
  }

  const copyNodeContent = () => {
    let nodeContentArr = Array.from(document
      .getElementsByClassName("node-content"));
    let res = "";
    let contents = nodeContentArr.forEach((nodeContent: any) => {
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
      <Box sx={{ width: "95vw", padding: "2rem" }} id="main-box">
        <div className="limit-width">
          ASCII Tree
        </div>
        <hr className="divider" />
        <Stack
          direction="row"
          style={{ alignItems: "center", marginBottom: "1rem" }}
          spacing={3}
          className="limit-width"
        >
          <Button
            variant="contained"
            onClick={copyNodeContent}
            className="copy-button"
          >Copy to clipboard</Button>
          <div id="output">Copied!</div>
        </Stack>
        <div className="limit-width">
          <Node
            end={true}
            name={rootName}
            level={0}
            index={0}
            previousEnds={[]}
            edit={editRootName}
          />
        </div>
      </Box>
    </>
  );
}


export default App;
