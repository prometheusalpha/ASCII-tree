import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

export default function Remove(props: any) {
  const display = props.level === 0 ? "none" : props.show ? 'block' : 'none';

  return (
    <button
      style={{
        display: `${display}`,
      }}
      title="Remove node"
      onClick={props.remove}
      color="primary"
      className='h-5 p-0 text-slate-600'
    >
      <DeleteForeverRoundedIcon className="text-xl" />
    </button>
  )
}
