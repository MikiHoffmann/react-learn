import React from "react";
import BridgeItem from "./BridgeItem";

export default function BridgeList(props) {
  return (
    <ul className="listContainer">
      {props.bridgeItems.map((bridge) => (
        <BridgeItem
          key={bridge.id}
          id={bridge.id}
          image={bridge.image}
          title={bridge.title}
          address={bridge.address}
          description={bridge.description}
        />
      ))}
    </ul>
  );
}
