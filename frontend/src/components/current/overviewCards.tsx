import styled from "@emotion/styled";
import { Paper } from "@mui/material";

const Card = styled(Paper)`
  width: 45%;
  height: 180px;
  background-color: rgb(39, 38, 45);
  text-align: center;
`;

const Container = styled("div")`
  display: flex;
  width: 70%;
  margin: 20px auto;
  justify-content: space-between;
  flex-direction: row;
`;

const CardTitle = styled("p")`
  font-size: 18px;
  color: rgb(159, 159, 159);
  margin-top: 30px;
  margin-bottom: 0%;
`;

const Income = styled("p")`
  font-size: 48px;
  color: #72c675;
  margin-top: 20px;
`;

const Expense = styled("p")`
  font-size: 48px;
  color: #b84f4f;
  margin-top: 20px;
`;

const OverviewCards = ({
  income,
  expense,
}: {
  income: number;
  expense: number;
}) => {
  return (
    <Container>
      <Card variant="outlined">
        <CardTitle>income</CardTitle>
        <Income>+${income}</Income>
      </Card>
      <Card variant="outlined">
        <CardTitle>expense</CardTitle>
        <Expense>-${expense}</Expense>
      </Card>
    </Container>
  );
};

export default OverviewCards;
