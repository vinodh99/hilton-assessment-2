import styled from "styled-components";

export const AllRooms = styled.div`
  border-radius: 2px;
  height: 100px;
  width: 20%;
  border: solid 1px;
  margin-right: 10px;
  overflow: hidden;
  border-color: ${props => (props.active ? "#211818" : "grey")};
  background-color: ${props => (props.active ? "#ace5f9" : "#DBDBE3")};
`;

export const RoomHeader = styled.div`
  display: flex;
  padding-left: 10px;
  line-height: 20px;
  background-color: ${props => (props.active ? "#e0e5a5" : "#DBDBE3")};
`;
