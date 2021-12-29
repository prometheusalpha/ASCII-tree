import React from 'react'
import Add from './Add'
import Stack from '@mui/material/Stack';
import Remove from './Remove'
import Edit from './Edit'

export default function Node(props: any) {
  const [descendants, setDescendants] = React.useState([] as string[]);
  const [isEditable, setIsEditable] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const TABSPACE = 3;
  const inputRef = React.useRef<HTMLInputElement>(null);

  const showButton = () => setShow(true);
  const hideButton = () => setShow(false);

  const createPrefix = (ends: boolean[]) => {
    let res = "";

    for (let i = 1; i < ends.length; i++) {
      const end = ends[i];
      res += !end ?
        "│".concat("\xa0".repeat(TABSPACE)) :
        "\xa0".repeat(TABSPACE + 1)
    }

    res += props.end ? '└──' : '├──';
    return res;
  }

  const add = () => {
    setDescendants([...descendants, "newFileOrFolder"]);
  }

  const prefix = props.level !== 0 ? createPrefix(props.previousEnds) : "";

  const remove = (index: number) => {
    let newDescendants = [...descendants];
    newDescendants.splice(index, 1);
    setDescendants(newDescendants);
  }

  const deleteSelf = () => {
    setDescendants([]);
    props.remove(props.index)
  }

  const edit = (index: number, name: string) => {
    let newDescendants = [...descendants];
    newDescendants[index] = name;
    setDescendants(newDescendants);
  }

  const editSelf = () => {
    let text = inputRef.current!.value;
    props.edit(props.index, text);
  }

  const finishEditing = (e: any) => {
    if (e.key === "Enter") {
      console.log("Enter");
      setIsEditable(false);
      editSelf();
    }
  }

  return (
    <div>
      <div className=""
        onMouseEnter={showButton}
        onMouseLeave={hideButton}
        style={{ height: "1.3rem" }}
      >
        <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
          {prefix}
          {isEditable ?
            <input
              type="text"
              value={props.name}
              ref={inputRef}
              onChange={editSelf}
              onKeyDown={finishEditing} /> :
            props.name
          }
          <Add show={show} add={add} />
          <Edit
            show={show}
            edit={() => { setIsEditable(!isEditable) }}
            isEditing={isEditable}
          />
          <Remove
            show={show}
            remove={deleteSelf}
            level={props.level}
          />
        </Stack>
      </div>
      {descendants.map((fileOrFolder: string, index: number) =>
        <Node
          end={index === descendants.length - 1}
          name={fileOrFolder}
          key={index}
          level={props.level + 1}
          index={index}
          remove={remove}
          edit={edit}
          previousEnds={[...props.previousEnds, props.end]}
        />)}
    </div>
  )
}