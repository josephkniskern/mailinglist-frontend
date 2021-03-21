import styled from "styled-components";
import { Avatar } from "@material-ui/core";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
`;

export const StyledAvatar = styled(Avatar)`
  border: 3px solid black;
`;
