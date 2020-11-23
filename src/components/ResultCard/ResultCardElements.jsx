import styled from "styled-components";

// ResultWrap,
// ResultItems,
// CollectionItem,
// List

export const ResultWrap = styled.div`
  width: 450px;
  height: 400px;
  text-align: center;
  color: #000;
`;

export const ResultItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
`;

export const CollectionItem = styled.ul`
  list-style-type: none;
`;

export const List = styled.li`
  text-decoration: none;
  text-align: center;
  color: #000;
`;

export const Image = styled.img`
  width: 50px;
`;
