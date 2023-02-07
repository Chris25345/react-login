import styled from "styled-components";
import { ButtonProps } from "../button";

export const ButtonContainer = styled.button<ButtonProps>`
  max-width: ${(props) => (props.width ? `${props.width}px` : "fit-content")};
  width: 100%;
  heigth: ${(props) => (props.height ? `${props.height}px` : "15px")};
  background-color: ${(props) => (props.color ? `${props.color}` : "#c2d7f2")};
  padding: 10px 15px;
  border: none;
  color: white;
  border-radius: ${(props) => (props.radius ? `${props.radius}px` : "4px")};
  cursor: pointer;
  font-weight: 600;
  font-family: "Montserrat";

  :disabled {
    background-color: #bfbcba;
  }

  :hover {
    box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  }
`;
