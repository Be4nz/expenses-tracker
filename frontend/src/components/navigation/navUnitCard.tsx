import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Card = styled(Link)`
  text-decoration: none;
  height: 30px;
  font-size: 20px;
  background-color: rgb(39, 38, 45);
  color: white;
  margin: 10px 10px;
`;

const NavUnitCard = ({
  text,
  icon,
  link,
}: {
  text: string;
  icon: JSX.Element;
  link: string;
}) => {
  return (
    <Card to={link}>
      {icon} {text}
    </Card>
  );
};

export default NavUnitCard;
