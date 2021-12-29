import EditRoundedIcon from '@mui/icons-material/EditRounded';
import Button from '@mui/material/Button';
import DoneIcon from '@mui/icons-material/Done';

export default function Edit(props: any) {
  const display = props.level === 0 ? "none" : props.show ? 'block' : 'none';

  return (
    <Button
      style={{
        display: `${display}`,
        height: "2rem",
      }}
      onClick={props.edit}
      title="Edit node name"
      color="primary"
    >
      {props.isEditing ?
        <DoneIcon style={{ fontSize: "1.2rem" }} /> :
        <EditRoundedIcon style={{ fontSize: "1.2rem" }} />
      }
    </Button>
  )
}
