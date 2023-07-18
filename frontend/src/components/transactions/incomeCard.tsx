import styled from "@emotion/styled";
import { Paper } from "@mui/material";

const Balance = styled(Paper)`
  width: 70%;
  height: 180px;
  margin: 20px auto;
  background-color: rgb(39, 38, 45);
  text-align: center;
`;

const BalanceTitle = styled("p")`
  font-size: 18px;
  color: rgb(159, 159, 159);
  margin-top: 30px;
  margin-bottom: 0%;
`;

const BalanceNumber = styled("p")`
  font-size: 64px;
  color: white;
  margin-top: 20px;
`;

const IncomeCard = ({ balance }: { balance: number }) => {
  return (
    <Balance variant="outlined">
      <BalanceTitle>Balance</BalanceTitle>
      <BalanceNumber>${balance}</BalanceNumber>
    </Balance>
  );
};

export default IncomeCard;
