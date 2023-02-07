import styled from "styled-components";
import { BasicTypography } from "../../../core/styled";

export const NavigationBox = styled.div`
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #8fafd9;
`;

export const Typography = styled(BasicTypography)`
  color: white;
  font-weight: 400;
`;
