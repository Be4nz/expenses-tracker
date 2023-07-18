import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Card = styled(Link)`
  text-decoration: none;
  height: 30px;
  font-size: 22px;
  background-color: rgb(39, 38, 45);
  color: white;
  margin: 20px 20px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px;
`;

const IconContainer = styled("div")`
  margin-right: 8px;
  display: flex;
  align-items: center;
`;

const Text = styled("span")`
  font-size: 21px;
  color: white;
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
      <IconContainer>{icon}</IconContainer> <Text>{text}</Text>
    </Card>
  );
};

export default NavUnitCard;
