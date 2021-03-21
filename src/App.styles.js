import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import ListIcon from "@material-ui/icons/List";

export const Wrapper = styled.div`
  height: 77vh;
  border: 3px solid gainsboro;
  border-radius: 30px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;
`;

export const StyledAvatar = styled(Avatar)`
  border: 10px solid black;
`;

export const StyledListIcon = styled(ListIcon)`
  position: fixed;
  left: 50px;
  top: 50px;
`;
