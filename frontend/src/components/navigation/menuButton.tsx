import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";

const Button = styled("button")`
  position: absolute;
  top: 37px;
  right: 10px;
  transform: translate(-50%, -50%);
  background-color: rgb(30, 30, 30);
  border: none;
  outline: none;
`;

const StyledMenuIcon = styled(MenuIcon)`
  color: white;
  font-size: 40px;
`;

interface Props {
  onClick: () => void;
}

const MenuButton: React.FC<Props> = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <StyledMenuIcon />
    </Button>
  );
};

export default MenuButton;
