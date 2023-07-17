import styled from "@emotion/styled";

const Button = styled("button")`
  margin: auto;
  background-color: rgb(30, 30, 30);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: 150px;
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 18px;
  &:hover {
    cursor: pointer;
  }
`;

interface Props {
  onClick: () => void;
}

const SeeMoreButton: React.FC<Props> = ({ onClick }) => {
  return <Button onClick={onClick}>See more</Button>;
};

export default SeeMoreButton;
