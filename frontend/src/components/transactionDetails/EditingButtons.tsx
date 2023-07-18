import styled from "@emotion/styled";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const ButtonContainer = styled("div")`
  position: absolute;
  right: 10px;
  transform: translate(-50%, -50%);
  bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled("button")`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background-color: rgb(159, 159, 159);
  color: rgb(39, 38, 45);
  border: none;
  margin: 20px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface Props {
  onClickDelete: () => void;
  onClickEdit: () => void;
}

const EditingButtons: React.FC<Props> = ({ onClickDelete, onClickEdit }) => {
  return (
    <ButtonContainer>
      <Button onClick={onClickDelete}>
        <DeleteIcon fontSize="large" />
      </Button>
      <Button onClick={onClickEdit}>
        <EditIcon fontSize="large" />
      </Button>
    </ButtonContainer>
  );
};

export default EditingButtons;
