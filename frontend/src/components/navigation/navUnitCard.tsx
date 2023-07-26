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
  cursor: pointer;
`;

const IconContainer = styled("div")`
  margin-right: 8px;
  display: flex;
  align-items: center;
`;

const Button = styled("button")`
  font-size: 21px;
  color: white;
  background-color: rgb(39, 38, 45);
  border: none;
  outline: none;
  cursor: pointer;
`;

interface Props {
  text: string;
  icon: JSX.Element;
  link: string;
  onClick?: () => void;
}

const NavUnitCard: React.FC<Props> = ({ text, icon, link, onClick }) => {
  return (
    <Card to={link}>
      <IconContainer>{icon}</IconContainer>{" "}
      <Button onClick={onClick}>{text}</Button>
    </Card>
  );
};

export default NavUnitCard;
