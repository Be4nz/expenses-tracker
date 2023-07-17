import styled from "@emotion/styled";

const Title = styled("p")`
  font-size: 20px;
  color: rgb(159, 159, 159);
  margin-left: 15%;
`;

const RecentTransactionsTitle = () => {
  return <Title>Recent transactions</Title>;
};

export default RecentTransactionsTitle;