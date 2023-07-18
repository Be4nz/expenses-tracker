import styled from "@emotion/styled";
import { Paper, css } from "@mui/material";

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

const BalanceNumber = styled("p")<{ color: string }>`
  ${(props) => css`
    color: ${props.color};
  `}
  font-size: 64px;

  margin-top: 20px;
`;

interface Props {
  balance: string;
  title: string;
  color: string;
}

const BalanceCard: React.FC<Props> = ({ balance, title, color }) => {
  return (
    <Balance variant="outlined">
      <BalanceTitle>{title}</BalanceTitle>
      <BalanceNumber color={color}>{balance}</BalanceNumber>
    </Balance>
  );
};

export default BalanceCard;
