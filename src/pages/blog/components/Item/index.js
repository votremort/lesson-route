import React from "react";
import { useParams } from "react-router-dom";
import { content } from "../../content";

export const Item = () => {
  const { itemId } = useParams();
  const item = content.find((i) => i.id === itemId);
  return (
    <div>
      <div>{item.name}:</div>
      <div>{item.value}</div>
    </div>
  )
}
