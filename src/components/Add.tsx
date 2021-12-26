import React from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export default function Add(props: any) {

  const display = props.show ? '1' : '0';

  return (
    <Button style={{ opacity: `${display}` }} onClick={props.add}>
      <AddIcon />
    </Button>
  )
}
