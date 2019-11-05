import Masonry from "../../components/index";
import { useState, useEffect } from "react";
import React from "react";
import { getList } from "../api";
import "./index.less";

export interface ItemProps {
  imgUrl: string;
  title: string;
  column?: number;
  width: number;
  height: number;
}

function renderItem(props: ItemProps): React.ReactElement {
  return (
    <div className="item">
      <img src={props.imgUrl} alt="" />
      <p>{props.title}</p>
    </div>
  );
}

export default function Index() {
  const [page] = useState(1);
  const [list, setList] = useState<ItemProps[]>([]);

  useEffect(() => {
    getList(page).then((res: ItemProps[]) => setList(res));
  }, [page]);

  return (
    <div className="page">
      <Masonry column={3} list={list} renderItem={renderItem} />
    </div>
  );
}
