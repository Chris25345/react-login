import styled from "styled-components";

interface Button {
  width?: number;
  height?: number;
  color?: string;
}

export const ButtonContainer = styled.button<Button>`
  width: fit-content;
  heigth: ${(props) => (props.height ? `${props.height}px` : "15px")};
  background-color: ${(props) => (props.color ? `${props.color}` : "#c2d7f2")};
  padding: 10px 15px;
  border: none;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;

  :hover {
    box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  }
`;
