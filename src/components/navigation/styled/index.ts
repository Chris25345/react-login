import styled from "styled-components";
import { BasicTypography } from "../../../core/styled";

interface BoxProps {
  doesButtonExist: boolean;
}

export const NavigationBox = styled.div<BoxProps>`
  height: 30px;
  display: flex;
  justify-content: ${(props) =>
    props.doesButtonExist ? "space-between" : "flex-start"};
  align-items: center;
  padding: 15px 30px;
  background-color: #8fafd9;

  @media (max-width: 500px) {
    flex-direction: column;
    height: fit-content;
    text-align: center;
    gap: 10px;
    justify-content: ${(props) =>
      props.doesButtonExist ? "space-between" : "center"};
  }
`;

export const Typography = styled(BasicTypography)`
  color: white;
  font-weight: 400;
`;
