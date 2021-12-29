import React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import Output from './components/Output';
import Node from './components/Node';

function App() {

  const [rootName, setRootName] = React.useState("root");

  const editRootName = (index: number = 0, name: string) => {
    setRootName(name);
  }
  return (
    <>
      <Box sx={{ width: "95vw", padding: "2rem" }}>
        <Node
          end={true}
          name={rootName}
          level={0}
          index={0}
          previousEnds={[]}
          edit={editRootName}
        />
      </Box>
      <Output />
    </>
  );
}

export default App;
