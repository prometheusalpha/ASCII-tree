import React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import Output from './components/Output';
import Node from './components/Node';

function App() {

  return (
    <>
      <Box sx={{ width: "45vw", padding: "2rem" }}>
        <Node end={true} name="root" level={0} previousEnds={[]} />
      </Box>
      <Output />
    </>
  );
}

export default App;
