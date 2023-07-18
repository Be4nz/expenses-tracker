import styled from "@emotion/styled";

const ValueType = styled("p")`
  color: rgb(159, 159, 159);
  font-size: 25px;
`;

const Value = styled("p")`
  color: white;
  font-size: 30px;
`;

interface Props {
  title: string;
  value: any;
}

const ValueLine: React.FC<Props> = ({ title, value }) => {
  return (
    <>
      <ValueType>{title}</ValueType>
      <Value>{value}</Value>
    </>
  );
};

export default ValueLine;
