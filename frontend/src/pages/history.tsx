import MonthCard from "../components/history/MonthCard";
import { Title } from "../components/styled/Title";

const History = () => {
  return (
    <div>
      <Title>History</Title>
      <MonthCard date={new Date()} />
    </div>
  );
};

export default History;
