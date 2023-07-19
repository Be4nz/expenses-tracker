import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Transaction } from "../../types/transaction";

export const LinkCardContainer = styled(Link)`
  width: 70%;
  height: 180px;
  margin: auto;
  background-color: rgb(39, 38, 45);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  text-decoration: none;
  border-radius: 5px;
`;

export const Row = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 89%;
  margin: 25px 70px;
`;

export const Note = styled("p")`
  color: white;
  margin: 0;
  font-size: 36px;
`;

export const Amount = styled("p")<{ transaction: Transaction }>`
  color: ${({ transaction }) =>
    transaction.type === "EXPENSE" ? "#B84F4F" : "#72C675"};
  margin: 0;
  font-size: 48px;
`;

export const Type = styled("p")`
  color: rgb(159, 159, 159);
  margin: 0;
  font-size: 20px;
`;

export const Date = styled("p")`
  color: rgb(159, 159, 159);
  margin: 0;
  font-size: 20px;
`;
