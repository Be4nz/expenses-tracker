import CardTitle from "material-ui/Card/CardTitle";
import { LinkCardContainer, Note, Row } from "../styled/Card";
import { FormatDate, GetMonthName } from "../../utils/dateUtils";

interface Props {
  year: number;
  month: number;
}

const MonthCard: React.FC<Props> = ({ year, month }) => {
  return (
    <LinkCardContainer to={"/history/" + year + "/" + month}>
      <Row>
        <Note>{year + " " + GetMonthName(month)}</Note>
      </Row>
    </LinkCardContainer>
  );
};

export default MonthCard;
