import React from 'react'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import IconButton from '@mui/material/IconButton';

export default function Remove(props: any) {
  const display = props.show ? '1' : '0';

  return (
    <IconButton style={{ opacity: `${display}` }} onClick={props.remove} color="primary" >
      <DeleteForeverRoundedIcon />
    </IconButton>
  )
}
