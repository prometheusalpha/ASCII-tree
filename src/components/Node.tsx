import React from 'react'
import Add from './Add'
import Stack from '@mui/material/Stack';

interface TreeNode {
  value: string;
  descendants: TreeNode[];
  level: number;
}

export default function Node(props: any) {
  const [descendants, setDescendants] = React.useState([] as TreeNode[]);
  const [show, setShow] = React.useState(false);

  const showButton = () => setShow(true);
  const hideButton = () => setShow(false);

  const createWhiteSpace = (ends: boolean[]) => {
    let res = "";

    for (let i = 0; i < ends.length - 1; i++) {
      const end = ends[i];
      res += !end ? "│".concat("\xa0".repeat(tabspace)) : "\xa0".repeat(tabspace)
    }

    res += props.end ? '└──' : '├──';
    return res;
  }

  const add = () => {
    descendants.push({ value: 'fileOrFolder', descendants: [], level: props.level + 1 });
    setDescendants(descendants);
  }

  const tabspace = 4;
  const ends = props.level === 0 ? [] : [...props.previousEnds, props.end]
  const whitespace = createWhiteSpace(ends);
  const prefix = props.level !== 0 ? whitespace : "";


  return (
    <div>
      <div className="" onMouseEnter={showButton} onMouseLeave={hideButton} style={{ height: "1.35rem" }} >
        <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
          {prefix}
          <div className="" >
            {props.name}
          </div>
          <Add show={show} add={add} />
        </Stack>
      </div>
      {descendants.map((d: any, index: number) =>
        <Node
          end={index === descendants.length - 1}
          name={d.value}
          key={index}
          level={props.level + 1}
          previousEnds={ends}
        />)
      }
    </div>
  )
}
