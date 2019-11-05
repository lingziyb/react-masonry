import React, { useMemo } from "react";
import "./index.less";
import Column from "./column";

export interface Item {
  width: number;
  height: number;
}

interface MasonryProps<T> {
  column?: number;
  list: T[];
  renderItem: Function;
}

interface ColumnProps<T> {
  data: T[];
  height: number;
}

export default function Masonry<T extends Item>(props: MasonryProps<T>) {
  const { column = 2, list } = props;

  const columns = useMemo(() => {
    let arr: ColumnProps<T>[];
    arr = Array.from({ length: column }, () => {
      return { data: [], height: 0 };
    });

    if (list.length > 0) {
      list.forEach(item => {
        const temp = [...arr];
        const minCol = temp.sort((a, b) => a.height - b.height)[0];

        minCol.data.push(item);
        minCol.height += item.height / item.width;
      });
    }

    return arr;
  }, [list]);

  return (
    <div className="masonry">
      {columns.map((column, index) => {
        return (
          <Column
            data={column.data}
            key={index}
            renderItem={props.renderItem}
          ></Column>
        );
      })}
    </div>
  );
}
