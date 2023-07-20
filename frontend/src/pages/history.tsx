import { useEffect, useState } from "react";
import MonthCard from "../components/history/MonthCard";
import { Title } from "../components/styled/Title";
import { getMinDate, getMaxDate } from "../api/history";
import LoadingWrapper from "../components/loadingWrapper";
import { ListContainer } from "../components/styled/ListContainer";
import { Message } from "../components/styled/Message";
import { max } from "date-fns";

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

    Promise.all([getMaxDate(), getMinDate()])
      .then(([maxData, minData]) => {
        if (maxData[0].max !== null && minData[0].min !== null) {
          const monthsInRange = getMonthsInRange(
            new Date(minData[0].min),
            new Date(maxData[0].max)
          );
          setMonthsInRange(monthsInRange);
        }
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
        {monthsInRange && monthsInRange.length > 0 ? (
          monthsInRange.map((monthInRange) => (
            <MonthCard
              key={monthInRange.year.toString() + monthInRange.month.toString()}
              year={monthInRange.year}
              month={monthInRange.month}
            />
          ))
        ) : (
          <Message>Enter your first transaction to see the History</Message>
        )}
      </ListContainer>
    </LoadingWrapper>
  );
};

export default History;
