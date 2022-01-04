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
      className='h-5 p-0 text-blue-200'
    >
      {props.isEditing ?
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg> :
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
        </svg>
      }
    </button>
  )
}
