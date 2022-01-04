import React from 'react'
import Add from './Add'
import Remove from './Remove'
import Edit from './Edit'

export default function Node(props: any) {
  const [descendants, setDescendants] = React.useState([] as string[]);
  const [isEditable, setIsEditable] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const TABSPACE = 2;
  const inputRef = React.useRef<HTMLInputElement>(null);

  const showButton = () => setShow(true);
  const hideButton = () => setShow(false);

  const createPrefix = (ends: boolean[]) => {
    let res = "\xa0";

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

  const removeSelf = () => {
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
      setIsEditable(false);
      editSelf();
    }
  }

  return (
    <div>
      <div className="h-5"
        onMouseEnter={showButton}
        onMouseLeave={hideButton}
      >
        <div className="flex gap-4">
          <div className="font-mono h-5">
            {prefix}
            {isEditable ?
              <input
                type="text"
                className="input-name text-white bg-slate-700"
                value={props.name}
                ref={inputRef}
                onChange={editSelf}
                onKeyDown={finishEditing} /> :
              props.name
            }
          </div>
          <Add show={show} add={add} />
          <Edit
            show={show}
            edit={() => { setIsEditable(!isEditable); }}
            isEditing={isEditable}
          />
          <Remove
            show={show}
            remove={removeSelf}
            level={props.level}
          />
        </div>
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