import styled from "styled-components";
import { BasicTypography } from "../../../core/styled";

export const StyledTypography = styled(BasicTypography)`
  color: black;
  font-weight: 800;
  font-size: 20px;
`;

export const StyledColoredTypography = styled(StyledTypography)`
  color: #f2a74b;
`;

export const Box = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: row;
  align-items: center;
  height: fit-content;
`;
