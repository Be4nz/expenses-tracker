import { Paper, styled } from "@mui/material";

export const Container = styled(Paper)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 600px;
  width: 500px;
  background-color: rgb(39, 38, 45);
  color: white;
  radius: 5px;
`;
