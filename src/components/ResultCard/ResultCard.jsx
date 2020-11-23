import React from "react";

import {
  ResultWrap,
  ResultItems,
  CollectionItem,
  List,
  Image,
} from "./ResultCardElements";

const ResultCard = (props) => {
  return (
    <>
      <ResultWrap>
        <ResultItems>
          <CollectionItem>
            <List>Location: {props.location}</List>
            <List>Condition: {props.condition}</List>
            <List>{props.temp} Degrees</List>
            <List>Local Time: {props.time}</List>
            <List>Wind: {props.wind} MPH</List>
            <Image src={props.icon} />
          </CollectionItem>
        </ResultItems>
      </ResultWrap>
    </>
  );
};
export default ResultCard;
