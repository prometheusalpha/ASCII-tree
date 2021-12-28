import React from 'react'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export default function Remove(props: any) {
  const display = props.level === 0 ? "none" : props.show ? 'block' : 'none';

  return (
    <Button
      style={{
        display: `${display}`,
        height: "2rem",
      }}
      onClick={props.remove}
      color="primary"
    >
      <DeleteForeverRoundedIcon style={{fontSize: "1.2rem"}}/>
    </Button>
  )
}
