import React from 'react'
import Add from './Add'
import Stack from '@mui/material/Stack';
import Remove from './Remove'

export default function Node(props: any) {
  const [descendants, setDescendants] = React.useState([] as string[]);
  const [show, setShow] = React.useState(false);
  const TABSPACE = 3;

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
    console.log(descendants);
  }

  const prefix = props.level !== 0 ? createPrefix(props.previousEnds) : "";

  const remove = (index: number) => {
    let newDescendants = [...descendants];
    newDescendants.splice(index, 1);
    setDescendants(newDescendants);
  }

  const deleteSelf = () => {
    props.remove(props.index)
    setDescendants([]);
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
          <div className="" >
            {props.name}
          </div>
          <Add show={show} add={add} />
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
          previousEnds={[...props.previousEnds, props.end]}
        />)}
    </div>
  )
}
