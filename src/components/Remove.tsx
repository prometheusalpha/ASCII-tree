import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import Button from '@mui/material/Button';

export default function Remove(props: any) {
  const display = props.level === 0 ? "none" : props.show ? 'block' : 'none';

  return (
    <Button
      style={{
        display: `${display}`,
        height: "2rem",
      }}
      title="Remove node"
      onClick={props.remove}
      color="primary"
    >
      <DeleteForeverRoundedIcon style={{fontSize: "1.2rem"}}/>
    </Button>
  )
}
