export default function Add(props: any) {

  const display = props.show ? '1' : '0';

  return (
    <button
      className="h-5 p-0 text-blue-200"
      style={{
        opacity: `${display}`,
      }}
      title="Add child node"
      onClick={props.add}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 20 20" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    </button>
  )
}
