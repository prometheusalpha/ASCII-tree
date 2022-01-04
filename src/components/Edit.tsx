import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DoneIcon from '@mui/icons-material/Done';

export default function Edit(props: any) {
  const display = props.level === 0 ? "none" : props.show ? 'block' : 'none';

  return (
    <button
      style={{
        display: `${display}`,
      }}
      onClick={props.edit}
      title="Edit node name"
      color="primary"
      className='h-5 p-0 text-slate-600'
    >
      {props.isEditing ?
        <DoneIcon style={{ fontSize: "1.2rem" }} /> :
        <EditRoundedIcon style={{ fontSize: "1.2rem" }} />
      }
    </button>
  )
}
