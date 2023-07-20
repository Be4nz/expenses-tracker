import { useEffect, useState } from "react";
import MonthCard from "../components/history/MonthCard";
import { Title } from "../components/styled/Title";
import { getMinDate, getMaxDate } from "../api/history";
import LoadingWrapper from "../components/loadingWrapper";
import { ListContainer } from "../components/styled/ListContainer";

interface MonthInRange {
  year: number;
  month: number;
}

const History = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [monthsInRange, setMonthsInRange] = useState<MonthInRange[]>();

  const getMonthsInRange = (minDate: Date, maxDate: Date) => {
    const monthsInRange: MonthInRange[] = [];
    let currentDate = maxDate;

    while (
      currentDate.getFullYear() * 10 + currentDate.getMonth() >=
      minDate.getFullYear() * 10 + minDate.getMonth()
    ) {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      monthsInRange.push({ year, month });

      currentDate.setMonth(currentDate.getMonth() - 1);
    }

    return monthsInRange;
  };

  useEffect(() => {
    setLoading(true);
    console.log(new Date(2023, 6));
    console.log(new Date(2023, 5));

    Promise.all([getMaxDate(), getMinDate()])
      .then(([maxData, minData]) => {
        const monthsInRange = getMonthsInRange(
          new Date(minData[0].min),
          new Date(maxData[0].max)
        );
        console.log(monthsInRange);
        setMonthsInRange(monthsInRange);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <LoadingWrapper loading={loading} error={error}>
      <Title>History</Title>
      <ListContainer cardCount={4}>
        {monthsInRange &&
          monthsInRange.map((monthInRange) => (
            <MonthCard
              key={monthInRange.year.toString() + monthInRange.month.toString()}
              year={monthInRange.year}
              month={monthInRange.month}
            />
          ))}
      </ListContainer>
    </LoadingWrapper>
  );
};

export default History;
