import React from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export default function Add(props: any) {

  const display = props.show ? '1' : '0';

  return (
    <Button style={{
      opacity: `${display}`,
      height: "2rem",
    }}
      onClick={props.add}
      variant="text">
      <AddIcon />
    </Button>
  )
}
