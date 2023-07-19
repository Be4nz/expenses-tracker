import CardTitle from "material-ui/Card/CardTitle";
import { LinkCardContainer, Note, Row } from "../styled/Card";
import { FormatDate, GetMonthName } from "../../utils/dateUtils";

interface Props {
  date: Date;
}

const MonthCard: React.FC<Props> = ({ date }) => {
  return (
    <LinkCardContainer to={""}>
      <Row>
        <Note>{GetMonthName(date.getMonth())}</Note>
      </Row>
    </LinkCardContainer>
  );
};

export default MonthCard;
