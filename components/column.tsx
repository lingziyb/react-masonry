import React from "react";

interface ColumnProps<T> {
  data: T[];
  renderItem: Function;
}
export default function Column<T>(props: ColumnProps<T>) {
  const { data, renderItem } = props;

  return (
    <div className="column">
      {data.map((element: T, index: number) => {
        return (
          <div key={index} style={{ display: "flex" }}>
            {renderItem(element)}
          </div>
        );
      })}
    </div>
  );
}
