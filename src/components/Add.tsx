import React from 'react'
import AddIcon from '@mui/icons-material/Add';

export default function Add(props: any) {

  const display = props.show ? '1' : '0';

  return (
    <button
      className="h-5 p-0 text-slate-600"
      style={{
        opacity: `${display}`,
      }}
      title="Add child node"
      onClick={props.add}
    >
      <AddIcon />
    </button>
  )
}
